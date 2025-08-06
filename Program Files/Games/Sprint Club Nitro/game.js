var ver = "v2023.07.04";
var debug = false;
//alert(ver);

if (debug) {
    debugText.style.display = "block";
    setInterval(function () {
        debugText.innerHTML = "Debugging Info - Tap to remove. Build: " + ver + "<br>innerHeight:" + innerHeight + "  screen.height:" + screen.height + "  Ratio:" + (innerHeight / screen.height);
    }, 1000);

    debugText.addEventListener("click", function () {
        debugText.style.display = "none";
    });
}

var lang = navigator.language.toLowerCase();

var british = false;
if (lang == "en-gb") {
    british = true;
}

if (debug) {
    lang = "es"; //spoof lang
}

var shortLang = lang.slice(0, 2);


//COOKIES
/////////

var pageViews = -1;
var gamePlays = -1;

//pageview
var n = localStorage.getItem('visitsCounter');
if (n === null) {
    n = 0;
}
pageViews = n;
console.log("cookie pageviews: " + pageViews);

//gameplays
var x = localStorage.getItem('gamePlays');
if (x === null) {
    x = 0;
}

gamePlays = x;

function gamePlaysIncrement() {
    gamePlays++;
    localStorage.setItem("gamePlays", gamePlays);
    console.log("cookie gameplays increment: " + gamePlays);
}

console.log("cookie gameplays: " + gamePlays);

const gamePlaysIncrementTimeout = setTimeout(gamePlaysIncrement, 100000);

var isSchool = false;
if (window.location.hostname.indexOf("school") > -1 || window.location.hostname.indexOf("math") > -1) {
    isSchool = true;
}

if (game.title.length > 28) {
    infoBoxTitle.style.fontSize = "5vmax";
}

if (game.loadingSizeMB > 20) {
    game.enDescription += "<br>Note: Please WAIT for loading. Itâ€™s well worth it!";
}

