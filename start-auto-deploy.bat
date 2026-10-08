@echo off
title Auto-Deploy Ranca Upas
cd /d "C:\Users\Administrator\Documents\ranca upas"
powershell -ExecutionPolicy Bypass -NoExit -File auto-deploy.ps1
pause
