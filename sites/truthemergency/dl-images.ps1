$ua   = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$base = "D:\1.1Projects\website project\new Finals\truthemergency-main\public"

$map = [ordered]@{
  # Site navigation / sidebar buttons
  "images\site\SCsitebutbooks.gif"   = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutbooks.gif"
  "images\site\SCsitebutfilms.gif"   = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutfilms.gif"
  "images\site\SCsitebutonline.gif"  = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutonline.gif"
  "images\site\lossesinwaronterror300.jpg" = "https://web.archive.org/web/20180902092253im_/http://truthemergency.us/images/site/lossesinwaronterror300.jpg"

  # Right sidebar partner logos
  "imagesA\911TruthCrop.jpg"                = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/911TruthCrop.jpg"
  "imagesA\BeTheMediaRotationWithText.gif"  = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/BeTheMediaRotationWithText.gif"
  "imagesA\projectcensorednotext1.jpg"      = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/projectcensorednotext1.jpg"

  # Online Resources page header images
  "images\tamingcorpsheader400.jpg"   = "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/tamingcorpsheader400.jpg"
  "images\mediareformheader400.jpg"   = "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/mediareformheader400.jpg"

  # Film covers
  "images\films\whywefight150.jpg"                       = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/whywefight150.jpg"
  "images\films\iraqforsaledvd150.jpg"                   = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/iraqforsaledvd150.jpg"
  "images\films\noendinsight150.jpg"                     = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/noendinsight150.jpg"
  "images\films\orwell150.jpg"                           = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/orwell150.jpg"
  "images\films\outfoxed150.jpg"                         = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/outfoxed150.jpg"
  "images\films\DVDpress4truth150.jpg"                   = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/DVDpress4truth150.jpg"
  "images\films\coverupbehindtheirancontraaffair150.jpg" = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/coverupbehindtheirancontraaffair150.jpg"
  "images\films\Uncounted150.jpg"                        = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/Uncounted150.jpg"
  "images\films\bringingdown150.jpg"                     = "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/bringingdown150.jpg"

  # Book covers
  "images\books\blackwater150.jpg"             = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/blackwater150.jpg"
  "images\books\takeover-savage150.jpg"        = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/takeover-savage150.jpg"
  "images\books\sorrowsempire150.jpg"          = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/sorrowsempire150.jpg"
  "images\books\nemesislastdays150.jpg"        = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/nemesislastdays150.jpg"
  "images\books\projectcensored07.jpg"         = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/projectcensored07.jpg"
  "images\books\intothebuzzsaw150.jpg"         = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/intothebuzzsaw150.jpg"
  "images\books\dayofdeceit150.jpg"            = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/dayofdeceit150.jpg"
  "images\books\OKbombcommissionreport150.jpg" = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/OKbombcommissionreport150.jpg"
  "images\books\overthrow-kinzer150.jpg"       = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/overthrow-kinzer150.jpg"
  "images\books\actofstatepepper150.jpg"       = "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/actofstatepepper150.jpg"
}

$ok = 0; $skip = 0; $fail = 0

foreach ($rel in $map.Keys) {
    $dest = Join-Path $base $rel
    $dir  = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

    if (Test-Path $dest) {
        $sz = (Get-Item $dest).Length
        Write-Host "SKIP ($sz b)  $rel"
        $skip++
        continue
    }

    $url = $map[$rel]
    try {
        Invoke-WebRequest -Uri $url -UserAgent $ua -OutFile $dest -UseBasicParsing -TimeoutSec 30
        $sz = (Get-Item $dest).Length
        Write-Host "OK   ($sz b)  $rel"
        $ok++
    } catch {
        Write-Host "FAIL $rel  --  $($_.Exception.Message)"
        $fail++
    }
    Start-Sleep -Milliseconds 350
}

# ---- Header banner: try multiple archive snapshots ----
$hDest = Join-Path $base "images\header-banner.jpg"
if (-not (Test-Path $hDest)) {
    $headerTries = @(
        "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/wp-content/uploads/2014/01/TruthEmergencyBanner.jpg",
        "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/wp-content/uploads/2014/01/header.jpg",
        "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/header-banner.jpg",
        "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/scmediacon-header800.jpg",
        "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/scmediaconheader800.gif"
    )
    foreach ($hurl in $headerTries) {
        try {
            Invoke-WebRequest -Uri $hurl -UserAgent $ua -OutFile $hDest -UseBasicParsing -TimeoutSec 20
            $sz = (Get-Item $hDest).Length
            if ($sz -gt 2000) {
                Write-Host "OK   ($sz b)  images\header-banner.jpg  <-- $hurl"
                $ok++
                break
            } else {
                Remove-Item $hDest -Force
            }
        } catch { }
    }
    if (-not (Test-Path $hDest)) { Write-Host "FAIL images\header-banner.jpg (all tries exhausted)" }
}

# ---- Logo banners (link-banners page) ----
$logoMap = [ordered]@{
    "images\logos\scmediaconbanner150.jpg" = "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/logos/scmediaconbanner150.jpg"
    "images\logos\scmediaconbanner180.gif" = "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/logos/scmediaconbanner180.gif"
    "images\logos\scmediaconbanner200.gif" = "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/logos/scmediaconbanner200.gif"
    "images\logos\scmediaconbanner300.gif" = "https://web.archive.org/web/20081005211802im_/http://truthemergency.us/images/logos/scmediaconbanner300.gif"
}
New-Item -ItemType Directory -Force -Path (Join-Path $base "images\logos") | Out-Null
foreach ($rel in $logoMap.Keys) {
    $dest = Join-Path $base $rel
    if (Test-Path $dest) { $skip++; continue }
    try {
        Invoke-WebRequest -Uri $logoMap[$rel] -UserAgent $ua -OutFile $dest -UseBasicParsing -TimeoutSec 20
        $sz = (Get-Item $dest).Length
        Write-Host "OK   ($sz b)  $rel"
        $ok++
    } catch {
        Write-Host "FAIL $rel"
        $fail++
    }
    Start-Sleep -Milliseconds 300
}

Write-Host ""
Write-Host "============================================"
Write-Host "  DONE.  OK=$ok   SKIP=$skip   FAIL=$fail"
Write-Host "============================================"
