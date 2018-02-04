/*
var c   = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}
*/

if (remote.getGlobal('settings').less_movement) {
	$("#story-hint, #instructions-hint").css("animation", "none");
}

var story_playing = true;
var instructions_open = false;
story();

var typed;
function story() {
	playaudio("#grumpy-theme");
	typed = new Typed('#story-message', {
		strings: [
			"Hi there.",
			"You are looking.^100.^100.^100 quite well today,^300 Sir FluffNeedle.^1000",
			"Allow me to introduce myself.",
			"My name is Mr. Grumpy ButtonEyes.^250.^250.^250 The third.",
			"I have a slight problem.^100",
			"I've <strong>LOST</strong> one of my BEAUTIFUL button eyes!",
			"This is U^100N^100A^100C^100C^100E^100P^100T^100A^100B^100L^100E^100!^250 ABSOLUTELY <strong>UNACCEPTABLE</strong>!",
			"GO!^100 <strong>GO!</strong>^100 AT <strong>ONCE</strong>!^250 You <strong>MUST</strong> find it for me!",
			"I <strong>B^100E^100L^100I^100E^100V^100E^100 in you</strong>,^200 FluffNeedle!!!!!!!!^2500",
		],
		typeSpeed: 30,
		startDelay: 500,
		backDelay: 1100,
		preStringTyped: showGrumpy,
		fadeOut: remote.getGlobal('settings').less_movement,
		loop: false,
		smartBackspace: false,
		showCursor: false,
		onComplete: instructions
	});
	setTimeout(function(){
		$("#story-hint").fadeIn();
	}, 5000);
}

function showGrumpy(arrayPos, typed) {
	console.log(arrayPos);
	if (arrayPos == 3) {
		$("#grumpy").fadeIn();
	} else if (arrayPos == 5) {
		playaudio("#grumpy-angry-theme");
		$("#grumpy img").attr("src", "../img/grumpy-grumpy.png");
		$("#grumpy img").shake();
	} else if (arrayPos == 7) {
		$("#grumpy img").shake();
	} else if (arrayPos == 8) {
		$("#grumpy img").shake({ direction: "up", times: 6 });
		playaudio("#grumpy-theme");
		$("#grumpy img").attr("src", "../img/grumpy-happy.png");
	}
}

function instructions() {
	story_playing = false;
	instructions_open = true;
	typed.destroy();
	$("#story").fadeOut();
}

var needle = { x: 0, y: 0 }

var game_objects = [];

function resetNeedle() {
	needle.x = 0;
	needle.y = Math.round(window.innerHeight / 2);
}

function startGame() {
	story_playing = false;
	instructions_open = false;
	playaudio("#game-theme");
	resetNeedle();
	$("#instructions").fadeOut();
	Step();
}

function draw() {
}
function Step() {
	needleTop = $("#needle").position().top;
	if (key_down && needleTop < (window.innerHeight - 20)) {
		$("#needle").css("top", needleTop + 50);
	}
	if (key_up && needleTop > 20) {
		$("#needle").css("top", needleTop - 50);
	}
	setTimeout(Step, 30);
}
function Space() {
	if (story_playing) {
		instructions();
	} else if (instructions_open) {
		startGame();
	}
}
function Up() {
}
function Down() {
}
function KeyDown() {
	if (!(story_playing || instructions_open)) {
		if (key_down === true) {
			$("#needle img").css("transform", "rotate(20deg)");
		} else if (key_up === true) {
			$("#needle img").css("transform", "rotate(-20deg)");
		}
	}
}
function KeyUp() {
	if (!key_down && !key_up) {
		$("#needle img").css("transform", "rotate(0deg)");
	}
}
function Left() {
}
function Right() {
}
function Enter() { return Space(); }
function Esc() {
	window.location = 'title.html';
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Scissors {
	constructor() {
		this.x = getRandomInt(game.x + window.innerWidth, game.x + (window.innerWidth * 2));
		this.y = getRandomInt(30, window.innerHeight - 30);
		this.rot = getRandomInt(140, 220);
	}
	draw() {

	}
}

