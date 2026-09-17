Write-Host "=== TEST 1: SERVER INTEGRITY CHECK ===" -ForegroundColor Cyan
try {
    $res = Invoke-WebRequest -Uri "http://localhost:5050" -UseBasicParsing -TimeoutSec 5
    Write-Host "[PASS] Server is running on port 5050 (Status: $($res.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] Server is not responding on http://localhost:5050" -ForegroundColor Red
}

Write-Host "`n=== TEST 2: CHECKING FILE SYNC TO USB F:\ ===" -ForegroundColor Cyan
$usbPaths = @(
    "F:\gui\wwwroot\index.html",
    "F:\gui\wwwroot\js\app.js",
    "F:\gui\wwwroot\css\style.css",
    "F:\Autoservisny_system_ASD\gui\wwwroot\index.html",
    "F:\Autoservisny_system_ASD\gui\wwwroot\js\app.js",
    "F:\Autoservisny_system_ASD\gui\wwwroot\css\style.css"
)

foreach ($path in $usbPaths) {
    if (Test-Path $path) {
        $file = Get-Item $path
        Write-Host "[PASS] File exists on USB: $path ($($file.Length) bytes)" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] File missing on USB: $path" -ForegroundColor Red
    }
}

Write-Host "`n=== TEST 3: VALIDATING APP.JS LOGIC & FUNCTIONS ===" -ForegroundColor Cyan
$appJsContent = Get-Content -Path "C:\Users\42190\.copilot\repos\copilot-worktrees\copilot-hack\spisak206206-upgraded-garbanzo\gui\wwwroot\js\app.js" -Raw

$requiredFeatures = @(
    "getRoleFunctionsTreeHtml",
    "openTpScanModal",
    "openWorkOrderEditModal",
    "openGenericActionModal",
    "selectSampleCustomer",
    "selectSampleCar",
    "generatePayBySquareQrSvg",
    "previewPdf",
    "openEepromModal",
    "openChiptuningModal",
    "openServiceResetModal",
    "openAdblueModal"
)

foreach ($func in $requiredFeatures) {
    if ($appJsContent -match $func) {
        Write-Host "[PASS] Function/Feature '$func' present in app.js" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Function/Feature '$func' MISSING in app.js" -ForegroundColor Red
    }
}

Write-Host "`n=== TEST COMPLETE ===" -ForegroundColor Cyan
