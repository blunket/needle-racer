// title screen functions
mainmenu();
updateMovements();

let taunts = [
	'Collect the buttons!',
	'Don\'t run with scissors!',
	'Sharpen up!',
	'Get to the point!',
	'Needle some more thread?',
	'And sew it begins...',
	'Mend your ways!',
	'Weave gotta get going!',
	'Something\'s knot right...',
	'Next patch: your skills',
	'Button up, let\'s go!',
];

$("#tag").text(taunts[Math.floor(Math.random()*taunts.length)])

function updateCursor() {
	if ($(".menu-button:visible.active").length == 0) {
		$('.menu-button.active').removeClass('active');
		$('.menu-button:visible').first().addClass('active');
	}
	$("#needle-cursor").css('top', $(".menu-button:visible.active").eq(0).position().top);
}

function Up() {
	let $prev = $('.menu-button:visible.active').eq(0).prev('.menu-button:visible');
	$('.menu-button:visible.active').removeClass('active');
	if ($prev.length === 0) {
		$('.menu-button:visible').last().addClass('active');
	} else {
		$prev.addClass('active');
	}
	updateCursor();
}
function Down() {
	let $next = $('.menu-button:visible.active').eq(0).next('.menu-button:visible');
	$('.menu-button:visible.active').removeClass('active');
	if ($next.length === 0) {
		$('.menu-button:visible').first().addClass('active');
	} else {
		$next.addClass('active');
	}
	updateCursor();
}
function Right() {
	return Down();
}
function Left() {
	return Up();
}
function Enter() {
	$btn = $('.menu-button:visible.active').eq(0);
	let fn = $btn.data('fn');
	if (typeof window[fn] === 'function') {
		window[fn]();
	} else {
		throw "Function " + fn + " not defined.";
	}
}
function Space() {
	return Enter();
}
function play() {
	window.location = 'game.html';
}
function opts() {
	$(".options-menu").show();
	$(".main-menu").hide();
	updateCursor();
}
function mainmenu() {
	$(".options-menu").hide();
	$(".main-menu").show();
	updateCursor();
}
function updateMovements() {
	if (remote.getGlobal('settings').less_movement) {
		$("#tag").css("animation", "none");
		$("body").css("animation", "none");
	} else {
		$("#tag").css("animation", "textzoom .5s infinite alternate, rainbow 2s linear infinite alternate");
		$("body").css("animation", "backgroundpan 1.5s linear infinite");
	}
}
function toggmovement() {
	if (remote.getGlobal('settings').less_movement) {
		remote.getGlobal('settings').less_movement = false;
	} else {
		remote.getGlobal('settings').less_movement = true;
	}
	updateMovements()
}
function toggsound() {
	if (remote.getGlobal('settings').sound) {
		remote.getGlobal('settings').sound = false;
	} else {
		remote.getGlobal('settings').sound = true;
	}
}
function Esc() {
	quit();
}