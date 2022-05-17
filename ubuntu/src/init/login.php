<?php
/*
 * Warning: This file is only for local development and testing, do not commit to svn
 */
/*
 * $Id: login.php 12105 2010-09-02 04:23:15Z jesper.krogh $
 */
	define('NO_USER_REQUIRED', true);
	define('NO_CLOSE_SESSION', TRUE);
	define('NO_PERMISSION_REQUIRED', true);

	require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/init.lib");
    require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/logic/privacystatement/service/UserLegalLogService.php");
    require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/logic/SystemAdmin/User/Service/UserInformationService.php");
    require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/logic/SystemAdmin/Login/Service/Mslogin.php");
    require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/logic/SystemAdmin/Login/Dao/MsloginDao.php");
    use SystemAdmin\User\Service\UserInformationService as UserInformationService;

    // 使用固定8ID自动登录
    $user = $db->get("SELECT * FROM `user` WHERE `ActiveDirectoryID` = '80000110' LIMIT 1");
    userLogin($user->id, $user);
    die();

	define("PAGE_TITLE", html_xlate("Login"));

	if ($_SERVER['SERVER_ADDR'] == RADIUS_ON_IP) redirect("/auth.php");
	$validbrowser = FALSE;
	if (stristr($_SERVER["HTTP_USER_AGENT"], "MSIE 5.5") !== FALSE && stristr($_SERVER["HTTP_USER_AGENT"], "Mac") === FALSE) {
		$validbrowser = TRUE;
	} else if (stristr($_SERVER["HTTP_USER_AGENT"], "MSIE 6") !== FALSE && stristr($_SERVER["HTTP_USER_AGENT"], "Mac") === FALSE) {
		$validbrowser = TRUE;
	} else if (stristr($_SERVER["HTTP_USER_AGENT"], "MSIE 7") !== FALSE) {
		$validbrowser = TRUE;
	} else if (stristr($_SERVER["HTTP_USER_AGENT"], "Gecko") !== FALSE) {
		$validbrowser = TRUE;
	}

$aPageNotice = array();
$attention   = array();
$isLoginByExternalAD = false;
//use SSO with microsoft azure active directory
if (ifdef('ENABLE_SSO')) {

//     $relayState = $_REQUEST['RelayState'];
//     $samlResponse = $_REQUEST['SAMLResponse'];
//     $logoutResponse = $_REQUEST['LogoutResponse'];

    $singleSignOn = new \VIEW\Util\SingleSignOn\Impl\MicrosoftSingleSignOnImpl();
    if ($singleSignOn->isCallback()) {
        try {
            $emailAddress = $singleSignOn->verifySignOnCallback();
            $_SESSION['SSONameId'] = $emailAddress;
            //todo
            $user = $db->get("user", "Status = 'Active' AND LOWER(Username) = LOWER(" . $db->quote($emailAddress) . ")");
            if (empty($user)) {
                redirect("illegalAuth.php?url=" . urlencode($singleSignOn->getRelayUrl()));
            } else {

                $JS['exec'][] = "$('#tab_1').hide();";
                $JS['exec'][] = "$('.tab_1').hide();";

                $_REQUEST['url'] = $singleSignOn->getRelayUrl();
                $isLoginByExternalAD = true;
                $userService = UserInformationService::getInstance();
                $privacyService = new PrivacyStatementService();
                $legalLog = new UserLegalLogService();
                if ($_COOKIE['isAgree']) {
                    if ($_COOKIE['isAgree'] == 'agree') {
                        // Get the latest release of legal ID
                        $legalInfo = $privacyService->getLegalInfo();
                        // Check whether users agree with the latest legal notes version
                        $res = $userService->getUserLegalAction($user->id, $legalInfo['Id']);
                        if ($res) {
                            // login
                            userLogin($user->id, $user, null, null, null, true);
                            setcookie('isAgree',null);
                        } else {
                            setcookie('isAgree',null);
                            userLogin($user->id, $user, $_COOKIE["isAgree"], $legalInfo['Id'], $legalLog, true);
                        }

                    } else {
                        // Get the latest release of legal ID
                        $legalInfo = $privacyService->getLegalInfo();
                        // Check whether users agree with the latest legal notes version
                        $res = $userService->getUserLegalAction($user->id, $legalInfo['Id']);

                        // Record whether the user agrees
                        $userService->set($user->id, $_COOKIE["isAgree"], $legalInfo['Id']);
                        // Insert the user disagrees with the record and logout history
                        $legalLog->insertUserLegalAction($_COOKIE["isAgree"],$user->id, "VIEW");

                        $JS['exec'][] = "$('#modal-lg').modal('show');";
                        $JS['exec'][] = 'legal();';
                        setcookie('isAgree',null);
                    }
                } else {
                    // Get the latest release of legal ID
                    $legalInfo = $privacyService->getLegalInfo();
                    if ($legalInfo) {
                        // Check whether users agree with the latest legal notes version
                        $res = $userService->getUserLegalAction($user->id, $legalInfo['Id']);
                        if ($res) {
                            // login
                            userLogin($user->id, $user, null, null, null, true);
                        } else {
                            // open the legal notes
                            $JS['exec'][] = "$('#modal-lg').modal('show');";
                            $JS['exec'][] = 'legal();';
                        }
                    } else {
                        // If this site is no legal, and need to login
                        userLogin($user->id, $user, null, null, null, true);
                    }
                }
            }
        } catch (Exception $e) {
            exit;
        }
    } else {
        if (isset($_COOKIE['SSOLOGIN']) || $_REQUEST['loginMethod']) {
            if ($_COOKIE['SSOLOGIN'] == 1 || $_REQUEST['loginMethod'] == 'SSO') {
                $singleSignOn->signOn($_REQUEST['url']);
                exit;
            }
        } else {
            redirect("loginSelection.php?url=" . urlencode($_REQUEST['url']));
            exit;
        }
    }
}

/***************************************************************
 *                        MS Login Begin
 ***************************************************************/
// error message
if( $_GET['msCode'] === 'uError' ){
    $loginInfoTitle = xlate('No Access');
    $loginInfoDetail = xlate("Your O365 account has no access to visit this site. \nplease contact your country system administrator.");
    logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
    $aPageNotice[] = array(
        "title"=>$loginInfoTitle,
        "content"=>$loginInfoDetail,
    );
} else if ($_GET['msCode'] === 'tokenError') {
    $loginInfoTitle = xlate('Token Error.');
    $loginInfoDetail = xlate("Token parsing failed. \nPlease contact your system administrator");
    logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
    $aPageNotice[] = array(
        "title"=>$loginInfoTitle,
        "content"=>$loginInfoDetail,
    );
}
if($_GET['state']){
    $parseUrl = parse_url(base64_decode($_GET['state']));
    $host = $parseUrl['scheme'].'://'.$parseUrl['host'];
}

// Jump to Microsoft landing page
# The user clicks the Microsoft login button on the login page to jump here
if( !empty($_GET['ms_action']) && $_GET['ms_action'] === 'msLogin' ){
    // Default jump page after successful login
    $page = '/home.php';
    // Use this value if the default jump page is not empty
    if ( !empty($_GET['defaultUrlPage']) && $_GET['defaultUrlPage'] !== '/' ) {
        $page = base64_decode($_GET['defaultUrlPage']);
    }

    $parseUrl = parse_url( $_SERVER['SCRIPT_URI'] );
    $stateUrl = $parseUrl['scheme'] . '://' . $parseUrl['host'] . $page.'?position='.$_GET['position'];

    // The mslogin class needs to pass in a redirected URL when instantiating
    $msObj = new \SystemAdmin\Login\Service\MsLogin( base64_encode($stateUrl) ,$_GET['position']);
    $msObj->jumpLoginPage();exit;
}

