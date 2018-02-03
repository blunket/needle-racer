
var c   = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

window.location = 'title.html?taunts=1'