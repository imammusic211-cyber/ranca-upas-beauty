@echo off
title Auto-Deploy Ranca Upas
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -NoExit -File auto-deploy.ps1
pause
