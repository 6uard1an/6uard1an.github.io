 //Drags video iframe
dragElement(document.getElementById("mydiv")); function dragElement(elmnt) { var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; if (document.getElementById(elmnt.id + "header")) {  document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown; } else {  elmnt.onmousedown = dragMouseDown; } function dragMouseDown(e) { e = e || window.event; e.preventDefault();  pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.getElementById(elmnt.id).style.pointerEvents="none";  document.onmousemove = elementDrag; } function elementDrag(e) { e = e || window.event; e.preventDefault();  pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY;  elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; } function closeDragElement() {  document.onmouseup = null; document.onmousemove = null;  document.getElementById("mydiv").style.pointerEvents="auto"; } }
//Video iframe background color
function submitBgColor() {
var element = document.getElementById("mydivheader");
element.style.backgroundColor = document.getElementById("BackGroundColor").value;
}
//Darkmode
function darkMode() {
var element = document.body;
element.classList.toggle("dark-mode");
var element = document.getElementById("mydivheader");
}
//Updates video from url
function updateVideoIdURL() {
let text = document.getElementById("ytidfurl").value;
const myArray = "https://www.youtube.com/embed/" + text.split("v=")[1].substring(0, 11) + "?autoplay=1&rel=0";
const myArrayRec = "https://www.youtube.com/embed/" + text.split("v=")[1].substring(0, 11) + "?start=999999&autoplay=1&mute=1";
document.getElementById("ytvid").src = myArray;
document.getElementById("ytrecommended").src = myArrayRec;
document.getElementsByClassName('currentVideo')[0].removeAttribute('class');
document.getElementById("ytvid").focus()
}
//Opens navigation bar
function openNav() {
document.getElementById("mySidenav").style.width = "375px";
}
//Closes navigation bar
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
//fullscreen
function fullscreen() {
document.getElementById('page').requestFullscreen()
}
//logo clicked
function logoC() {
location.replace('YouTube.html')
}
//id
//let url = window.location.href;let id = url.split('?userid=')[1].substring(0, 24);
//if (id = '62d1e466301ca1257a40e616') {true} else {blur()}