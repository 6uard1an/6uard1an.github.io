function pageload() {
document.getElementById('htmleditor').style.display = 'block';
document.getElementById('csseditor').style.display = 'none';
document.getElementById('jseditor').style.display = 'none';
play();
}
function play() {
const csseditorcode = document.getElementById('csseditor');
csseditorcode.addEventListener("input", function() {
csseditorcode.value = csseditorcode.value.replaceAll('fixed', 'none');
play();
})
const input = '<style>' + document.getElementById('csseditor').value + '</style>' + document.getElementById('htmleditor').value;
document.getElementById('output').innerHTML = input;
var jseditorcode = document.createElement("script");
jseditorcode.innerHTML = document.getElementById('jseditor').value;
document.getElementById('output').appendChild(jseditorcode);
}
function fullscreen() {
document.getElementById('output').requestFullscreen();
}
function html() {
document.getElementById('htmleditor').style.display = 'block';
document.getElementById('csseditor').style.display = 'none';
document.getElementById('jseditor').style.display = 'none';
}
function css() {
document.getElementById('htmleditor').style.display = 'none';
document.getElementById('csseditor').style.display = 'block';
document.getElementById('jseditor').style.display = 'none';
}
function js() {
document.getElementById('htmleditor').style.display = 'none';
document.getElementById('csseditor').style.display = 'none';
document.getElementById('jseditor').style.display = 'block';
}
(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();
function clearconsole() {
document.getElementById('log').innerHTML = '';
}