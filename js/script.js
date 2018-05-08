/**
 * Title: Geoff Groenendale - Portfolio
 * Author: Geoff Groenendale
 * Date: 5/7/2018
 * Description: This is a javascript file for primary
 * functions for the portfolio website. These functions
 * are unique to the portfolio site but this file references
 * the workhorse.js file that has several clerical functions.
 */

window.onload = function() {
	setup();
}

window.onresize = function() {

}

function setup() {
	load_workhorse();
	change_page_name();
}

function load_workhorse() {
	let tag = document.createElement('script');
	tag.src = '/js/workhorse.js';
	document.getElementById('scripts').appendChild(tag);
}

function change_page_name() {
	let cur_class = document.getElementsByTagName('html')[0].className;
	console.log(cur_class);
	let cur_name = cur_class.substring(cur_class.search("cur-page_"), cur_class.search(" "));
	cur_name = first_l_UP(cur_name);
	console.log(cur_name);
	let page_name = document.getElementById('cur-page');
	page_name.innerText = cur_name;
}