# Users will jump here after successfully logging in the Microsoft login page
# The code parameter is the token used to get the token
# The state parameter is the URL used to jump after successful login
if( !empty($_GET['code']) && !empty($_GET['state']) ){
    $state = base64_decode($_GET['state']);

    if(!strrpos($state,'#view'))
        return false;

    $stateRes = strtr($state,['#view'=>'']);

    $parURL = explode('?position=', $stateRes);
    $jumpUrl = base64_encode($parURL[0]);
    $msObj = new \SystemAdmin\Login\Service\MsLogin($jumpUrl,$parURL[1]);

    // Exchange token with token
    $res = $msObj->setParams($_GET)->getToken();

    logLoginInfo($_REQUEST['frm_username'], $user->id, false, 'O365 Login Info Token Res:' . ', ' . json_encode($res), PAGE_TITLE);

    if(!$res['access_token']){
        // Request failed, e.g. curl not available
        $url = $host . '/login.php?msCode=tokenError';
        redirect($url);
    }

    // Resolve ID token to get user information. The user mailbox is used here
    $email = $msObj->getUserInfo($res['access_token']);
    logLoginInfo($_REQUEST['frm_username'], $user->id, false, 'O365 Login Token UserInfo Info:' .', '.  $email, PAGE_TITLE);

    // Query whether there is the user in the database according to the mailbox
    $msLoginObj = new \SystemAdmin\Login\Dao\MsloginDao();
    $userInfo = $msLoginObj->getUserInfo($email);
    logLoginInfo($_REQUEST['frm_username'], $user->id, false, 'O365 Login Info View User Info:' .', '.  json_encode($userInfo), PAGE_TITLE);
    // Store the token in the user information table if the user exists.
    // Otherwise, an exception will be thrown
    if($userInfo === false){
        $prgMs = preg_match('/^(\d{8})@(.*)$/',$email,$matches);

        $sql = "SELECT `value` AS domainList FROM ".GLOBAL_DATABASE_NAME.".`systemsetting` WHERE
        DefineSymbol='O365_LOGIN_OPTION_WHITE_DOMAIN_LIST'";
        $rd = $db->get($sql);

        if($prgMs && in_array($matches[2],explode(',',$rd->domainList),true)){
            $user8id = $matches[1];
            $userInfo = $msLoginObj->getUserInfo($user8id,true);
        }
    }

    if(!empty($userInfo)){
        $csql = "SELECT COUNT(*) AS num FROM `user_information` WHERE `UserId`='{$userInfo->id}'";
        $cres = $db->get($csql);

        if($cres->num){
            $exeSql = "UPDATE `user_information` SET `Token`='{$res['access_token']}' WHERE `UserId`='{$userInfo->id}'";
        }else{
            $exeSql = "INSERT INTO `user_information` (`UserId`,`Token`,`LegalId`) VALUES ({$userInfo->id},'{$res['access_token']}',0)";
        }

        $db->exec($exeSql);

        $url = $host .'/login.php?ms_action=todoLogin&uid=' . $userInfo->id . '&state=' . $jumpUrl;
    } else {
        $url = $host . '/login.php?msCode=uError';
    }
    redirect($url);

}
// Site login
if(!empty($_GET['ms_action']) && !empty($_GET['uid']) && !empty($_GET['state']) && $_GET['ms_action']==='todoLogin'){

    $jumpUrl=base64_decode($_GET['state']);

    $SQL = "SELECT id as uid , id FROM `user` WHERE Status='Active' AND `id`={$_GET['uid']}";
    $rd = $db->get($SQL);

    if(is_null($rd->uid)){
        // user does not exist
        $url = $host . '/login.php?msCode=uError';
        redirect($url);
    }else{
        $gdb = connect_to_tkglobal_db();

        // Check whether the token exists according to the user ID
        $sql = 'select Token from user_information where UserId='.$_GET['uid'];
        $data = $gdb->get($sql);

        if(!empty($data->Token)){

            //check user if his employee function role
            if(ifdef('ENABLE_LIST_OF_LOGGED_AGENTS')){
                checkFunctionalRole($_GET['uid']);
            }

            $_SESSION['currentuserid']=$_GET['uid'];
            $_SESSION['loginsource']='o365';
            logAction(DEFARG, DEFARG, DEFARG, "Logged in", DEFARG, $rd->uid, 'O365');

            $userService = UserInformationService::getInstance();
            $privacyService = new PrivacyStatementService();
            $legalLog = new UserLegalLogService();
            if ($_COOKIE['isAgree']) {
                if ($_COOKIE['isAgree'] == 'agree') {
                    // Get the latest release of legal ID
                    $legalInfo = $privacyService->getLegalInfo();
                    // Check whether users agree with the latest legal notes version
                    $res = $userService->getUserLegalAction($rd->id, $legalInfo['Id']);
                    if ($res) {
                        // login
                        userLogin($rd->id, $rd, null, null, null, true, $jumpUrl);
                        setcookie('isAgree',null);
                        // Destroy token after successful login
                        $sql = "update user_information set Token='' where UserId=".$_GET['uid'];
                        $gdb->exec($sql);
                    } else {
                        setcookie('isAgree',null);
                        userLogin($rd->id, $rd, $_COOKIE["isAgree"], $legalInfo['Id'], $legalLog, true, $jumpUrl);
                        // Destroy token after successful login
                        $sql = "update user_information set Token='' where UserId=".$_GET['uid'];
                        $gdb->exec($sql);
                    }
                }
            } else {
                // Get the latest release of legal ID
                $legalInfo = $privacyService->getLegalInfo();
                if ($legalInfo) {
                    // Check whether users agree with the latest legal notes version
                    $res = $userService->getUserLegalAction($rd->id, $legalInfo['Id']);
                    if ($res) {
                        // login
                        userLogin($rd->id, $rd, null, null, null, true, $jumpUrl);
                        // Destroy token after successful login
                        $sql = "update user_information set Token='' where UserId=".$_GET['uid'];
                        $gdb->exec($sql);
                    } else {
                        setcookie('isAgree','disagree');
                        setcookie('o365NoLoginLegal','on');
                    }
                } else {
                    // If this site is no legal, and need to login
                    userLogin($rd->id, $rd, null, null, null, true, $jumpUrl);
                    // Destroy token after successful login
                    $sql = "update user_information set Token='' where UserId=".$_GET['uid'];
                    $gdb->exec($sql);
                }
            }
        }else{
            $url = $host . '/login.php?msCode=uError';
            redirect($url);
        }
    }
}
// MS Login End
	if (array_key_exists("currentuserid", $_SESSION) && $_SESSION["currentuserid"] > 0 ) {
	    $logouturl = LOGOUT_PAGE;
	 if(isset($_REQUEST['url']) && $_REQUEST['url']) {
	    $logouturl .= ((strpos("?", $loginurl) == FALSE) ? "?" : "&") . "url=" . urlencode($_REQUEST['url']);
	 }
		redirect($logouturl);
	}

	$SQL = "SELECT ad.* \n"
	     . "  FROM site si \n"
	     . "       LEFT JOIN " . GLOBAL_DATABASE_NAME . ".activedirectory ad ON ad.SiteID = si.id \n"
	     . " WHERE si.id = " . SITE_ID . "\n"
	     . "       AND ad.IsEnabled = 1 \n";
	$ldap = $db->get($SQL);

	$loginError = FALSE;
	$isADUser = FALSE;
	//start of apac customer link
	$_SESSION['TK_IIDCUSTOMER']='';
	$url = $_REQUEST['url'];
	$u1= substr($url,strpos($url,'?')+1);

	$_REQUEST['apaclogin']= substr($u1,strpos($u1,'apaclogin=')+10);
	if($_REQUEST['apaclogin']!='')
		{
			$apaclogin = fnDecrypt($_REQUEST['apaclogin'], "apaclogin");
			$valuearray = explode('&',$apaclogin);
			foreach($valuearray AS $key=>$value)
			{
			$primevariable = explode('=',$value);
			$_REQUEST[$primevariable[0]] = $primevariable[1];
			}
		}

    /* For App */
        $urlParams = explode('&',$u1);
        foreach ($urlParams as $val) {
            $variableArr = explode('=',$val,2);
            if ($variableArr[0] == 'app' && $variableArr[1] == 'VSM') {
                $_SESSION["app"] = "VSM";
            }
        }
    /* EDN */

