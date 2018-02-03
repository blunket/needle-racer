const remote = require("electron").remote;
const win = remote.getCurrentWindow();

document.addEventListener("keydown", event => {
	if (event.key === "F11" || (event.altKey && event.key === "Enter")) {
        if (win.isFullScreen()) {
            win.setFullScreen(false);
        } else {
            win.setFullScreen(true);
        }
	}

	if (event.key === "F12") {
		win.toggleDevTools()
	}

	if (event.key == "Escape") {
		quit();
	}

	if (event.key == "Enter") {
		Enter();
	}
	if (event.key == "Spacebar" || event.key == " ") {
		Space();
	}
	if (event.key == "ArrowDown") {
		Down();
	}
	if (event.key == "ArrowUp") {
		Up();
	}
	if (event.key == "ArrowRight") {
		Right();
	}
	if (event.key == "ArrowLeft") {
		Left();
	}

});

function quit() {
	win.close();
}