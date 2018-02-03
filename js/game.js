var c   = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

function draw() {

}

function jump() {

}

function Space() { jump(); }
function Up() { return Space(); }
function Down() { return Space(); }
function Left() { return Space(); }
function Right() { return Space(); }
function Enter() { return Space(); }
function Esc() {
	window.location = 'title.html';
}