$leveltype= $_REQUEST['globalcustomeraccess'];
$curuserid= $_REQUEST['loginuserid'];

//Verification code
$compare = strcasecmp($_REQUEST['frm_captcha'], $_SESSION['captcha']);
if (!empty($_REQUEST['frm_captcha']) && $compare !=0 ){
    $loginInfoTitle = xlate('Incorrect Validation Code');
    $loginInfoDetail = xlate("Incorrect Validation Code, please try again.");
    logLoginInfo($_REQUEST["frm_username"], 0, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
    $aPageNotice[] = array(
        "title"=>$loginInfoTitle,
        "content"=>$loginInfoDetail,
    );
}
/*
else if(isset($validbrowser) && $leveltype=='apac' && $curuserid != "")
{
    $username = (strstr($_REQUEST["saveusername"], "@") === FALSE ? $_REQUEST["saveusername"] . DEFAULT_EMAIL_DOMAIN : $_REQUEST["saveusername"]);
    $user = $db->get("user", "Status = 'Active' AND id = '{$curuserid}'");
    if (!empty($_SESSION['isforgotpass'])){
        if (array_key_exists('errorHead', $_SESSION)){
            unset($_SESSION['errorBody']);
            unset($_SESSION['errorBody']);
        }elseif (array_key_exists('successHead', $_SESSION)){
            unset($_SESSION['successHead']);
            unset($_SESSION['successBody']);
        }
        unset($_SESSION['isforgotpass']);
    }

    if ($user) {
        if (SITE_ID != GLOBAL_SITEID) {
            $loginInfoTitle = xlate('No Access');
            $loginInfoDetail = xlate("This account has no access to this site. \nPlease contact your system administrator");
            logLoginInfo($_REQUEST["frm_username"], $curuserid, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
            $aPageNotice[] = array(
                "title"=>$loginInfoTitle,
                "content"=>$loginInfoDetail,
            );
        } else {
            $pass = TRUE;
            if ($pass) {
                $_SESSION["currentuserid"] = $user->id;
                $sql = "SELECT l.Code as Code FROM " . GLOBAL_DATABASE_NAME . ".user_default_language udl
								JOIN `language` l ON udl.LanguageID = l.id
								WHERE udl.UserID =".$db->quote($_SESSION["currentuserid"])." and udl.SiteID = ".$db->quote(SITE_ID);
                $lan = $db->get($sql);
                if($lan){
                    $_SESSION["currentlanguage"] = $lan->Code;
                    setLanguage($_SESSION["currentlanguage"]);
                }
                $currentuser = &$user;
                setcookie("saveusername", $_REQUEST["frm_username"], time()+SAVE_USERNAME_TIME);
                setcookie("cookietype", 'apac', time()+SAVE_USERNAME_TIME);
                logAction(DEFARG, DEFARG, DEFARG, "Logged in");

                // clear account counter
                mmcache_rm($_REQUEST['frm_username']);

                if ($_REQUEST["donotlaunch"] || $_SERVER["REMOTE_ADDR"] == "192.168.1.24") {
                    redirect("/home.php");
                } else if (array_key_exists("url", $_REQUEST) && strlen($_REQUEST['url']) > 0 && $_REQUEST['url'] != '/') {
                    redirect($_REQUEST['url']);
                } else {
                    redirect(LAUNCH_PAGE);
                }
            } else {
                logCounter($_REQUEST['frm_username']);
                $_SESSION['saveusername'] = $_REQUEST["frm_username"];
                $loginInfoTitle = xlate('Password Incorrect');
                $loginInfoDetail = xlate("Please try again, checking that the spelling is correct.\nContact the System Administrator if problems persist.");
                logLoginInfo($_REQUEST["frm_username"], $curuserid, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                $aPageNotice[] = array(
                    "title"=>$loginInfoTitle,
                    "content"=>$loginInfoDetail,
                );
            }
        }
    } else {
        $loginInfoTitle = xlate('Username Unknown');
        $loginInfoDetail = xlate("Please try again, checking that the spelling is correct.");
        logLoginInfo($_REQUEST["frm_username"], $curuserid, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
        $aPageNotice[] = array(
            "title"=>$loginInfoTitle,
            "content"=>$loginInfoDetail,
        );
    }
}
*/
//end of apac customer link
else if (array_key_exists("token", $_REQUEST) && $_REQUEST["token"] != "" && array_key_exists("appType", $_REQUEST) && $_REQUEST["appType"] != ""&& array_key_exists("action", $_REQUEST) && $_REQUEST["action"] != "" ){
   require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/Mobility/CommonFunction.lib");
   $aToken=validateJWTToken($_REQUEST["token"]);


   if($aToken['errorCode']){
        redirect('/login.php');
        exit;
   }else{
        if(isset($_REQUEST['otherPara']) && $_REQUEST['otherPara']){
            $_REQUEST['url']=getRedirectUrl($_REQUEST["action"],$_REQUEST["appType"],$_REQUEST["otherPara"]);
        }else{
            $_REQUEST['url']=getRedirectUrl($_REQUEST["action"],$_REQUEST["appType"]);
        }
        $user = $db->get("user", "Status = 'Active' AND Id = " . $db->quote($aToken['userId']) );
        userLogin($user->id, $user);
   }
}
else if (isset($validbrowser) && array_key_exists("frm_username", $_REQUEST) && $_REQUEST["frm_username"] != "" && array_key_exists("frm_password", $_REQUEST) && $_REQUEST["frm_password"] != "") {
    if (!empty($_SESSION['isforgotpass'])){
        if (array_key_exists('errorHead', $_SESSION)){
            unset($_SESSION['errorHead']);
            unset($_SESSION['errorBody']);
        }elseif (array_key_exists('successHead', $_SESSION)){
            unset($_SESSION['successHead']);
            unset($_SESSION['successBody']);
        }
        unset($_SESSION['isforgotpass']);
    }
    $username = (strstr($_REQUEST["frm_username"], "@") === FALSE ? $_REQUEST["frm_username"] . DEFAULT_EMAIL_DOMAIN : $_REQUEST["frm_username"]);
    $user = $db->get("user", "Status = 'Active' AND LOWER(Username) = LOWER(" . $db->quote($username) . ")");
    $userLegalLog = new UserLegalLogService();
    $UserInformationServiceObj = UserInformationService::getInstance();
    require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/logic/privacystatement/service/PrivacyStatementService.php");
    $getLegalId = new PrivacyStatementService();
    $source = "VIEW";
    // Use Active Directory authentication if active directory is enabled
    // Only for employee account
    if ( ($user && $user->Type != 'Employee') || !$ldap ) {
        if ($user) {
            if (SITE_ID == GLOBAL_SITEID && !hasGlobalSiteAccess($user)) {
                $loginInfoTitle = xlate('No Access');
                $loginInfoDetail = xlate("This account has no access to this site. \nPlease contact your system administrator");
                logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                $aPageNotice[] = array(
                    "title"=>$loginInfoTitle,
                    "content"=>$loginInfoDetail,
                );
            } else {
                $pass = FALSE;

                //crypt
                if(chkPasswd($_REQUEST["frm_password"], $user->Password))
                    redirect("/passwordresetbynewencrypt.php?username=".$username);
                //ITCM377720:Update encrypt algorithm. 2016-11-16 added by Lacey.
                if (chkPasswdNew($_REQUEST['frm_password'], $user->Password)){
                    $pass = true;
                } elseif (ctype_digit(stripslashes($_REQUEST['frm_password']))) {	// Only bother checking radius server if the password is fully numeric
                    list($response, $err_response) = radius_auth(stripslashes($_REQUEST['frm_username']), stripslashes($_REQUEST['frm_password']));
                    if ($response === RADIUS_RESULT_SUCCESS) $pass = TRUE;

                }

                if ($pass) {
                    if ($_COOKIE['isAgree']) {
                        $recordData = [];
                        if ($_COOKIE['isAgree'] == 'agree') {
                            // Get the latest release of legal ID
                            $legalInfo = $getLegalId->getLegalInfo();
                            // Check whether users agree with the latest legal notes version
                            $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);
                            if ($res) {
                                // login
                                userLogin($user->id, $user);
                                setcookie('isAgree',null);
                            } else {
//                                // Record whether the user agrees
//                                $UserInformationServiceObj->set($user->id, $_COOKIE["isAgree"], $legalInfo['Id']);
//                                // Insert the user agree records and login history
//                                $userLegalLog->insertUserLegalAction($_COOKIE["isAgree"],$user->id,$source);
                                setcookie('isAgree',null);
                                userLogin($user->id, $user,$_COOKIE["isAgree"], $legalInfo['Id'],$userLegalLog);
                            }
                        } else {
                            // Get the latest release of legal ID
                            $legalInfo = $getLegalId->getLegalInfo();
                            // Check whether users agree with the latest legal notes version
                            // $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);

                            // Record whether the user agrees
                            $UserInformationServiceObj->set($user->id, $_COOKIE["isAgree"], $legalInfo['Id']);
                            // Insert the user disagrees with the record and logout history
                            $userLegalLog->insertUserLegalAction($_COOKIE["isAgree"],$user->id,$source);

                            $JS['exec'][] = "$('#modal-lg').modal('show');";
                            $JS['exec'][] = 'legal();';
                            setcookie('isAgree',null);
                        }
                    } else {
                        // Get the latest release of legal ID
                        $legalInfo = $getLegalId->getLegalInfo();
                        if ($legalInfo) {
                            // Check whether users agree with the latest legal notes version
                            $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);
                            if ($res) {
                                // login
                                userLogin($user->id, $user);
                            } else {
                                // open the legal notes
                                $JS['exec'][] = "$('#modal-lg').modal('show');";
                                $JS['exec'][] = 'legal();';
                            }
                        } else {
                            // If this site is no legal, and need to login
                            userLogin($user->id, $user);
                        }
                    }
					} else {
                    logCounter($_REQUEST["frm_username"]);
                    $_SESSION['saveusername'] = $_REQUEST["frm_username"];
                        $loginInfoTitle = xlate('Incorrect Password');
                        $loginInfoDetail = xlate("Incorrect Password. Please try again, checking that the spelling is correct.");
                        logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                        $aPageNotice[] = array(
                            "title"=>$loginInfoTitle,
                            "content"=>$loginInfoDetail,
                        );
                    }
					$loginError = TRUE;
				}
			} else {
                $loginInfoTitle = xlate('Username Unknown');
                $loginInfoDetail = xlate("Username Unknown. Please try again, checking that the spelling is correct.");
                logLoginInfo($_REQUEST["frm_username"], $user->id, false,$loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                $aPageNotice[] = array(
                    "title"=>$loginInfoTitle,
                    "content"=>$loginInfoDetail,
                );
			}
		} else {
			$isADUser = TRUE;

			// Check if username is 8ID
			if (preg_match('/^[0-9]{8}$/', $_REQUEST["frm_username"])) {

				// Check if user exists in our database
				if ($user = $db->get("user", "Status = 'Active' AND ActiveDirectoryID = {$db->quote($_REQUEST['frm_username'])}")) {

					// Connecting to ldap server..
					// If port is specified, use it, otherwise use the default port.
					if ($ldap->Port > 0) $ldapconn = @ldap_connect($ldap->HostName, $ldap->Port);
					else $ldapconn = @ldap_connect($ldap->HostName);

					if (!$ldapconn) {
                        $loginInfoTitle = xlate('Connection Error');
                        $loginInfoDetail = xlate("Could not connect to Active Directory server, please contact your local IT helpdesk or FOS admin");
                        logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                        $aPageNotice[] = array(
                            "title"=>$loginInfoTitle,
                            "content"=>$loginInfoDetail,
                        );
					} else {

						$ldaprdn  = $ldap->DomainName ? "{$_REQUEST['frm_username']}@{$ldap->DomainName}" : "{$_REQUEST['frm_username']}";
						$ldappass = $_REQUEST["frm_password"];
						$ldapbind = ldap_bind($ldapconn, $ldaprdn, $ldappass);

                    //research the india dev login error 500 start
                        $SqlTest = "SELECT si.* \n"
                         . "  FROM site si \n";
                        $r= $db->get($SqlTest);
                        $databaseName = $r->DatabaseName;
                            if($databaseName =="tkindia" ){
                                $ldapbind = true;
                        }
                   //research the india dev login error 500 end
						if ($ldapbind) {
                            if ($_COOKIE['isAgree']) {
                                $recordData = [];
                                if ($_COOKIE['isAgree'] == 'agree') {
                                    // Get the latest release of legal ID
                                    $legalInfo = $getLegalId->getLegalInfo();
                                    // Check whether users agree with the latest legal notes version
                                    $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);
                                    if ($res) {
                                        // login
                                        userLogin($user->id, $user);
                                        setcookie('isAgree',null);
                                    } else {
//                                        // Record whether the user agrees
//                                        $UserInformationServiceObj->set($user->id, $_COOKIE["isAgree"], $legalInfo['Id']);
//                                        // Insert the user agree records and login history
//                                        $userLegalLog->insertUserLegalAction($_COOKIE["isAgree"],$user->id,$source);
                                        setcookie('isAgree',null);
                                        userLogin($user->id, $user,$_COOKIE["isAgree"], $legalInfo['Id'],$userLegalLog);
                                    }
                                } else {
                                    // Get the latest release of legal ID
                                    $legalInfo = $getLegalId->getLegalInfo();
                                    // Check whether users agree with the latest legal notes version
                                    $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);

                                    // Record whether the user agrees
                                    $UserInformationServiceObj->set($user->id, $_COOKIE["isAgree"], $legalInfo['Id']);
                                    // Insert the user disagrees with the record and logout history
                                    $userLegalLog->insertUserLegalAction($_COOKIE["isAgree"],$user->id,$source);

                                    $JS['exec'][] = "$('#modal-lg').modal('show');";
                                    $JS['exec'][] = 'legal();';
                                    setcookie('isAgree',null);
                                }
                            } else {
                                // Get the latest release of legal ID
                                $legalInfo = $getLegalId->getLegalInfo();
                                if ($legalInfo) {
                                    // Check whether users agree with the latest legal notes version
                                    $res = $UserInformationServiceObj->getUserLegalAction($user->id, $legalInfo['Id']);
                                    if ($res) {
                                        // login
                                        userLogin($user->id, $user);
                                    } else {
                                        // open the legal notes
                                        $JS['exec'][] = "$('#modal-lg').modal('show');";
                                        $JS['exec'][] = "legal();";
                                    }
                                } else {
                                    // If this site is no legal, and need to login
                                    userLogin($user->id, $user);
                                }
                            }
						} else {
                        logCounter($_REQUEST["frm_username"]);
                            $_SESSION['saveusername'] = $_REQUEST["frm_username"];
                            $loginInfoTitle = xlate('Incorrect Password');
                            $loginInfoDetail = xlate("Incorrect Password. Please try again, checking that the spelling is correct.");
                            ldap_get_option($ldapconn, LDAP_OPT_DIAGNOSTIC_MESSAGE, $extended_error);
                            $errCode = disposeErrCode($extended_error);
                            logLoginInfo($_REQUEST["frm_username"], $user->id, false, $loginInfoTitle . ", " . $loginInfoDetail. ", " .$errCode, PAGE_TITLE);
                            $aPageNotice[] = array(
                                "title"=>$loginInfoTitle,
                                "content"=>$loginInfoDetail,
                            );
							$loginError = TRUE;
						}
					}
				} else {
                    $loginInfoTitle = xlate('Incorrect Username');
                    $loginInfoDetail = xlate("Incorrect Username, please try again.");
                    logLoginInfo($_REQUEST["frm_username"], 0, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                    $aPageNotice[] = array(
                        "title"=>$loginInfoTitle,
                        "content"=>$loginInfoDetail,
                    );
				}
			} else {
                $loginInfoTitle = xlate('Incorrect Username');
                $loginInfoDetail = xlate("Incorrect Username, please try again.");
                logLoginInfo($_REQUEST["frm_username"], 0, false, $loginInfoTitle . ", " . $loginInfoDetail, PAGE_TITLE);
                $aPageNotice[] = array(
                    "title"=>$loginInfoTitle,
                    "content"=>$loginInfoDetail,
                );
			}
		}
	}

	if (isset($frm_username) && $frm_username == "" && $_COOKIE["saveusername"] != "") $frm_username = $_COOKIE["saveusername"];

	// Include header
    require_once(SYSTEM_DIR . "/includes/responsive_header.php");
    if (array_key_exists('errorHead', $_SESSION)){
        $aPageNotice[] = array(
            "title"=>$_SESSION['errorHead'],
            "content"=>$_SESSION['errorBody'],
        );
    }
    if (array_key_exists('successHead', $_SESSION)){
        $attention[] = array(
            "title"=>$_SESSION['successHead'],
            "content"=>$_SESSION['successBody'],
        );
    }
