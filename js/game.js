var c   = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

var story_playing = true;
story();

function story() {
	console.log("test");
	var typed = new Typed('#story-message', {
		strings: [
			"Hi there.",
			"You are looking quite well today,^200 Sir FluffNeedle.^1000",
			"Allow me to introduce myself.",
			"My name is Mr. Grumpy ButtonEyes.^250.^250.^250 The third.",
			"I have a slight problem.",
			"I've lost one of my beautiful button eyes.",
			"This is U^100N^100A^100C^100C^100E^100P^100T^100A^100B^100L^100E^100!^250 ABSOLUTELY UNACCEPTABLE!",
			"GO!^100 GO!^100 AT ONCE!^250 You MUST find it for me!",
			"I BELIEVE in you,^200 FluffNeedle!!!!!!!!",
		],
		typeSpeed: 30,
		startDelay: 500,
		backDelay: 1800,
		loop: false,
		smartBackspace: true,
		showCursor: false,
		onComplete: startGame
	})
}

function startGame() {
	story_playing = false;
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