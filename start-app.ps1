# Start Backend and Frontend for Notes App

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Notes App - Starting Services" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start Backend in new window
Write-Host "[1/2] Starting Backend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; Write-Host 'Installing Backend Dependencies...' -ForegroundColor Green; npm install; Write-Host 'Starting Backend Server...' -ForegroundColor Green; npm run start:dev"

Start-Sleep -Seconds 3

# Start Frontend in new window
Write-Host "[2/2] Starting Frontend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; Write-Host 'Installing Frontend Dependencies...' -ForegroundColor Green; npm install; Write-Host 'Starting Frontend Server...' -ForegroundColor Green; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Services are starting!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend will be available at:  " -NoNewline
Write-Host "http://localhost:4000" -ForegroundColor Cyan
Write-Host "Frontend will be available at: " -NoNewline
Write-Host "http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