if (game.enDescription.indexOf("This is an old retired") == 0){
    
    switch (shortLang) {
            case "es":
                game.enDescription = "Â¡Este es un juego Flash retirado que estamos alojando para mantener vivos los recuerdos! EstÃ¡ emulado para permitir que se ejecute en su navegador. Por favor, comprenda que puede funcionar lentamente o con algunos errores. No hay anuncios. Â¡Feliz juego!";
                break;
            case "pt":
                game.enDescription = "Este Ã© um jogo em Flash aposentado que estamos hospedando para manter as memÃ³rias vivas! Ã‰ emulado para permitir que seja executado no seu navegador. Por favor, entenda que pode ser executado lentamente ou com alguns bugs. NÃ£o hÃ¡ anÃºncios. Feliz jogando!";
                break;
            case "id":
                game.enDescription = "Ini adalah game Flash pensiunan yang kami selenggarakan untuk menjaga kenangan tetap hidup! Itu ditiru untuk memungkinkannya berjalan di browser Anda. Harap mengerti bahwa ini mungkin berjalan lambat atau dengan beberapa bug. Tidak ada iklan. Selamat bermain!";
                break;
            case "ph":
                game.enDescription = "Isa itong retiradong Flash game na aming hina-host para panatilihing buhay ang mga alaala! Ito ay ginagaya upang payagan itong tumakbo sa iyong browser. Mangyaring maunawaan na maaari itong tumakbo nang mabagal o may ilang mga bug. Walang mga ad. Maligayang paglalaro!";
                break;
            case "tr":
                game.enDescription = "Bu, anÄ±larÄ± canlÄ± tutmak iÃ§in barÄ±ndÄ±rdÄ±ÄŸÄ±mÄ±z eski bir Flash oyunudur! TarayÄ±cÄ±nÄ±zda Ã§alÄ±ÅŸmasÄ±na izin vermek iÃ§in taklit edilmiÅŸtir. LÃ¼tfen yavaÅŸ veya bazÄ± hatalarla Ã§alÄ±ÅŸabileceÄŸini anlayÄ±n. Reklam yok. Mutlu oyun!";
                break;
            case "pl":
                game.enDescription = "To wycofana gra Flash, ktÃ³rÄ… hostujemy, aby zachowaÄ‡ wspomnienia! Jest emulowany, aby umoÅ¼liwiÄ‡ jego dziaÅ‚anie w przeglÄ…darce. ProszÄ™ zrozumieÄ‡, Å¼e moÅ¼e dziaÅ‚aÄ‡ wolno lub zawieraÄ‡ bÅ‚Ä™dy. Nie ma Å¼adnych reklam. MiÅ‚ego grania!";
                break;
            case "th":
                game.enDescription = "à¸™à¸µà¹ˆà¸„à¸·à¸­à¹€à¸à¸¡ Flash à¸—à¸µà¹ˆà¹€à¸¥à¸´à¸à¹ƒà¸Šà¹‰à¹à¸¥à¹‰à¸§à¸‹à¸¶à¹ˆà¸‡à¹€à¸£à¸²à¸à¸³à¸¥à¸±à¸‡à¹‚à¸®à¸ªà¸•à¹Œà¹€à¸žà¸·à¹ˆà¸­à¹€à¸à¹‡à¸šà¸„à¸§à¸²à¸¡à¸—à¸£à¸‡à¸ˆà¸³à¹ƒà¸«à¹‰à¸„à¸‡à¸­à¸¢à¸¹à¹ˆ! à¸¡à¸µà¸à¸²à¸£à¸ˆà¸³à¸¥à¸­à¸‡à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¸—à¸³à¸‡à¸²à¸™à¹ƒà¸™à¹€à¸šà¸£à¸²à¸§à¹Œà¹€à¸‹à¸­à¸£à¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹‚à¸›à¸£à¸”à¹€à¸‚à¹‰à¸²à¹ƒà¸ˆà¸§à¹ˆà¸²à¸¡à¸±à¸™à¸­à¸²à¸ˆà¸—à¸³à¸‡à¸²à¸™à¸Šà¹‰à¸²à¸«à¸£à¸·à¸­à¸¡à¸µà¸ˆà¸¸à¸”à¸šà¸à¸žà¸£à¹ˆà¸­à¸‡à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡ à¹„à¸¡à¹ˆà¸¡à¸µà¹‚à¸†à¸©à¸“à¸² à¸¡à¸µà¸„à¸§à¸²à¸¡à¸ªà¸¸à¸‚à¹ƒà¸™à¸à¸²à¸£à¹€à¸¥à¹ˆà¸™!";
                break;
            case "gr":
                game.enDescription = "Î‘Ï…Ï„ÏŒ ÎµÎ¯Î½Î±Î¹ Î­Î½Î± Î±Ï€Î¿ÏƒÏ…ÏÎ¼Î­Î½Î¿ Ï€Î±Î¹Ï‡Î½Î¯Î´Î¹ Flash Ï€Î¿Ï… Ï†Î¹Î»Î¿Î¾ÎµÎ½Î¿ÏÎ¼Îµ Î³Î¹Î± Î½Î± ÎºÏÎ±Ï„Î®ÏƒÎ¿Ï…Î¼Îµ Î¶Ï‰Î½Ï„Î±Î½Î­Ï‚ Ï„Î¹Ï‚ Î±Î½Î±Î¼Î½Î®ÏƒÎµÎ¹Ï‚! Î•Î¯Î½Î±Î¹ ÎµÎ¾Î¿Î¼Î¿Î¯Ï‰ÏƒÎ· Î³Î¹Î± Î½Î± ÎµÏ€Î¹Ï„ÏÎ­Ï€ÎµÏ„Î±Î¹ Î½Î± ÎµÎºÏ„ÎµÎ»ÎµÎ¯Ï„Î±Î¹ ÏƒÏ„Î¿ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ®Ï‚ ÏƒÎ±Ï‚. ÎšÎ±Ï„Î±Î½Î¿Î®ÏƒÏ„Îµ ÏŒÏ„Î¹ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÎµÎºÏ„ÎµÎ»ÎµÎ¯Ï„Î±Î¹ Î±ÏÎ³Î¬ Î® Î¼Îµ Î¿ÏÎ¹ÏƒÎ¼Î­Î½Î± ÏƒÏ†Î¬Î»Î¼Î±Ï„Î±. Î”ÎµÎ½ Ï…Ï€Î¬ÏÏ‡Î¿Ï…Î½ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚. ÎšÎ±Î»ÏŒ Ï€Î±Î¹Ï‡Î½Î¯Î´Î¹!";
                break;
            default:
        }
}

gameMB.innerHTML = game.loadingSizeMB + "MB";

var mSpecial = false;
if (game.title.indexOf("inecra") > -1) {
    mSpecial = true;
}







//GET OPERATING SYSTEM
//////////////////////

var os = "Other";

