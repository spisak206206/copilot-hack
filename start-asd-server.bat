@echo off
setlocal
cd /d "%~dp0"
if not exist "server\publish\gui.exe" (
  echo A.S.D. server is not published yet.
  echo Run: dotnet publish gui\gui.csproj -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true -o server\publish
  pause
  exit /b 1
)
echo Starting A.S.D. server on http://localhost:5050
start "" "http://localhost:5050"
"server\publish\gui.exe" --urls "http://0.0.0.0:5050"
