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
			"Someone <strong>STOLE</strong> one of my BEAUTIFUL button eyes!",
			"This is T^100E^100R^100R^100I^100B^100L^100E!^250!",
			"An absolute <strong>OUTRAGE</strong>!^250",
			"Say,^250 FluffNeedle^100.^100.^100.^100 you'll help me! ^100.^100.^100.^100 Won't you?^300",
			"Of course! How generous of you!!^250",
			"I <strong>b^100e^100l^100i^100e^100v^100e</strong>^100 in you,^200 FluffNeedle!!!!!!!!^2500",
		],
		typeSpeed: 30,
		startDelay: 500,
		backDelay: 1500,
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
	} else if (arrayPos == 10) {
		$("#grumpy img").shake({ direction: "up", times: 6 });
	}
}

function instructions() {
	story_playing = false;
	instructions_open = true;
	typed.destroy();
	$("#story").fadeOut();
}

var needle = { x: 0, y: 0, angle: 0 }

var game_objects = [];

var step_size = 50;

function resetNeedle() {
	needle.x = 0;
	needle.y = Math.round(window.innerHeight / 2);
	needle.angle = 0;
}

function startGame() {
	story_playing = false;
	instructions_open = false;
	playaudio("#game-theme");
	resetNeedle();
	$("#instructions").fadeOut();
	Step();
	genScissors();
	genThread();
}

function genScissors() {
	game_objects.push(new Scissors());
	setTimeout(genScissors, getRandomInt(200, 1500))
}

function genThread() {
	game_objects.push(new Thread());
	setTimeout(genThread, getRandomInt(5000, 10000))
}

function draw() {
	document.getElementById("needle").style.top = needle.y + "px";
	document.getElementById("needle-img").style.transform = "rotate(" + needle.angle + "deg)";
	if (!remote.getGlobal('settings').less_movement) {
		document.body.style.backgroundPosition = (-1 * needle.x) + "px 0px"
	}
}
function Step() {
	if (key_down && !key_up && needle.y < (window.innerHeight - 60)) {
		needle.y += 40;
		needle.angle = 30;
	} else if (key_up && !key_down && needle.y > 40) {
		needle.y -= 40;
		needle.angle = -30;
	} else if (!key_up && !key_down) {
		needle.angle = 0;
	}
	needle.x += step_size;
	for (var i = 0; i < game_objects.length; i++) {
		let obj = game_objects[i];
		obj.step();
		if (obj.x < -200) {
			game_objects.splice(i, 1);
		}
		obj.draw();
	}
	console.log(game_objects);
	draw();
	setTimeout(Step, 50);
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
}
function KeyUp() {
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
		this.x = needle.x + (window.innerWidth * 2);
		this.y = getRandomInt(200, window.innerHeight - 200);

		this.speed = step_size + getRandomInt(-20, 10);
		if (this.speed < 10) {
			this.speed = 10;
		}
		this.el = $("<div class='scissors'></div>");
		$(this.el).css("top", this.y).appendTo("#domgame");
	}
	step() {
		this.x -= this.speed;
	}
	draw() {
		$(this.el).css("left", this.x);
	}
}

class Thread {
	constructor() {
		this.x = needle.x + (window.innerWidth * 3);
		this.y = getRandomInt(200, window.innerHeight - 200);

		this.el = $("<div class='thread'></div>");
		$(this.el).css("top", this.y).appendTo("#domgame");
	}
	step() {
		this.x -= step_size;
	}
	draw() {
		$(this.el).css("left", this.x);
	}
}