var hasTouchPoints = false;
if (navigator.maxTouchPoints > 0) {
    hasTouchPoints = true;
}

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

function getAndroidVersion() {
    var match = userAgent.toLowerCase().match(/android\s([0-9\.]*)/i);
    return match ? parseInt(match[1], 10) : false;
};

function getOperatingSystem() {
    if (/android/i.test(userAgent) && hasTouchPoints) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    if (navigator.platform === 'MacIntel' && hasTouchPoints) { //newer iPads
        return "iOS";
    }
    return "Desktop"; //default - will be mostly pcs, macs, linux desktop etc.
}

var os = getOperatingSystem();

var shortOS = "OTR";

if (os == "Desktop") { //further sub divide...

    if (userAgent.indexOf("Windows NT 10.0") != -1) {
        //console.log("OS is Windows 10 or 11");
        os += "-winNewest";
        shortOS = "WNN";
    }

    if (userAgent.indexOf("Windows NT 6.") != -1) { //8.1 or 8.0 or 7.0
        //console.log("OS is Windows 7 or 8");
        os += "-win7-8";
        shortOS = "W78";
    }

    if (userAgent.indexOf("Mac") != -1) {
        //console.log("OS is MacOS");
        os += "-macOS";
        shortOS = "MOS";
    }

    if (userAgent.indexOf("CrOS") != -1) {
        //console.log("OS is Chrome OS");
        os += "-chromeOS";
        shortOS = "CRO";
    }

    if (os == "Desktop") { //if still only "Desktop"
        //console.log("OS is unknown Desktop - likely Linux");
        os = "Desktop-other";
        shortOS = "DTO";
    }

}

var touchDevice = false; // could use...  typeof window.orientation == "undefined"
if ((os == "Android" && hasTouchPoints) || os == "iOS") {
    touchDevice = true;
}









/*
//windows version
var windows10 = false;
var windows11 = false;

navigator.userAgentData.getHighEntropyValues(["platformVersion"])
    .then(ua => {
        if (navigator.userAgentData.platform === "Windows") {
            const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
            if (majorPlatformVersion >= 13) {
                console.log("Windows 11 or later");
                windows11 = true;
            } else if (majorPlatformVersion > 0) {
                console.log("Windows 10");
                windows10 = true;
            } else {
                console.log("Before Windows 10");
            }
        } else {
            console.log("Not running on Windows");
        }
    });

//console.log("immediate windows10: " + windows10);
//console.log("immediate windows11: " + windows11);
*/

if (!game.showBackButton) {
    backButton.style.display = "none";
}

if (!game.showGameEffectsButton) {
    gameEffectsButton.style.display = "none";
}

if (game.walkthrough == "") {
    walkthroughButton.style.display = "none";
}









//OUTPUT CONTROLS
/////////////////

if (!touchDevice) {
    var controlsString = "";

    if (game.controls.indexOf("m") > -1) {
        controlsString += "<div id=mouse></div>";
    }
    if (game.controls.indexOf("g") > -1) {
        controlsString += "<div id=gamepad></div>";
    }
    if (game.controls.indexOf("k") > -1) {
        controlsString += "<div id=keyboard></div>";
    }

    var i;
    var singleKey = "";
    for (i = 0; i < game.keys.length; i++) {

        var keySize = "";
        singleKey = game.keys.slice(i, i + 1);

        switch (singleKey) {
            case "U":
                singleKey = "&uarr;";
                break;
            case "D":
                singleKey = "&darr;";
                break;
            case "L":
                singleKey = "&larr;";
                break;
            case "R":
                singleKey = "&rarr;";
                break;
            case "S": //spacebar
                singleKey = "_";
                keySize = "Large";
                break;
            case "C": //ctrl
                singleKey = "ctrl";
                keySize = "Large";
                break;
            case "E": //enter
                singleKey = "&#8626;";
                keySize = "Medium";
                break;
            case "T": //shift
                singleKey = "&#8679;";
                keySize = "Medium";
                break;
            case "B": //tab
                singleKey = "&#8646;";
                keySize = "Medium";
                break;
            default:
                singleKey = singleKey.toUpperCase(); //if not an arrow key, make the letter uppercase
        }

        controlsString += "<div class=key" + keySize + "><div class=keyCharacter>" + singleKey + "</div></div>"
    }
    infoBoxControls.innerHTML = controlsString;
} else {
    infoBoxControls.style.display = "none";
}

//for long titles
if (game.title.length > 24) {
    infoBoxTitle.style.fontSize = "4vmax";
}

