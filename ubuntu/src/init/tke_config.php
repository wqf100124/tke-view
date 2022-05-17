<?php
/*
 * Warning: This file is only for local development and testing, do not commit to svn
 */

	/* $Id: tke_config.php 22843 2012-01-09 01:09:42Z neena.baiju $ */

	/**
	 *
	 * This file contains all the settings that are common globally
	 * including the Noggin development server, devel, rc, and live.
	 *
	 * All settings must be wrapped in a if (!defined(...))) ... as that will allow the setting
	 * to be overwritten locally or at the instance level.
	 *
	 * The hierarchy is:
	 *
	 *    1) Site specific settings
	 *    2) Server specific settings
	 *    3) Global settings
	 *
	 * where the 1) wins over 2) and 3), and 2) wins over 3).
	 *
	 **/

    $sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], '.'));
    $sPreUrl = $sPreUrl ?: 'hk';
    require_once(BASE_DIR . "/../" . $sPreUrl . "/config.php");

	// move local config to tke_config
    if (!defined('DEVELOPMENT_SERVER'))                     define("DEVELOPMENT_SERVER" , TRUE);
    // Online documentation
    if (!defined('ONLINE_DOCS_URL'))                        define('ONLINE_DOCS_URL', 'https://onlinedocsdev.fos.tkeasia.com/');
    if (!defined('ONLINE_DOCS_SECRET'))                     define('ONLINE_DOCS_SECRET', 'fxzL4*M0se}SQ8t^sn6e'); // Online docs HMAC password
    if (!defined('ONLINE_DOCS_HASH'))                       define('ONLINE_DOCS_HASH', 'md5'); // md5 or sha1, dont forget to change docs config also.
    // Global site to access local master data
	if (!defined('LOCAL_DATABASE_USERNAME_SUFFIX') )        define("LOCAL_DATABASE_USERNAME_SUFFIX",  '_slv');
	if (!defined('LOCAL_DATABASE_PASSWORD'))                define("LOCAL_DATABASE_PASSWORD",         'Cal_shufTiv0/' );
	//if (!defined('LOCAL_DATABASE_HOST'))                   define("LOCAL_DATABASE_HOST",             'localhost'); Unused - need to query server table
	if (!defined('LOCAL_DATABASE_PORT'))                    define("LOCAL_DATABASE_PORT",             3306    );
	if (!defined('LOCAL_DATABASE_PERSISTANT'))              define("LOCAL_DATABASE_PERSISTANT",       FALSE   );


	// Debug & testing settings
	//if (!defined('TEST_EMAIL'))                            define('TEST_EMAIL', "viewtesting@tkeap.com");
	//if (!defined('SEND_EMAILS_TO_TEST'))                   define('SEND_EMAILS_TO_TEST', FALSE);
	//if (!defined('TEST_PAGER'))                            define('TEST_PAGER', "816150");
	//if (!defined('SEND_PAGES_TO_TEST'))                    define('SEND_PAGES_TO_TEST', FALSE);

	// Fixed URLs
	if (!defined('AUTH_ERROR'))                            define('AUTH_ERROR', '/common/notauth.php');
	if (!defined('AUTH_ERROR_PATH'))                       define('AUTH_ERROR_PATH', "{$_SERVER["DOCUMENT_ROOT"]}/common/notauth.php");
	if (!defined('REQUEST_ERROR'))                         define('REQUEST_ERROR', '/error.php');
	if (!defined('SYSTEM_ERROR'))                          define('SYSTEM_ERROR', '/error.php');
	if (!defined('LOGIN_PAGE'))                            define('LOGIN_PAGE', '/login.php');
	if (!defined('LOGOUT_PAGE'))                           define('LOGOUT_PAGE', '/logout.php');
	if (!defined('LAUNCH_PAGE'))                           define('LAUNCH_PAGE', '/launch.php');
	if (!defined('BLANK_INNER'))                           define('BLANK_INNER', '/common/blank.php');
	if (!defined('CLIENT_CHOOSE'))                         define('CLIENT_CHOOSE',   '/common/clientchoose.php');
	if (!defined('BLANK_FULLPAGE'))                        define('BLANK_FULLPAGE',  '/common/blank_fullpage.php');
	if (!defined('DOCS_DIRECTORY'))                        define('DOCS_DIRECTORY', SYSTEM_DIR . '/documentation');
	if (!defined('DEPLOYMENT_HISTORY_DIR'))                define('DEPLOYMENT_HISTORY_DIR', DOCS_DIRECTORY . '/deployment_history');
	if (!defined('DEPLOYMENT_DIFF_DIR'))                   define('DEPLOYMENT_DIFF_DIR', DOCS_DIRECTORY . '/deployment_diffs');
    if (!defined('RESPONSIVE_LOGIN_PAGE'))                 define('RESPONSIVE_LOGIN_PAGE', '/responsive_login.php');
    if (!defined('RESPONSIVE_LOGOUT_PAGE'))                define('RESPONSIVE_LOGOUT_PAGE', '/responsive_login.php');

	// Radius Authentication
	if (!defined('RADIUS_ON_IP'))                          define('RADIUS_ON_IP',      '127.0.0.1');     // Only use radius authentication if $_SERVER['SERVER_ADDR'] equals this address
	if (!defined('RADIUS_HOST'))                           define('RADIUS_HOST',       '127.0.0.1');     // Radius server IP address
	if (!defined('RADIUS_PORT'))                           define('RADIUS_PORT',       '1645');          // Radius server authentication port
	if (!defined('RADIUS_SECRET'))                         define('RADIUS_SECRET',     '');              // Radius server shared secret
	if (!defined('RADIUS_TIMEOUT'))                        define('RADIUS_TIMEOUT',    10);              // Timeout in seconds
	if (!defined('RADIUS_MAXRETRIES'))                     define('RADIUS_MAXRETRIES', 3);               // Number of retries

	// Times
	if (!defined('SAVE_USERNAME_TIME'))                    define('SAVE_USERNAME_TIME', 7*86400);
	if (!defined('SAVE_CURRENTBRANCH_TIME'))               define('SAVE_CURRENTBRANCH_TIME', 86400);
	if (!defined('REPORT_GRAPH_TTL'))                      define('REPORT_GRAPH_TTL', 60);
	if (!defined('DEFAULT_CACHE_TIME'))                    define('DEFAULT_CACHE_TIME', 0);
	if (!defined('RPT_CACHE_TTL'))                         define('RPT_CACHE_TTL', 30*60);

	// Misc application settings
	if (!defined('BUS_HRS_DAYOFWEEK_MIN'))                 define('BUS_HRS_DAYOFWEEK_MIN', 1);  // Min day of week for business hours (eg. Monday)
	if (!defined('BUS_HRS_DAYOFWEEK_MAX'))                 define('BUS_HRS_DAYOFWEEK_MAX', 5);  // Max day of week for business hours (eg. Friday)
	if (!defined('BUS_HRS_HOURMIN_MIN'))                   define('BUS_HRS_HOURMIN_MIN', 730);  // Min hour minute for business hours (eg. 700, 7am)
	if (!defined('BUS_HRS_HOURMIN_MAX'))                   define('BUS_HRS_HOURMIN_MAX', 1600); // Max hour minute for business hours (eg. 1600, 4pm)
	if (!defined('MODINSTALL_BANKS_PER_TAB'))              define('MODINSTALL_BANKS_PER_TAB', 5);
	if (!defined('MODINSTALL_PENDING_DAYS'))               define('MODINSTALL_PENDING_DAYS', 7);

	// Locale
	if (!defined('MONETARY_FORMAT'))                       define('MONETARY_FORMAT', '%n');
	if (!defined('COMPANY_LOGO'))                          define('COMPANY_LOGO', '');
	if (!defined('PIVOT_LANGUAGE'))                        define('PIVOT_LANGUAGE', 'en');

	// Executables
	if (!defined('CMD_PDFEDITOR'))                         define('CMD_PDFEDITOR', '/usr/bin/pdfed');
	if (!defined('CMD_CONVERT'))                           define('CMD_CONVERT' ,  '/usr/bin/convert');
	if (!defined('CMD_LOCALES'))                           define('CMD_LOCALES',   'locale -a -v');

	// Resource Paths
	if (!defined('PATTERN_DIR'))                           define('PATTERN_DIR', SYSTEM_DIR . "/patterns/");
	if (!defined('PDF_FONTRES'))                           define('PDF_FONTRES', BASE_DIR . "/../local/pdflib.upr");

	// File upload paths
	if (!defined('FILE_DIR_CLIENTREPORTS'))                define('FILE_DIR_CLIENTREPORTS', BASE_DIR . "/files/clientreports/");
	if (!defined('FILE_DIR_COVERSHEETS'))                  define('FILE_DIR_COVERSHEETS', BASE_DIR . "/files/coversheets/");
	if (!defined('FILE_DIR_CLIENTFILES'))                  define('FILE_DIR_CLIENTFILES', BASE_DIR . "/files/clientfiles/");
	if (!defined('FILE_DIR_LANGFONTS'))                    define('FILE_DIR_LANGFONTS', BASE_DIR . "/files/languagefonts/");
	if (!defined('FILE_DIR_CLIENTACCESSLINKS'))            define('FILE_DIR_CLIENTACCESSLINKS', BASE_DIR . "/files/clientaccesslinks/");

	// Third-Party Software License Keys
	if (!defined('LICENSE_KEY_PDFLIB'))                    define('LICENSE_KEY_PDFLIB', '');

	// Database configuration
	if (!defined('CFG_DATABASE_DEADLOCKRETRIES'))          define('CFG_DATABASE_DEADLOCKRETRIES', 10); // The number of retries to perform when a deadlock occurs.

	if (!defined('DATABASE_NAME'))                         define('DATABASE_NAME',       '');
	if (!defined('DATABASE_USERNAME'))                     define('DATABASE_USERNAME',   '');
	if (!defined('DATABASE_PASSWORD'))                     define('DATABASE_PASSWORD',   '');
	if (!defined('DATABASE_HOST'))                         define('DATABASE_HOST',       'localhost');
	if (!defined('DATABASE_PORT'))                         define('DATABASE_PORT',        3306             );
	if (!defined('DATABASE_PERSISTANT'))                   define('DATABASE_PERSISTANT',  FALSE            );

	if (!defined('GLOBAL_DATABASE_NAME'))                  define('GLOBAL_DATABASE_NAME',       '');
	if (!defined('GLOBAL_DATABASE_USERNAME'))              define('GLOBAL_DATABASE_USERNAME',   '');
	if (!defined('GLOBAL_DATABASE_PASSWORD'))              define('GLOBAL_DATABASE_PASSWORD',   '');
	if (!defined('GLOBAL_DATABASE_HOST'))                  define('GLOBAL_DATABASE_HOST',       'localhost');
	if (!defined('GLOBAL_DATABASE_PORT'))                  define('GLOBAL_DATABASE_PORT',        3306         );
	if (!defined('GLOBAL_DATABASE_PERSISTANT'))            define('GLOBAL_DATABASE_PERSISTANT',  FALSE        );
	//REPORT DATABASE NAME
	if (!defined('REPORT_DATABASE_NAME'))   							 define("REPORT_DATABASE_NAME",'tkreports');
	// Database ID's
	if (!defined('DATABASE_ID_UNITTYPE'))                  define('DATABASE_ID_UNITTYPE',        4); // The Building reference data - Unit Type catgeory
	if (!defined('DATABASE_ID_EQUIPMENTTYPE'))             define('DATABASE_ID_EQUIPMENTTYPE',   3); // The Building reference data - Equipment Type catgeory
	if (!defined('DATABASE_ID_DRIVETYPE'))                 define('DATABASE_ID_DRIVETYPE',       1); // The Building reference data - Drive Type catgeory
	if (!defined('DATABASE_ID_ELEVATOR'))                  define('DATABASE_ID_ELEVATOR',      249);
	if (!defined('DATABASE_ID_ESCALATOR'))                 define('DATABASE_ID_ESCALATOR',      98);
	if (!defined('DATABASE_ID_MOVWALKWAY'))                define('DATABASE_ID_MOVWALKWAY',     99);
	if (!defined('DATABASE_ID_BRAND'))                     define('DATABASE_ID_BRAND',           2);
	if (!defined('DATABASE_ID_FINANCIALGROUP_MATERIAL'))   define('DATABASE_ID_FINANCIALGROUP_MATERIAL', 1); // The "Material" project financial data group
	if (!defined('DATABASE_ID_FINANCIALGROUP_LABOUR'))     define('DATABASE_ID_FINANCIALGROUP_LABOUR', 2); // The "Labour" project financial data group
	if (!defined('DATABASE_ID_PROJECTREVIEWCOMMENT'))      define('DATABASE_ID_PROJECTREVIEWCOMMENT', 13); // The project data category for APAC defining comments for the project review screen
	if (!defined('DATABASE_ID_PROJECTAUTHORITYLEVEL'))     define('DATABASE_ID_PROJECTAUTHORITYLEVEL', 14); // The project data category for APAC defining the levels of authorisation for the project review screen
	if (!defined('DATABASE_ID_PROJECTREVIEWACTIONSTATUS')) define('DATABASE_ID_PROJECTREVIEWACTIONSTATUS', 15); // The project data category for APAC defining action statuses for the project review screen
	if (!defined('DATABASE_ID_CONTINGENCY'))               define('DATABASE_ID_CONTINGENCY',    580); // The financial data - Contingency
	if (!defined('DATABASE_ID_SCHED_COMPLETION'))          define('DATABASE_ID_SCHED_COMPLETION', 23); // The schedule item marking project bank completion date
	if (!defined('DATABASE_ID_SCHED_ONSITE'))              define('DATABASE_ID_SCHED_ONSITE',     17); // The schedule item marking project bank start on site date
	if (!defined('DATABASE_ID_SCHED_EXWARRANTY'))          define('DATABASE_ID_SCHED_EXWARRANTY', 11); // The schedule item marking project bank ex works date
	if (!defined('DATABASE_ID_CONTRACTTYPE_WARRANTY'))     define('DATABASE_ID_CONTRACTTYPE_WARRANTY', 11); // The contract type for warranty. Primarily used by the warranty report section
	if (!defined('DATABASE_ID_SERVICETENDER'))             define('DATABASE_ID_SERVICETENDER',         1);
	if (!defined('DATABASE_ID_REPAIRSTENDER'))             define('DATABASE_ID_REPAIRSTENDER',         3);

	if (!defined('DATABASE_ID_NCRCATEGORY'))               define('DATABASE_ID_NCRCATEGORY',   1);
	if (!defined('DATABASE_ID_NCRURGENCY'))                define('DATABASE_ID_NCRURGENCY',    2);
	if (!defined('DATABASE_ID_CARCATEGORY'))               define('DATABASE_ID_CARCATEGORY',   3);
	if (!defined('DATABASE_ID_CARNOTICETYPE'))             define('DATABASE_ID_CARNOTICETYPE', 4);
	if (!defined('DATABASE_ID_NCRALLOCATION'))             define('DATABASE_ID_NCRALLOCATION', 5);
	if (!defined('DATABASE_ID_NCRRESPONSE'))               define('DATABASE_ID_NCRRESPONSE', 6);
	if (!defined('DATABASE_ID_NCTYPE'))                    define('DATABASE_ID_NCTYPE', 7); // Issue #19594
	if (!defined('DATABASE_ID_NCCATEGORY'))                define('DATABASE_ID_NCCATEGORY', 8); // Issue #19594
	if (!defined('DATABASE_ID_ADMINUSERGROUP'))            define('DATABASE_ID_ADMINUSERGROUP', 1);	// The id of the "admin' user group
	if (!defined('DATABASE_ID_SUPERUSERGROUP'))            define('DATABASE_ID_SUPERUSERGROUP', 4104);     // The id of the "super" user group
	if (!defined('DATABASE_ID_PROJECT_CIP'))               define('DATABASE_ID_PROJECT_CIP', 5);

	// enumerate the structure types
	if (!defined('DATABASE_ID_STRUCTURETYPE_GROUP'))          define('DATABASE_ID_STRUCTURETYPE_GROUP'         , 1);
	if (!defined('DATABASE_ID_STRUCTURETYPE_SITE'))           define('DATABASE_ID_STRUCTURETYPE_SITE'          , 2);
	if (!defined('DATABASE_ID_STRUCTURETYPE_REGION'))         define('DATABASE_ID_STRUCTURETYPE_REGION'        , 3);
	if (!defined('DATABASE_ID_STRUCTURETYPE_BRANCH'))         define('DATABASE_ID_STRUCTURETYPE_BRANCH'        , 4);
	if (!defined('DATABASE_ID_STRUCTURETYPE_OFFICE'))         define('DATABASE_ID_STRUCTURETYPE_OFFICE'        , 5);
	if (!defined('DATABASE_ID_STRUCTURETYPE_REGIONALCENTER')) define('DATABASE_ID_STRUCTURETYPE_REGIONALCENTER', 6);
	if (!defined('DATABASE_ID_STRUCTURETYPE_COUNTRYREGION'))  define('DATABASE_ID_STRUCTURETYPE_COUNTRYREGION' , 7);

	// Issue #19717 - Other PaymenTermID,//ITCM #220699,CR: units upload in mass:1.PAYMENT TERM and OTHER PAYMENT TERM fields should only be mandatory for TKE serviced paid contract types(excluding lost contracts)
	if (!defined('DATABASE_ID_OTHERPAYMENTTERMID'))  define('DATABASE_ID_OTHERPAYMENTTERMID' , 217);

	// Interface/Functionality Options
	if (!defined('OPT_NUMADDRESSROWS'))                    define('OPT_NUMADDRESSROWS',                 4); // The number of rows required for an address entry box. If 1 then displayed as a text box.
	if (!defined('OPT_POSTCODESIZE'))                      define('OPT_POSTCODESIZE'  ,                10); // The size attribute of postcode entry boxes.
	if (!defined('OPT_AUTOBUILDINGNUM'))                   define('OPT_AUTOBUILDINGNUM',            FALSE); // Auto-generate building numbers on creation and prevent changing of them
	if (!defined('OPT_SUBURBOPTIONAL'))                    define('OPT_SUBURBOPTIONAL',             FALSE); // Make the suburb in add building
	if (!defined('OPT_FLEXIBLELIFTNUMBERS'))               define('OPT_FLEXIBLELIFTNUMBERS',         TRUE); // Allow text-number or number-text lift numbers
	if (!defined('OPT_REPAIRDOCKETOPTIONAL'))              define('OPT_REPAIRDOCKETOPTIONAL',        TRUE); // Is the repair log docket number optional (default FALSE)
	if (!defined('OPT_REPAIRTIMEOPTIONAL'))                define('OPT_REPAIRTIMEOPTIONAL',          TRUE); // Is the time fields in the repair log optional (default FALSE)
	if (!defined('OPT_MODINSTALL_FINDATATYPEORDER'))       define('OPT_MODINSTALL_FINDATATYPEORDER', 'id'); // The order of financial data types in the Mod Install Financials CIP (default 'Name')
	if (!defined('OPT_FINANCIALCIP_MONEYFORMAT'))          define('OPT_FINANCIALCIP_MONEYFORMAT',    TRUE); // Display money in textboxes with full prefix & suffix on Financials CIP screen
	if (!defined('OPT_FINANCIALCIP_UPDATEONCHANGE'))       define('OPT_FINANCIALCIP_UPDATEONCHANGE', TRUE); // Perform auto-recalculations on change of a textbox in the financials CIP screen of M&I
	if (!defined('OPT_RUNRPTORDERBYTIME'))                 define('OPT_RUNRPTORDERBYTIME',           TRUE); // Allow the "order by time" filter in the Call Report Run

	// Pager and sms settings
	if (!defined('NORMALIZE_MOBILENO_TYPE'))               define('NORMALIZE_MOBILENO_TYPE', 'PDU_ADDR_NATIONAL');

	if (!defined('GLOBAL_SITEID'))                         define('GLOBAL_SITEID', 1);
	if (!defined('GLOBAL_DB_SUFFIX'))                      define('GLOBAL_DB_SUFFIX', '');

	//ticket 243978 move files of report writer from web to samba
	//if (!defined('EXPORT_PATH'))                           define('EXPORT_PATH', BASE_DIR . "/files/exportdata"); // The directory to export files to

	// Url to issue tracker (e.g. for the release reports)
	if (!defined('NOGGIN_ISSUE_TRACKER_URL'))              define('NOGGIN_ISSUE_TRACKER_URL', 'https://www.noggin.com.au/issues');