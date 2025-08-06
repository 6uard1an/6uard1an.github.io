if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Start-Process -FilePath "powershell" -ArgumentList "-NoExit -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
    exit
}

Set-Location -Path $PSScriptRoot

function Get-ContentType($path) {
    switch ([IO.Path]::GetExtension($path).ToLower()) {
        '.js'   { 'application/javascript' }
        '.mjs'  { 'application/javascript' }
        '.css'  { 'text/css' }
        '.html' { 'text/html' }
        '.htm'  { 'text/html' }
        '.wasm' { 'application/wasm' }
        '.json' { 'application/json' }
        '.svg'  { 'image/svg+xml' }
        '.png'  { 'image/png' }
        '.jpg'  { 'image/jpeg' }
        '.jpeg' { 'image/jpeg' }
        '.gif'  { 'image/gif' }
        default { 'application/octet-stream' }
    }
}

function Start-HttpsWebServer {
    $port = 443

    $localIP = (Get-NetIPAddress -AddressFamily IPv4 |
        Where-Object { $_.IPAddress -notlike '169.*' -and $_.IPAddress -ne '127.0.0.1' } |
        Sort-Object InterfaceMetric |
        Select-Object -ExpandProperty IPAddress -First 1)

    $cert = New-SelfSignedCertificate `
        -Subject "CN=localhost" `
        -CertStoreLocation "cert:\LocalMachine\My" `
        -TextExtension @("2.5.29.17={text}dns=localhost&ipaddress=$localIP")

    $thumb = $cert.Thumbprint

    netsh http delete sslcert ipport=0.0.0.0:$port > $null 2>&1
    netsh http add sslcert ipport=0.0.0.0:$port certhash=$thumb appid='{00112233-4455-6677-8899-AABBCCDDEEFF}' > $null

    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("https://+:$port/")
    $listener.Start()

Write-Host "Serving HTTPS on https://${localIP}:${port}/"
Start-Process "https://${localIP}:${port}/"

    while ($true) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Add COOP and COEP headers here
        $response.Headers.Add("Cross-Origin-Opener-Policy", "same-origin")
        $response.Headers.Add("Cross-Origin-Embedder-Policy", "require-corp")
        $response.Headers.Add("Cross-Origin-Resource-Policy", "cross-origin")
        $response.Headers.Add("Access-Control-Allow-Origin", "*")

        $requestedPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($requestedPath)) {
            $requestedPath = "index.html"
        }

        $filePath = Join-Path (Get-Location) $requestedPath
        Write-Host "Requested:" $requestedPath
        Write-Host "Resolved path:" $filePath

        if (-not (Test-Path $filePath) -or (Get-Item $filePath).PSIsContainer) {
            $notFoundPath = Join-Path (Get-Location) "404.html"
            if (Test-Path $notFoundPath) {
                $response.StatusCode = 404
                $response.ContentType = "text/html"
                $bytes = [System.IO.File]::ReadAllBytes($notFoundPath)
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                $response.OutputStream.Close()
                continue
            } else {
                $response.StatusCode = 404
                $error = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.OutputStream.Write($error, 0, $error.Length)
                $response.OutputStream.Close()
                continue
            }
        } else {
            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = Get-ContentType $filePath
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $response.StatusCode = 500
                $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("500 Internal Server Error")
                $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)

                $errText = $_.Exception.Message + "`n" + $_.Exception.StackTrace + "`n"
                Add-Content -Path "server_errors.txt" -Value $errText
            }
        }

        $response.OutputStream.Close()
    }
}

Start-HttpsWebServer
Read-Host "Press Enter to exit..."
