// title screen functions

let taunts = [
	'Stop running with scissors!',
	'Sharpen up!',
	'Get to the point!',
	'You needle some more thread?',
	'And sew it begins...',
	'Mend your ways!',
	'Weave gotta stop this!',
	'That\'s knot right...',
	'Next patch: your skills'
];

// get querystring
var queryDict = {}
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
if (typeof queryDict.taunts !== 'undefined') {
	$("#tag").text(taunts[Math.floor(Math.random()*taunts.length)])
}


function Up() {
	let $prev = $('.menu-button:visible.active').eq(0).prev('.menu-button:visible');
	$('.menu-button:visible.active').removeClass('active');
	if ($prev.length === 0) {
		$('.menu-button:visible').last().addClass('active');
	} else {
		$prev.addClass('active');
	}
}
function Down() {
	let $next = $('.menu-button:visible.active').eq(0).next('.menu-button:visible');
	$('.menu-button:visible.active').removeClass('active');
	if ($next.length === 0) {
		$('.menu-button:visible').first().addClass('active');
	} else {
		$next.addClass('active');
	}
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
	window.location = 'index.html';
}
function title(){
	window.location = 'title.html';
}