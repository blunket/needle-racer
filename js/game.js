var c   = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

story();

function story() {
	console.log("test");
	var typed = new Typed('#story-message', {
		strings: ["Hi there.", "Allow me to introduce myself.", "My name is ...", "My name is Mr. Grumpy ButtonEyes.", "My name is Mr. Grumpy ButtonEyes. ... The third."],
		typeSpeed: 10,
		startDelay: 1000,
		backDelay: 3000,
		loop: false,
		smartBackspace: true,
		showCursor: false,
	})
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