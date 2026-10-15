$repoRoot = $PSScriptRoot
$siteRoot = Join-Path $repoRoot "RANCAUPAS BEAUTY"
if (-not (Test-Path (Join-Path $siteRoot "index.html"))) {
    $siteRoot = $repoRoot
}
if (-not (Test-Path (Join-Path $siteRoot "index.html"))) {
    Write-Host "Auto-deploy gagal: index.html tidak ditemukan di root atau folder RANCAUPAS BEAUTY." -ForegroundColor Red
    exit 1
}
Set-Location $repoRoot
$Host.UI.RawUI.WindowTitle = "Auto-Deploy Ranca Upas"
Write-Host "Auto-deploy aktif!" -ForegroundColor Green
Write-Host "Link: https://imammusic211-cyber.github.io/ranca-upas-beauty/" -ForegroundColor Cyan
Write-Host "Edit file -> save -> otomatis push" -ForegroundColor Yellow
Write-Host "Tekan Ctrl+C untuk berhenti" -ForegroundColor Yellow
Write-Host ""

$upstreamOutput = git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Auto-deploy gagal: branch ini belum memiliki upstream Git." -ForegroundColor Red
    Write-Host ($upstreamOutput -join "`n") -ForegroundColor Red
    exit 1
}
$upstream = ($upstreamOutput -join "").Trim()
Write-Host "Branch tujuan: $upstream" -ForegroundColor Cyan

while ($true) {
    Start-Sleep -Seconds 3
    try {
        $changes = git status --porcelain 2>&1
        if ($LASTEXITCODE -ne 0) {
            throw "git status gagal: $($changes -join "`n")"
        }

        if ($changes) {
            $cssVersion = (Get-FileHash -LiteralPath (Join-Path $siteRoot "style.css") -Algorithm SHA256 -ErrorAction Stop).Hash.Substring(0, 12).ToLowerInvariant()
            $scriptVersion = (Get-FileHash -LiteralPath (Join-Path $siteRoot "script.js") -Algorithm SHA256 -ErrorAction Stop).Hash.Substring(0, 12).ToLowerInvariant()
            $indexPath = Join-Path $siteRoot "index.html"
            $indexContent = [System.IO.File]::ReadAllText($indexPath)
            $versionedIndex = [regex]::Replace($indexContent, 'href="style\.css(?:\?[^\"]*)?"', "href=`"style.css?v=$cssVersion`"")
            $versionedIndex = [regex]::Replace($versionedIndex, 'src="script\.js(?:\?[^\"]*)?"', "src=`"script.js?v=$scriptVersion`"")
            if ($versionedIndex -ne $indexContent) {
                [System.IO.File]::WriteAllText($indexPath, $versionedIndex, [System.Text.UTF8Encoding]::new($false))
            }

            $output = git add -A 2>&1
            if ($LASTEXITCODE -ne 0) {
                throw "git add gagal: $($output -join "`n")"
            }

            git diff --cached --quiet
            if ($LASTEXITCODE -eq 1) {
                $output = git commit -m "auto: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" 2>&1
                if ($LASTEXITCODE -ne 0) {
                    throw "git commit gagal: $($output -join "`n")"
                }
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Commit dibuat." -ForegroundColor Yellow
            } elseif ($LASTEXITCODE -ne 0) {
                throw "git diff gagal memeriksa perubahan staged."
            }
        }

        $aheadOutput = git rev-list --count "$upstream..HEAD" 2>&1
        if ($LASTEXITCODE -ne 0) {
            throw "Gagal memeriksa commit yang belum terkirim: $($aheadOutput -join "`n")"
        }

        if ([int]($aheadOutput -join "") -gt 0) {
            $output = git push 2>&1
            if ($LASTEXITCODE -ne 0) {
                throw "git push gagal: $($output -join "`n")"
            }
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Push berhasil ke $upstream." -ForegroundColor Green
        }
    } catch {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($_.Exception.Message)" -ForegroundColor Red
        Start-Sleep -Seconds 12
    }
}
