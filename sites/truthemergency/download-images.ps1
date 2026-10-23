$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$base = "D:\1.1Projects\website project\new Finals\truthemergency-main\public"

# Map: Wayback URL -> local path under public/
$images = @{
  # ---- SITE BUTTONS (sidebar nav images) ----
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutbooks.gif"   = "images\site\SCsitebutbooks.gif"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutfilms.gif"  = "images\site\SCsitebutfilms.gif"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/site/SCsitebutonline.gif" = "images\site\SCsitebutonline.gif"

  # ---- SIDEBAR RIGHT LOGOS ----
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/911TruthCrop.jpg"              = "imagesA\911TruthCrop.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/BeTheMediaRotationWithText.gif" = "imagesA\BeTheMediaRotationWithText.gif"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/imagesA/projectcensorednotext1.jpg"     = "imagesA\projectcensorednotext1.jpg"

  # ---- ONLINE RESOURCES PAGE HEADERS ----
  "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/tamingcorpsheader400.jpg"   = "images\tamingcorpsheader400.jpg"
  "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/mediareformheader400.jpg"   = "images\mediareformheader400.jpg"

  # ---- FILM COVERS ----
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/whywefight150.jpg"                       = "images\films\whywefight150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/iraqforsaledvd150.jpg"                   = "images\films\iraqforsaledvd150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/noendinsight150.jpg"                     = "images\films\noendinsight150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/orwell150.jpg"                           = "images\films\orwell150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/outfoxed150.jpg"                         = "images\films\outfoxed150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/DVDpress4truth150.jpg"                   = "images\films\DVDpress4truth150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/coverupbehindtheirancontraaffair150.jpg" = "images\films\coverupbehindtheirancontraaffair150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/Uncounted150.jpg"                        = "images\films\Uncounted150.jpg"
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/bringingdown150.jpg"                     = "images\films\bringingdown150.jpg"

  # ---- BOOK COVERS ----
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/blackwater150.jpg"           = "images\books\blackwater150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/takeover-savage150.jpg"      = "images\books\takeover-savage150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/sorrowsempire150.jpg"        = "images\books\sorrowsempire150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/nemesislastdays150.jpg"      = "images\books\nemesislastdays150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/projectcensored07.jpg"       = "images\books\projectcensored07.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/intothebuzzsaw150.jpg"       = "images\books\intothebuzzsaw150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/dayofdeceit150.jpg"          = "images\books\dayofdeceit150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/OKbombcommissionreport150.jpg" = "images\books\OKbombcommissionreport150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/overthrow-kinzer150.jpg"    = "images\books\overthrow-kinzer150.jpg"
  "https://web.archive.org/web/20181104061539im_/http://truthemergency.us/images/books/actofstatepepper150.jpg"    = "images\books\actofstatepepper150.jpg"

  # ---- HOME PAGE EXTRA ----
  "https://web.archive.org/web/20180902092253im_/http://truthemergency.us/images/site/lossesinwaronterror300.jpg" = "images\site\lossesinwaronterror300.jpg"
}

# Also try to grab the header banner from the wp-content theme
$headerUrls = @(
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/wp-content/themes/truth-emergency/images/header-banner.jpg",
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/wp-content/themes/truthemergency/images/header-banner.jpg",
  "https://truthemergency.us/wp-content/uploads/2014/01/header-banner.jpg",
  "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/header-banner.jpg"
)

$ok = 0; $fail = 0

foreach ($entry in $images.GetEnumerator()) {
  $url  = $entry.Key
  $dest = Join-Path $base $entry.Value
  $dir  = Split-Path $dest
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  if (Test-Path $dest) {
    Write-Host "SKIP (exists): $($entry.Value)"
    $ok++
    continue
  }

  try {
    Invoke-WebRequest -Uri $url -UserAgent $ua -OutFile $dest -UseBasicParsing -TimeoutSec 30
    $size = (Get-Item $dest).Length
    Write-Host "OK  ($size bytes): $($entry.Value)"
    $ok++
  } catch {
    Write-Host "FAIL: $($entry.Value) -- $($_.Exception.Message)"
    $fail++
  }
  Start-Sleep -Milliseconds 400
}

# Try header banner
Write-Host "`nTrying header banner..."
$headerDest = Join-Path $base "images\header-banner.jpg"
if (-not (Test-Path $headerDest)) {
  foreach ($hurl in $headerUrls) {
    try {
      Invoke-WebRequest -Uri $hurl -UserAgent $ua -OutFile $headerDest -UseBasicParsing -TimeoutSec 20
      $size = (Get-Item $headerDest).Length
      if ($size -gt 1000) {
        Write-Host "OK header-banner.jpg ($size bytes) from $hurl"
        break
      } else {
        Remove-Item $headerDest -Force
      }
    } catch { }
  }
}

Write-Host "`nDone. OK=$ok  FAIL=$fail"
