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
	else {
		page_name.innerText = new_name;
	}
	
}