$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$server = Join-Path $root "server\publish\gui.exe"

if (-not (Test-Path -LiteralPath $server)) {
    throw "Server is not published. Run start-asd-server.bat or publish gui\gui.csproj first."
}

Write-Host "A.S.D. server: http://localhost:5050"
Write-Host "Press Ctrl+C to stop the server."
Start-Process "http://localhost:5050"
& $server --urls "http://0.0.0.0:5050"
