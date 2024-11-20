#!/bin/bash
#安装后端依赖
poetry install
#创建venv
python -m venv venv
source venv/bin/activate