if (game.title.length > 30) {
    infoBoxTitle.style.fontSize = "3.5vmax";
}

if (game.loadingSeconds == "auto") { //if game loadin time is not specified ('auto' is used) then calculate based on game size
    game.loadingSeconds = game.loadingSizeMB;
    if (game.loadingSeconds < 9) {
        game.loadingSeconds = 9;
    }
    if (game.loadingSeconds > 16) {
        game.loadingSeconds = 16;
    }
}
game.loadingSeconds += "s";

spinner.style.animation = "spinner 2s linear forwards infinite, spinnerRemove 0s " + game.loadingSeconds + " linear forwards";
playButton.style.animation = "playButtonShow 0s " + game.loadingSeconds + " linear forwards, shake1 1s 15s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
infoBoxLoadingBar.style.animation = "infoBoxLoadingBar " + game.loadingSeconds + " 1.5s linear forwards";

//fix 'click' and tap' text in description

if (touchDevice) {
    game.enDescription = game.enDescription.replace(/clicking/g, "tapping");
    game.enDescription = game.enDescription.replace(/Clicking/g, "Tapping");
    game.enDescription = game.enDescription.replace(/click/g, "tap");
    game.enDescription = game.enDescription.replace(/Click/g, "Tap");
    game.enDescription = game.enDescription.replace(/clicks/g, "taps");
    game.enDescription = game.enDescription.replace(/Clicks/g, "Taps");
    game.enDescription = game.enDescription.replace(/mouze/g, "finger");
}

game.enDescription = game.enDescription.replace(/mouze/g, "mouse");
game.enDescription = game.enDescription.replace(/OGKA/g, "This is a treasured old game we're hosting to keep memories alive. As ever, there are no ads. Enjoy!");

if (british){ //us -> british
    game.enDescription = game.enDescription.replace(/Color/g, "Colour");
    game.enDescription = game.enDescription.replace(/color/g, "colour");
    game.enDescription = game.enDescription.replace(/favorite/g, "favourite");
    game.enDescription = game.enDescription.replace(/flavor/g, "flavour");
    game.enDescription = game.enDescription.replace(/armor/g, "armour");
    game.enDescription = game.enDescription.replace(/donut/g, "doughnut");
}






infoBoxTitle.innerHTML = game.title;
infoBoxDesc.innerHTML = game.enDescription;

/////////////////////////////////////////// BIT OF FUN - RANDOM TEXT EFFECT
//character replace function
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

//all permissable characters   
var chars = "!.?&'-: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890Ã¼";

var newGameName = "";
var stringLength = game.title.length;
var testChar1 = "";
var testChar2 = "";

//generate random string of the same length as the game name
var i;
for (i = 0; i < game.title.length; i++) {
    newGameName += chars.substr((Math.floor(Math.random() * chars.length)), 1);
}

var textTimer;
if (game.title.length < 27) { //exclude effect for 2-line game titles
    setTimeout(function () {
        var textTimer = setInterval(function () {
            blastText()
        }, 100);
    }, 22000);
}

//var textTimer = setInterval(function(){ blastText() }, 100);   

function blastText() {

    for (i = 0; i < 200; i++) { //to speed up operation, do x loops each call

        //generate random character index
        randCharIndex = Math.floor(Math.random() * stringLength);

        //get random chars
        testChar1 = chars.substr((Math.floor(Math.random() * chars.length)), 1); //random character from the full list of characters
        testChar2 = game.title.substr(randCharIndex, 1); //random character from the game name

        //replace character if correct
        if (testChar1 == testChar2) {
            newGameName = setCharAt(newGameName, randCharIndex, testChar1); //if there is a match, update newGameName with the match
        }

        //write one random new character in each cycle
        if (newGameName.substr(randCharIndex, 1) != game.title.substr(randCharIndex, 1)) {
            newGameName = setCharAt(newGameName, randCharIndex, testChar1);
        }

        //when matching string is found, stop operation
        if (newGameName == game.title) {
            clearInterval(textTimer);
        }

        infoBoxTitle.innerHTML = newGameName;

    } //end for

} // end func

///////////////////////////////////////////

var requestFullscreen = function (ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};

var exitFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};

//currently an unused feature - check its use with future games
var allowFullScreen = true;
//if (game.title == "Algerian Solitaire"){
//    allowFullScreen = false;
//}

