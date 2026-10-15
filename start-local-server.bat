@echo off
setlocal
cd /d "%~dp0RANCAUPAS BEAUTY"
if not exist index.html (
    echo Website entry point not found: "%CD%\index.html"
    pause
    exit /b 1
)
echo Local server: http://localhost:8000/
echo Press Ctrl+C to stop the server.
py -m http.server 8000 --bind 127.0.0.1
