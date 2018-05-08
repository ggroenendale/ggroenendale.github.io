/**
 * Title: Geoff Groenendale - Portfolio
 * Author: Geoff Groenendale
 * Date: 5/7/2018
 * Description: This is a javascript file for primary
 * functions for the portfolio website.
 */

window.onload = function() {
	setup();
}

window.onresize = function() {
	let side 	 = document.getElementById('sidebar');
	let width 	 = side.clientWidth;
	let gr_rect  = document.getElementById('gr-rect');
	let rect_wid = width * 0.85;
	gr_rect.style.width = rect_wid;
}

function setup() {

}