//when user clicks to play game (remove loading overlay, enter fullscreen etc.)
loadingBox.addEventListener('click', function (e) {
    loadingOverlay.style.display = "none";
    backButton.style.animationPlayState = "running";
    gameEffectsButton.style.animationPlayState = "running";
    walkthroughButton.style.animationPlayState = "running";

    //ios full screen seems to cause problems, so fullscreen is disabled in iOS right now
    if (os.indexOf("iOS") == -1 && !mSpecial && allowFullScreen) {
        e.preventDefault();
        requestFullscreen(document.documentElement);

        setTimeout(function () {
            fullscreenListeners();
        }, 1000);
    }

    //if needed, check orientation of game start, then listen for device orientation change. Some games "autoDetect" detect, others do not and are "noDetect" games.
    if (((game.orientation == "Portrait") || (game.orientation == "Landscape")) && (game.orientationAdviceRequired)) {
        checkOrientation();
        window.addEventListener('orientationchange', checkOrientation);
    }
    scaleGame();

    if (mSpecial) {
        window.open(atob("aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv"), "_blank");
    }

});

//if on mobile, run game orientation icon animation
if (touchDevice || debug == true) {
    if (game.orientation == "Landscape") {
        orientationIconLandscape.style.animationPlayState = "running";
    } else {
        orientationIconPortrait.style.animationPlayState = "running";
    }
}

//if on mobile AND user has wrong orientation, flash icon at x seconds
setTimeout(function () {
    if (os == "Android" || debug == true) {
        if ((screen.width < screen.height) && game.orientation == "Landscape") {
            orientationIconLandscape.style.animation = "brightFlash 3s forwards";
        }
        if ((screen.width > screen.height) && game.orientation == "Portrait") {
            orientationIconPortrait.style.animation = "brightFlash 3s forwards";
        }
    }
    if (os == "iOS") {
        if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Landscape") {
            orientationIconLandscape.style.animation = "brightFlash 3s forwards";
        }
        if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Portrait") {
            orientationIconPortrait.style.animation = "brightFlash 3s forwards";
        }
    }
}, 8000);

//if browser somehow exits fullscreen (non iOS) display button to allow user to click and go into fullscreen again, then remove button
if (os != "iOS" && allowFullScreen) {
    fullScreenButton.addEventListener('click', function (e) {
        e.preventDefault();
        requestFullscreen(document.documentElement);
        fullScreenButton.style.display = "none";
    });
}

var classicMenu = true;

var returnURL = "#";


setTimeout(function () {

    backButton.addEventListener('click', function (e) {

        if (os != "iOS" && allowFullScreen) {
            e.preventDefault();
            exitFullscreen();
        }

        window.location.assign(returnURL);
    });

}, 999);

walkthroughButton.addEventListener('click', function (e) {
    window.open(game.walkthrough);
});

//listen for any (unexpected) screen change and make full screen button visible  
//delay added to prevent showing when user clicks back button
function fullscreenListeners() {
    //as listening for fullscreenchange seems unreliable (Android) this simpler solution works for all cases 
    setInterval(function () {
        //if (window.innerHeight == screen.height) {
        if (innerHeight / screen.height > 0.9) {
            innerHeight / screen.height
            fullScreenButton.style.display = "none";
            //console.log("browser is fullscreen (or close to)");
        }
        if (innerHeight / screen.height < 0.90 && os.indexOf("iOS") == -1) { //check it is STILL the case (timeout)
            fullScreenButton.style.display = "block";
            //console.log("browser is windowed");
        }
    }, 1000);

}

//repeatedly focus game to ensure correct start and continued play
setInterval(function () {
    gameBox.focus()
}, 500);

function checkOrientation() {
    setTimeout(function () {
        if (os == "iOS") {
            if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "none";
            }
            if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "block";
            }
            if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "block";
            }
            if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "none";
            }
        }

        if (os == "Android") {
            if ((screen.width > screen.height) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "none";
            }
            if ((screen.width < screen.height) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "block";
            }
            if ((screen.width > screen.height) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "block";
            }
            if ((screen.width < screen.height) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "none";
            }
        }
    }, 500);
}

function scaleGame() {
    gameBox.style.height = (window.innerHeight * 1) + "px";
    gameBox.style.width = (window.innerWidth * 1) + "px";
}

window.addEventListener('resize', () => {
    scaleGame();
});

gameBox.src = game.source;

//once game source specified, scale game (important for Chrome with loading flash)
scaleGame();

