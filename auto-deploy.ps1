Set-Location "C:\Users\Administrator\Documents\ranca upas"
$Host.UI.RawUI.WindowTitle = "Auto-Deploy Ranca Upas"
Write-Host "Auto-deploy aktif!" -ForegroundColor Green
Write-Host "Link: https://imammusic211-cyber.github.io/ranca-upas-beauty/" -ForegroundColor Cyan
Write-Host "Edit file -> save -> otomatis push" -ForegroundColor Yellow
Write-Host "Tekan Ctrl+C untuk berhenti" -ForegroundColor Yellow
Write-Host ""

$last = ""
while ($true) {
    Start-Sleep -Seconds 3
    $st = git status --porcelain 2>$null
    if ($st) {
        $h = $st -join "`n"
        if ($h -ne $last) {
            $last = $h
            git add -A 2>$null
            git commit -m "auto: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" 2>$null
            git push origin main 2>$null
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Pushed!" -ForegroundColor Green
        }
    }
}
