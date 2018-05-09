/**
 * Title: Geoff Groenendale - Portfolio
 * Author: Geoff Groenendale
 * Date: 5/7/2018
 * Description: This is a javascript file for primary
 * functions for the portfolio website. These functions
 * are unique to the portfolio site but this file references
 * the workhorse.js file that has several clerical functions.
 */

/**
 * Just like in the html files specify a base variable that
 * holds the domain and hostname
 * @type {string}
 */
let base = document.location.hostname;

window.onload = function() {
	setup();
}

window.onresize = function() {

}

function setup() {
	change_page_name();
}

function change_page_name() {
	let cur_name = document.getElementsByTagName('html')[0].getAttribute('data-pagename');
	let new_name = first_l_UP(cur_name);
	let page_name = document.getElementById('cur-page');
	if (cur_name === 'home') {

	}
	else if (cur_name === 'photography') {
		page_name.innerText = new_name;
	}
	else if (cur_name === 'projects') {
		page_name.innerText = new_name;
	}
	else if (cur_name === 'hobbies') {
		page_name.innerText = new_name;
	}
	else if (cur_name === 'about') {
		page_name.innerText = new_name;
	}
	else if (cur_name === 'contact') {
		page_name.innerText = new_name;
	}
	else {
		page_name.innerText = new_name;
	}
}

/**
 * ========================================================================================
 * These sets of Functions purely handle the image and 
 * photo manipulation on the photography pages.
 * ========================================================================================
 */


/**
 * Adds a listener to each gallery image that will load the gallery view
 * @param  {Object} event) {	let        gallery [description]
 * @return {[type]}        [description]
 */
$(".gall-img-wrap").click(function(event) {
	let gallery = {
		name : event.target.getAttribute('data-gallname');

	}
	open_gallery(gallery);
});

/**
 * This function will load the gallery view with images
 * and thumbnails. Thumbnails get inserted into a slider
 * with event listeners to change to the appropriate photo.
 * 1) Load info from JSON file associated with gallery object
 * @param  {Object} gal_set 		This is an object parameter with required info
 * @param  {string} gal_set.name  	Name of the gallery
 * @return {[type]}         [description]
 */
function open_gallery(gal_set) {
	let folder = base + '/photos/galleries/' + gal_set;
	let data = JSON.parse(gal_set.name)
}

/**
 * Add Coolio tooltips to each gallery image
 */

var tooltip = document.getElementById('tooltip');

window.onmousemove = function(event) {
	let x = event.clientX;
	let y = event.clientY;
	tooltip.style.top = (y + 20) + 'px';
	tooltip.style.left = (x + 20) + 'px';
}

function change_tooltip(gall) {
	tooltip.innerHTML = 
}