//overlay and flip effects etc.
effectsCounter = 0;
gameEffectsButton.addEventListener("click", function () {

    gameBox.style.transition = "1s";

    switch (effectsCounter) {
        default:
    }
    gameEffectsIndicator.innerHTML = effectsCounter;
    effectsCounter++;
});









//TEST FOR IFRAMES
//////////////////
//console.log("Testing Framing");

var externallyFramed = false;
(function () {
    try {
        externallyFramed = top.location.host != location.host;
    } catch (err) {
        externallyFramed = true;
    }
    if (externallyFramed) {
        //top.location = location;
        console.log("Game EF."); //external framing
        console.log(document.referrer);
    } else {
        //console.log("Game NOT EF.");
    }
})();


let debugString = "Debugging: ";


var GA4ID = "G-Q1SE2SYDTW";

var sessionExpiryTime = 180000;

var gameType = "NM"; //normal

if (isSchool) {
    GA4SampleRate = 100;
}

if (game.spare == 1) { //extra game
    GA4SampleRate = 100;
    gameType = "EX";
}

if (isSchool && game.spare == 2) { //worthy game
    sessionExpiryTime = 100000; //100 seconds
    gameType = "WT";
}

if (game.spare == 3) { //test game
    GA4SampleRate = 100;
    gameType = "TS";
}

if (isSchool && game.spare == 4) { //school test game
    GA4SampleRate = 100;
    sessionExpiryTime = 100000; //100 seconds
    gameType = "ST";
}

if (classicMenu) {
    GA4SampleRate = 100;
    sessionExpiryTime = 180000;
    gameType = "CM";
}


var siteID = "F";

if (isSchool) {
    siteID = "S";
}

const cohort = 8;


debugString += "GA4ID:" + GA4ID + " GA4SampleRate:" + GA4SampleRate + " | ";

//original ipad
if (/iPad/.test(userAgent)) {
    shortOS = "IPD";
}

//check for newer iPads etc.
if (navigator.platform === 'MacIntel' && hasTouchPoints) { //newer iPads
    shortOS = "IPN";
}

//check for newer iPhones and iPodTouch etc.
if (/iPhone|iPod/.test(userAgent)) {
    shortOS = "IPH";
}

//check for Amazon tablets
if (/silk/i.test(userAgent)) {
    shortOS = "SLK";
}

//break out android versions
if (os == "Android") {

    var androidVersionTruncated = getAndroidVersion();
    shortOS = "ANN";

    if (androidVersionTruncated == 9 || androidVersionTruncated == 10) {
        shortOS = "ANM";
    }

    if (androidVersionTruncated >= 11) {
        shortOS = "ANH";
    }
}


//SEND EVENTS
/////////////

var gameTitleTruncated = game.title.replace(/ /g, ""); //remove any spaces

gameTitleTruncated = gameTitleTruncated.replace(/AndWatergirl/g, ""); //special exception for long game names

if (gameTitleTruncated.length > 18) { //for long game names, remove some vowels
    gameTitleTruncated = gameTitleTruncated.replace(/a/g, "").replace(/e/g, "");
}

gameTitleTruncated = gameTitleTruncated.slice(0, 16); //trim whatever remains down to size

if (gamePlays > 2) {

    var submitString1 = siteID + cohort + "-" + shortOS + "-";
    var submitString2 = "S" + GA4SampleRate + "-" + gameType + "-" + gameTitleTruncated;

}




//EXPERIMENTAL VIEWPORT SETTING
///////////////////////////////
if (touchDevice) {
    document.addEventListener('DOMContentLoaded', (event) => {
        //console.log('DOM fully loaded and parsed');
        setTimeout(function () {
            //console.log('Changing viewport...');
            var metaTag = document.createElement('meta');
            metaTag.name = "viewport";
            metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
            document.getElementsByTagName('head')[0].appendChild(metaTag);
        }, 7000); //best-guess-for-lh
    });
}


//DISABLE RIGHT CLICKS
//////////////////////

//disable rmb on loader page
document.addEventListener('contextmenu', event => event.preventDefault());

//disable rmbon inner game page
setTimeout(function () {

    //disable rmb on inner game
    gameBox.contentWindow.document.getElementsByTagName("body")[0].addEventListener("contextmenu", e => e.preventDefault());

    //listen for and record rmb
    //gameBox.contentWindow.document.getElementsByTagName("body")[0].addEventListener('contextmenu', function (e) {
    //    console.log("rmb");
    //    recordRightClick();
    //});

}, 2000);