if (!$validbrowser) {

	?>
	<div id="errorcell" style="display:block;">
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
		<th width="20%"><?php print html_xlate('Attention'); ?></th>
		<th width="80%"><?php print html_xlate('INCOMPATIBLE WEB BROWSER'); ?></th>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><?php print html_xlate('Sorry, your Web Browser is not supported by this application. Supported Browsers are:'); ?><br />
			<strong><?php print html_xlate('Windows'); ?></strong><br />
			<a href="http://www.microsoft.com/windows/ie/"><?php print html_xlate('Microsoft Internet Explorer 5.5'); ?></a> <?php print html_xlate('or greater') . ' ' . html_xlate('(for IE8 use the "compatibility mode")'); ?><br />
			<a href="http://www.mozilla.org/"><?php print html_xlate('Mozilla Web Browser'); ?></a><br />
			<strong><?php print html_xlate('Mac'); ?></strong><br />
			<a href="http://www.mozilla.org/projects/camino/"><?php print html_xlate('Camino (Mozilla)'); ?><br />
			</a><strong><?php print html_xlate('Linux'); ?></strong><br />
			<a href="http://www.mozilla.org/"><?php print html_xlate('Mozilla Web Browser'); ?></a><br />
		</td>
	</tr>
	</table>
	</div>
	<?php

}

