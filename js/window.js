const remote = require("electron").remote;
const win = remote.getCurrentWindow();

var key_down = false;
var key_up = false;
var key_right = false;
var key_left = false;

document.addEventListener("keyup", event => {
	if (event.key == "ArrowDown") {
		key_down = false;
	}
	if (event.key == "ArrowUp") {
		key_up = false;
	}
	if (event.key == "ArrowRight") {
		key_right = false;
	}
	if (event.key == "ArrowLeft") {
		key_left = false;
	}
	KeyUp();
})

document.addEventListener("keydown", event => {
	if (event.key === "F11" || (event.altKey && event.key === "Enter")) {
        toggfullscreen();
	}

	if (event.key == "Enter" && !event.altKey) {
		Enter();
	}

	if (event.key === "F12") {
		win.toggleDevTools()
	}

	if (event.key == "Escape") {
		Esc();
	}
	if (event.key == "Spacebar" || event.key == " ") {
		Space();
	}
	if (event.key == "ArrowDown") {
		key_down = true;
		Down();
	}
	if (event.key == "ArrowUp") {
		key_up = true;
		Up();
	}
	if (event.key == "ArrowRight") {
		key_right = true;
		Right();
	}
	if (event.key == "ArrowLeft") {
		key_left = true;
		Left();
	}
	KeyDown();
});

function quit() {
	win.close();
}

function toggfullscreen() {
	if (win.isFullScreen()) {
	    win.setFullScreen(false);
	} else {
	    win.setFullScreen(true);
	}
}

function killaudio() {
	$("audio").each(function(i, e){
		$(e).removeAttr("loop").eq(0)[0].pause();
	});
}

function playaudio(el) {
	killaudio();
	if (remote.getGlobal('settings').sound) {
		$(el).attr("loop","loop").eq(0)[0].play();
	}
}