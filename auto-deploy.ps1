$ErrorActionPreference = "SilentlyContinue"
$r = "C:\Users\Administrator\Documents\ranca upas"
Set-Location $r

Write-Host "Auto-deploy aktif. Edit file lalu save otomatis ter-push." -ForegroundColor Green
Write-Host "Link: https://imammusic211-cyber.github.io/ranca-upas-beauty/" -ForegroundColor Cyan
Write-Host "Tekan Ctrl+C untuk berhenti." -ForegroundColor Yellow

$lastHash = ""
while ($true) {
    Start-Sleep -Seconds 3
    $status = git status --porcelain
    if ($status) {
        $hash = $status | Out-String
        if ($hash -ne $lastHash) {
            $lastHash = $hash
            git add -A
            git commit -m "auto: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git push origin main
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Pushed update!" -ForegroundColor Green
        }
    }
}