?>
<?php
function userLogin($userId, $user, $isAgree= null, $legalId=null,$userLegalLog = null, $isSingleSignOn = false, $o365url="") {
    global $db;
    mmcache_rm($_REQUEST['frm_username']);
    $_SESSION["currentuserid"] = $userId;
    $sql = "SELECT l.Code as Code FROM " . GLOBAL_DATABASE_NAME . ".user_default_language udl
								JOIN `language` l ON udl.LanguageID = l.id
								WHERE udl.UserID =".$db->quote($_SESSION["currentuserid"])." and udl.SiteID = ".$db->quote(SITE_ID);
    $lan = $db->get($sql);
    if($lan){
        $_SESSION["currentlanguage"] = $lan->Code;
        setLanguage($_SESSION["currentlanguage"]);
    }

    //check user if his employee function role
    if(ifdef('ENABLE_LIST_OF_LOGGED_AGENTS')){
        checkFunctionalRole($userId);
    }

    setcookie("saveusername", $_REQUEST["frm_username"], time()+SAVE_USERNAME_TIME);
    setcookie("cookietype", 'local', time()+SAVE_USERNAME_TIME);

    if ($isSingleSignOn) {
        setcookie("SSOLOGIN", 1, time() + SAVE_USERNAME_TIME, "/", "fos.tkeasia.com");
    } else {
        setcookie("SSOLOGIN", 0, time() + SAVE_USERNAME_TIME, "/", "fos.tkeasia.com");
    }

    unset($_SESSION['TK_IIDCUSTOMER']);
    $_SESSION['TK_IIDCUSTOMER']='local';

    $UserInformationServiceObj = UserInformationService::getInstance();

    if(!empty($isAgree) && !empty($legalId) && !empty($userLegalLog)){
        $UserInformationServiceObj->set($user->id,$isAgree,$legalId);
        $userLegalLog->insertUserLegalAction($isAgree,$user->id,"VIEW");
    }else{
        $UserInformationServiceObj->set($user->id);
    }


    logAction(DEFARG, DEFARG, DEFARG, "Logged in", DEFARG, $userId);
    if($o365url){
        redirect($o365url);
    }else{
        if (!$isSingleSignOn) {
            require_once(SYSTEM_DIR . "/libs/logic/SystemAdmin/User/Service/UserPasswordService.php");
            $userPasswordObj= new \SystemAdmin\User\Service\UserPasswordService ($userId);
            $flg=$userPasswordObj->isPasswordExpired();
            if($flg){
                    redirect('/common/myaccount.php');
                    exit;
            }
        }
        mmcache_put("salesInterceptor_NI_".$user->id."_".session_id(),''); //DHC-A
        mmcache_put("salesInterceptor_MOD_".$user->id."_".session_id(),'');
        if ($_REQUEST["donotlaunch"] || $_SERVER["REMOTE_ADDR"] == "192.168.1.24") {
            redirect("/home.php");
        } else if (array_key_exists("url", $_REQUEST) && strlen($_REQUEST['url']) > 0 && $_REQUEST['url'] != '/') {
            if(preg_match("/^http(s)?:\\/\\/.+/",$_REQUEST['url'])){
                redirect(LAUNCH_PAGE);
            }else{
                redirect(html_entity_decode($_REQUEST['url']));
            }
        } else {
            redirect(LAUNCH_PAGE);
        }
    }
}

function checkFunctionalRole($userId){
    global $db;
    //isCallCenterStaff
    $isCallCenterStaff = 0;
    $employeeSql = "SELECT e.id,e.UserID,e.FunctionalRoleID,f.IsCallCenterStaff FROM employee e LEFT JOIN functionalrole f on e.FunctionalRoleID = f.id  WHERE e.UserID = " . $db->quote($userId);
    $employeeInfo = $db->get($employeeSql);
    if($employeeInfo){
        if(isset($employeeInfo->FunctionalRoleID) && $employeeInfo->IsCallCenterStaff == 1){
            $isCallCenterStaff = 1;
        }
    }
    $_SESSION['isCallCenterStaff'] = $isCallCenterStaff;
}
?>

<style type="text/css">
    #navbar{display: none !important;}
    #navbarf{display: none !important;}
    #header{top: 0; z-index: 999; background-color: transparent;}
    #header > div{background-color: transparent !important;}
    #title{display: none !important;}
    #login_translation{display:block;}
    #mobnav{display:none !important;}
    .content-wrapper{background-color: transparent;}
    body{background-color: transparent;}
    .notificationBar {height: auto; width: 100%; line-height: normal; font-size: inherit;}
</style>
<script src='/static/bootstrap/3.3.7/js/bootstrap.min.js'></script>
<!-- begin form -->
<div>
    <div class="login_bc"></div>
    <div class="content-wrapper">
    <section class="content">
            <div class="login_alert">
        <?php if (!empty($attention)){?>
                    <div class="alert alert-success" id="hidden-grid-success">
                <?php FOREACH($attention as $v):?>
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <h4><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> <label id="errTitle"><?=mb_htmlentities($v['title'])?></label></h4>
                    <label id="errContent"><?=mb_htmlentities($v['content'])?></label>
                <?php ENDFOREACH; ?>
            </div>
        <?php }
        if ( !empty($aPageNotice) )
        {
            ?>
                <div class="alert alert-danger" id="hidden-grid-danger">
                <?php FOREACH($aPageNotice as $v):?>
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <h4><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> <label id="errTitle"><?=mb_htmlentities($v['title'])?></label></h4>
                    <label id="errContent"><?=mb_htmlentities($v['content'])?></label>
                <?php ENDFOREACH; ?>
            </div>

            <?php
        }else { ?>
                <div class="alert alert-danger" style="display: none;" id="hidden-grid">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> <label id="errTitle"><?print xlate("The following errors occured:")?></label></h4>
                <label id="errContent"><?print xlate('You must enter your username')?></label>
                </div>
            <?php }?>
            </div>
            <div class="login_box">

            <?php if ( $ldap ){
            ?>
                <div class="office_login_box pull-left">
                    <div class="office_login_title">
                        <span><?php print html_xlate('Welcome to')?> </span>
                        <i class="tk-icon icon-tk-view"></i>
                    </div>
                    <?php
                    $checkO365LoginFlag = "SELECT `value` FROM ".GLOBAL_DATABASE_NAME.".systemsetting WHERE DefineSymbol='O365_LOGIN_OPTION_HOST'";
                    $res = $db->get($checkO365LoginFlag);

                    if($res->value){?>
                        <a class="login_office" style="text-decoration: none;" href="?position=new&ms_action=msLogin&defaultUrlPage=<?php echo base64_encode($_REQUEST['url'].'#view'); ?>"
                           data-trigger="hover"
                           data-container="body"
                           data-placement="auto"
                           data-toggle="popover"
                           data-content="<?php print html_xlate('The new TK Elevator login will only work if your employee profile updated with new email address.It mostly works for newly joined colleague who is only assigned with TK Elevator email during the migration period,and please check with your administrator if you are not clear');?>">
                            <img src=" /img/microsoft_logo.png" />
                            <div class="font_office">
                                <div class="title_office"><?php print html_xlate('Sign in with Microsoft')?></div>
                                <span class="subtitle_office"><?php print html_xlate('TK Elevator')?></span>
                            </div>
                        </a>
                    <?php }?>
                    <a class="toggle_login_way email_a" onclick="toggleloginemail()"><?php print html_xlate('Login with VIEW account')?>
                        <i class="tk-icon icon-tk-arrow-link"></i>
                    </a>
                    <a class="toggle_login_way office_a" onclick="toggleloginoffice()"><?php print html_xlate('Login with Microsoft')?>
                        <i class="tk-icon icon-tk-arrow-link"></i>
                    </a>
                </div>
                <div class="login_card hidden">
                <div class="login_title"> <? print xlate('Welcome')?></div>
                <div class="login_tab">
                    <a class="tab sle" id="tab_1"><?php print PAGE_TITLE;?></a>
                </div>
                <?php print form("method:=POST, action:=/login.php, class:=form-horizontal, name:=login_form"); ?>
                    <div class="tab_1">
                        <div class="input_group">
                            <?php print textbox("frm_username", "class:=form-control login_input, placeholder:=".xlate('Username').", value:=".(isset($_REQUEST['frm_username']) ? mb_htmlentities($_REQUEST['frm_username']) : mb_htmlentities($_SESSION['saveusername'])) );?>
                            <?php print password("frm_password", "class:=form-control login_input, placeholder:=".xlate('Password').", value:=".(isset($_REQUEST['frm_username']) ? mb_htmlentities($_REQUEST['frm_password']) : mb_htmlentities($_SESSION['frm_password'])) );?>
                            <?php print hidden('url', DEFARG, mb_htmlentities($_REQUEST['url']));?>
                            <?php
                            $LSQL = "SELECT value FROM systemsetting WHERE DefineSymbol='PASSWORD_CHECK'";
                            $res = $db->get($LSQL);
                            if(mmcache_get($_REQUEST['frm_username'])>=$res->value){?>
                            <div class="captcha_box">
                                <div class="login_captcha">
                                    <?php print textbox("frm_captcha","class:=form-control login_input, placeholder:=".xlate("Please input validation code"))?>
                                </div>
                                <div class="captcha">
                                    <img src="./create_captcha.php" onclick="this.src='./create_captcha.php?'+ new Date().getTime();" alt=""/>
                                </div>
                            </div>
                            <? }?>
                        </div>
                        <?php
                        // If this site is no legal, it does not show
                        $getLegalId = new PrivacyStatementService();
                        $legalInfo = $getLegalId->getLegalInfo();
                        if ($legalInfo) {
                        ?>
                        <p style="margin-top: -20px; cursor:pointer;" data-toggle="modal" data-target="#modal-lg"><a id="legal_link" onclick='legal()'>《<?print xlate("Privacy Statement"); if ($_COOKIE['isAgree'] == 'agree') { ?>》<span id="hook" style="color: rgb(0,128,0);"> √</span><? } else { ?> 》<span id="hook" style="color: rgb(0,128,0);display: none;"> √</span> <? } ?></a></p>
                        <?php } ?>
                        <button class="btn btn-primary btn-block btn_login" id="login_button"><?print xlate("Login")?></button>
                        <?php
                        setDefaultDatabase($db, GLOBAL_DATABASE_NAME);
                        $GSQL="select value from systemsetting where DefineSymbol='PASSWORD_RESET_URL'";
                        $grow=$db->get($GSQL);
                        setDefaultDatabase($db, $GLOBALS['db']->name);
                        ?>
                        <p class="login_note">
                            <?php print html_xlate('If your account has any login issues, you can visit ') . " <a href=\"" . mb_htmlentities($grow->value) . "\" target=\"_blank\">" . mb_htmlentities($grow->value) . "</a>";  ?>
                            <a class="min_toggle_login_way" onclick="toggleloginoffice()"><?php print html_xlate('Login with Microsoft')?>
                                <i class="tk-icon icon-tk-arrow-link"></i>
                            </a>
                        </p>
                        </div>
                    </form>
                </div>
            <?php } ?>
            <?php if ( $ldap && !$loginError ) {
                // Do nothing
            } else if ( $ldap && $isADUser && $ldapconn && $user && $user->Type == 'Employee' ) { ?>
                <!-- Do nothing -->
            <?php } else { ?>
                <div class="office_login_box pull-left">
                    <div class="office_login_title">
                        <span><?php print html_xlate('Welcome to')?></span>
                        <i class="tk-icon icon-tk-view"></i>
                    </div>
                    <?php
                    $checkO365LoginFlag = "SELECT `value` FROM ".GLOBAL_DATABASE_NAME.".systemsetting WHERE DefineSymbol='O365_LOGIN_OPTION_HOST'";
                    $res = $db->get($checkO365LoginFlag);

                    if($res->value){?>
                        <a class="login_office" style="text-decoration: none;" href="?position=new&ms_action=msLogin&defaultUrlPage=<?php echo base64_encode($_REQUEST['url'].'#view');?>"
                           data-trigger="hover"
                           data-container="body"
                           data-placement="auto"
                           data-toggle="popover"
                           data-content="<?php print html_xlate('The new TK Elevator login will only work if your employee profile updated with new email address.It mostly works for newly joined colleague who is only assigned with TK Elevator email during the migration period,and please check with your administrator if you are not clear');?>">
                            <img src=" /img/microsoft_logo.png" />
                            <div class="font_office">
                                <div class="title_office"><?php print html_xlate('Sign in with Microsoft')?></div>
                                <span class="subtitle_office"><?php print html_xlate('TK Elevator')?></span>
                            </div>
                        </a>
                    <?php }?>
                    <a class="toggle_login_way email_a" onclick="toggleloginemail()"><?php print html_xlate('Login with VIEW account')?>
                        <i class="tk-icon icon-tk-arrow-link"></i>
                    </a>
                    <a class="toggle_login_way office_a" onclick="toggleloginoffice()"><?php print html_xlate('Login with Microsoft')?>
                        <i class="tk-icon icon-tk-arrow-link"></i>
                    </a>
                </div>
                <div class="login_card hidden">
                    <div class="login_title"> <? print xlate('Welcome')?></div>
                    <div class="login_tab">
                        <a class="tab sle" id="tab_1"><?php print PAGE_TITLE;?></a>
                        <a class="tab" id="tab_2"><?print xlate("New Password")?></a>
                    </div>
                    <?php print form("method:=POST, action:=/login.php, class:=form-horizontal, name:=login_form"); ?>
                        <div class="tab_1">
                            <div class="input_group">
                                <?php print textbox("frm_username", "class:=form-control login_input, placeholder:=".xlate('Username').", value:=".(isset($_REQUEST['frm_username']) ? mb_htmlentities($_REQUEST['frm_username']) : mb_htmlentities($_SESSION['saveusername'])) );?>
                                <?php print password("frm_password", "class:=form-control login_input, placeholder:=".xlate('Password').", value:=".(isset($_REQUEST['frm_username']) ? mb_htmlentities($_REQUEST['frm_password']) : mb_htmlentities($_SESSION['frm_password'])) );?>
                                <?php print hidden('url', DEFARG, mb_htmlentities($_REQUEST['url']));?>
                                <?php
                                $LSQL = "SELECT value FROM systemsetting WHERE DefineSymbol='PASSWORD_CHECK'";
                                $res = $db->get($LSQL);
                                if(mmcache_get($_REQUEST['frm_username'])>= $res->value){?>
                                <div class="captcha_box">
                                    <div class="login_captcha">
                                        <?php print textbox("frm_captcha","class:=form-control login_input, placeholder:=".xlate("Please input validation code"))?>
                                    </div>
                                    <div class="captcha">
                                        <img src="./create_captcha.php" onclick="this.src='./create_captcha.php?'+ new Date().getTime();" alt=""/>
                                    </div>
                                </div>
                                <? }?>
                            </div>
                            <?php
                            // If this site is no legal, it does not show
                            $getLegalId = new PrivacyStatementService();
                            $legalInfo = $getLegalId->getLegalInfo();
                            if ($legalInfo) {
                            ?>
                            <p style="margin-top: -20px; cursor:pointer;" data-toggle="modal" data-target="#modal-lg"><a id="legal_link" onclick='legal()'>《<?print xlate("Privacy Statement"); if ($_COOKIE['isAgree'] == 'agree') { ?>》<span id="hook" style="color: rgb(0,128,0);"> √</span><? } else { ?> 》<span id="hook" style="color: rgb(0,128,0);display: none;"> √</span> <? } ?></a></p>
                            <?php } ?>
                            <button class="btn btn-primary btn-block btn_login" id="login_button"><?print xlate("Login")?></button>
                            <p class="login_note">
                                <a class="min_toggle_login_way" onclick="toggleloginoffice()"><?print xlate("Login with Microsoft")?>
                                    <i class="tk-icon icon-tk-arrow-link"></i>
                                </a>
                            </p>
                        </div>
                    </form>
                    <?php print form("method:=get, action:=forgotpass.php, class:=form-horizontal"); ?>
                    <div class="tab_2">
                            <div class="input_group">
                                <?php print textbox("frm_username","class:=form-control login_input, placeholder:=".xlate("Email address"))?>
                            </div>
                            <button class="btn btn-primary btn-block btn_login"><?print xlate("Send")?></button>
                            <p class="login_note">
                                <?php print html_xlate('If you have lost your password enter your email address and a new one will be sent to you. If your email address ends with'); ?> <?php print mb_htmlentities(DEFAULT_EMAIL_DOMAIN); ?> <?php print html_xlate('you only need to type to portion before the @ symbol.'); ?>
                            </p>
                        </div>
                    </form>
                </div>
            <? } ?>
            </div>
        </section>
        <div id="add_loading"></div>
    </div>
</div>

<div class="modal fade bs-example-modal-lg" id="modal-lg" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h2 class="modal-title"><?print xlate("Privacy Statement")?></h2>
            </div>
            <hr/>
            <div class="form-horizontal">
                <div class="mask box" style="display:none; background-color:transparent">
                    <div class="overlay">
                        <span class="fa fa-refresh fa-spin glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="legal-floating-layer"></div>
                    <hr style="border:1px dashed #ccc;">
                    <div class="row">
                        <div class="col-sm-6 col-md-6">
                            <button id="legal-disagree" type="button" class="btn btn-default btn-gray pull-right" data-dissmiss="modal" style="color:#fff; background-color: #77869A;" onclick="disagreeLegal();"><?php echo html_xlate("Disagree"); ?></button>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <button id="legal-agree" type="button" class="btn btn-primary btn-gray pull-left" data-dissmiss="modal" style="padding:0 18px 0 18px;" onclick="agreeLegal();"><?php echo html_xlate("Agree"); ?></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(window).resize(function() {
        setWid();
    });
    <?php if(($_GET['msCode'] === 'uError') || ($_GET['msCode'] === 'tokenError')){?>
    <?php }else if( !empty($aPageNotice) ){?>
        toggleloginemail2();
    <?php }?>

    $("#country_time").show();
    $("#login_translation").removeAttr("style");
    var contenthtml = $("#contenthtml").children();
    $("#login_translation").popover({
        trigger:'manual',
        container: 'body',
        html:true,
        content:contenthtml,
        placement:'bottom',
    });
    $("#login_translation").click(function(){
        $("#login_translation").popover("toggle");
    })
    $("#login_translation").on("shown.bs.popover",function(){
        var _this=$("#login_translation");
        $(document).one("click",function(){
            $(_this).popover("hide");
        });
    })
    $(function(){
        setWid();
        $("[data-toggle='popover']").popover();
        // fooltersize();
        // $(window).resize(function(){
        //     fooltersize();
        // })

        $("#tab_1").click(function(){
            $("#tab_2").removeClass("sle");
            $(this).addClass("sle");
            $(".tab_2").hide();
            $(".tab_1").show();
        })
        $("#tab_2").click(function(){
            $("#tab_1").removeClass("sle");
            $(this).addClass("sle");
            $(".tab_1").hide();
            $(".tab_2").show();
        })


        $(".btn_login").click(function(){
            $(".login_alert").show();
        })
    })
    function legal(){
        $.ajax({
            method:'GET',
            url:'/legalInfo.php',
            success:function(msg){
                $('.legal-floating-layer').html(msg);
            },
        });
    }
    function fooltersize(){
        var login_th = $(".login_card").offset().top + $(".login_card").innerHeight() + 60;
        var footer_p = $(window).height()-$(".login_foolter").innerHeight();
        if(login_th>footer_p){
            //$(".login_foolter").css({"position":"static"})
            $(".login_card").removeClass("login_card_position");
        }else{
            //$(".login_foolter").css({"position":"fixed"})
            $(".login_card").addClass("login_card_position");
        }
    }
    function agreeLegal() {
        document.cookie = "isAgree = agree";
        // window.location.replace(location.href);
        $("#hook").css("display", "");
        $('#modal-lg').modal('hide');
        var login_office = $(".login_office").attr("login_office");
        if(login_office!='on'){
            toggleloginemail2();
        }
        <?php
            if ($isLoginByExternalAD) {
        ?>
                window.location.href = "login.php?url=<?php echo urlencode($_REQUEST['url']);?>";
        <?php

            }
        ?>
    }

    function disagreeLegal() {
        document.cookie = "isAgree = disagree";
        // window.location.replace(location.href);
        $("#hook").css("display", "none");
        $('#modal-lg').modal('hide');
        var login_office = $(".login_office").attr("login_office");
        if(login_office!='on'){
            toggleloginemail2();
        }
        <?php
            if ($isLoginByExternalAD) {
            ?>
                window.location.href = "illegalAuth.php?url=<?php echo urlencode($_REQUEST['url']);?>";
        <?php
            }
        ?>
    }
    function setWid(){
        wid = $(window).width();
        $(".login_bc").width(wid);
        $(".login_bc").parent("div").width(wid);
        $("#modal-lg").width(wid);
        $("#header").width(wid);
    }
    function toggleloginemail2(){
        var windowwidth = $(window).width();
        if(windowwidth>991){
            $(".office_login_box").width('50%');
            $('.office_login_box').addClass('all_login');
            $('.office_login_box').css("opacity","1");
            $('.login_card').removeClass('hidden');
            $('.login_card').css("opacity","1");
        }else{
            $(".office_login_box").addClass('all_login').width("50%");
            $('.office_login_box').css("opacity","1");
            $('.login_card').removeClass('hidden');
            $('.login_card').css("opacity","1");
        }
    }
    function getCookie(name) {
        var prefix = name + "="
        var start = document.cookie.indexOf(prefix)
        if (start == -1) {
            return null;
        }
        var end = document.cookie.indexOf(";", start + prefix.length)
        if (end == -1) {
            end = document.cookie.length;
        }
        var value = document.cookie.substring(start + prefix.length, end)
        return unescape(value);
    }
    $(function(){
        var o365NoLoginLegal = getCookie('o365NoLoginLegal');
        if(o365NoLoginLegal == 'on'){
            $('#modal-lg').modal('show');
            legal();
            document.cookie = "o365NoLoginLegal = off";
            $(".login_office").attr("login_office","on");
        }
        $("[data-toggle='popover']").popover();
        <?php if ($legalInfo) {?>
        $(".login_office").click(function(){
            $(".login_office").attr("login_office","on");
            var agree = getCookie('isAgree');
            if(agree == 'disagree'){
                $('#modal-lg').modal('show');
                legal();
                return false;
            }
        });
        <?php }?>

        $("#login_button").click(function () {
            // return checkAccount();
            $(".login_office").attr("login_office","off");
            if (!$("#frm_username").val()){
                $("#hidden-grid").attr("style","display:block;");
                $("#hidden-grid-success").attr("style","display:none;");
                $("#errTitle").html("<?php print xlate("The following errors occured:")?>");
                $("#errContent").html("<?php print xlate("You must enter your username")?>");
                return false;
            }
            if ($("#frm_username").val() && !$("#frm_password").val()){
                $("#hidden-grid").attr("style","display:block;");
                $("#hidden-grid-success").attr("style","display:none;");
                $("#errTitle").html("<?php print xlate("The following errors occured:")?>");
                $("#errContent").html("<?php print xlate("You must enter your password")?>");
                return false;
            }
            if ($("input[name='frm_captcha']").length > 0 && !$("input[name='frm_captcha']").val()){
                $("#hidden-grid").attr("style","display:block;");
                $("#hidden-grid-success").attr("style","display:none;");
                $("#errTitle").html("<?php print xlate("The following errors occured:")?>");
                $("#errContent").html("<?php print xlate("You must enter captcha code")?>");
                return false;
            }
            <?php if (array_key_exists("app", $_SESSION)) { ?>
                add_loading(true);
            <?php } ?>
            return true;
        })
        localStorage.removeItem('allGlobalOrSiteMenuData');
        localStorage.removeItem('globalSiteMenuData');
        localStorage.removeItem('allBranchMenuData');
        localStorage.removeItem('currentUserId');
        $("[data-toggle='popover']").popover();
        fooltersize();
        $(window).resize(function(){
            fooltersize();
        })

        $("#tab_1").click(function(){
            $("#tab_2").removeClass("sle");
            $(this).addClass("sle");
            $(".tab_2").hide();
            $(".tab_1").show();
        })
        $("#tab_2").click(function(){
            $("#tab_1").removeClass("sle");
            $(this).addClass("sle");
            $(".tab_1").hide();
            $(".tab_2").show();
        })

    <?php if (array_key_exists("app", $_SESSION)) { ?>
        $(".login_foolter").css({"display":"none"});
    <?php } ?>
    })
</script>
<!-- end form -->
<?php
    require_once(SYSTEM_DIR . "/includes/loginfooter.php");
?>
