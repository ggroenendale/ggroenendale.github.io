/**
 * Title: Geoff Groenendale - Portfolio
 * Author: Geoff Groenendale
 * Date: 5/7/2018
 * Description: This is a javascript file for primary
 * functions for the portfolio website. These functions
 * are unique to the portfolio site but this file references
 * the workhorse.js file that has several clerical functions.
 * 
 *  - Big section letters are generated on this website using the "nancyj" style
 *    Sub headings are made using the "thick" style
 *    http://www.messletters.com/en/big-text/
 *    
 */

/**
 * ========================================================================================
 * 						Mobile UI Functions
 * ========================================================================================
 * These functions handle some of the special movements on mobile.
 * Below is a class for swipe that allows special callbacks based on
 * A swipe motion.
 * ========================================================================================

									 .88888.  dP          dP                dP          
									d8'   `88 88          88                88          
									88        88 .d8888b. 88d888b. .d8888b. 88 .d8888b. 
									88   YP88 88 88'  `88 88'  `88 88'  `88 88 Y8ooooo. 
									Y8.   .88 88 88.  .88 88.  .88 88.  .88 88       88 
									 `88888'  dP `88888P' 88Y8888' `88888P8 dP `88888P' 
 * ========================================================================================
 */

/**
 * Just like in the html files specify a base variable that
 * holds the domain and hostname
 * @type {string}
 */
let base = document.location.hostname;
let folio = '';
if (base == 'localhost') {
	folio = '/newfolio';
}
let cur_name = document.getElementsByTagName('html')[0].getAttribute('data-pagename');
let SWidth = window.innerWidth;
let MD = new MobileDetect(window.navigator.userAgent);
let ORI = orientationcheck();

function orientationcheck() {
	let ori_theta = window.orientation;
	if (ori_theta == 0 ) {
		orient = 'port';
	}
	else if (ori_theta == 90) {
		orient = 'land';
	}
	else {
		orient = 'desk';
	}
	return orient;
}

window.addEventListener('orientationchange', function(){
	ORI = orientationcheck();
	console.log(`Changed orientation to ${ORI}`);
	sidebar_slide();
	window.scrollTo(0,1);
},true);

window.onload = function() {
	setup();
}

window.onresize = function() {

}

function setup() {
	//change_page_name();
}

function change_page_name() {
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
 * 						Mobile UI Functions
 * ========================================================================================
 * These functions handle some of the special movements on mobile.
 * Below is a class for swipe that allows special callbacks based on
 * A swipe motion.
 * ========================================================================================
 * 
 *							8888ba.88ba           dP       oo dP             dP     dP dP 
 *							88  `8b  `8b          88          88             88     88 88 
 *							88   88   88 .d8888b. 88d888b. dP 88 .d8888b.    88     88 88 
 *							88   88   88 88'  `88 88'  `88 88 88 88ooood8    88     88 88 
 *							88   88   88 88.  .88 88.  .88 88 88 88.  ...    Y8.   .8P 88 
 *							dP   dP   dP `88888P' 88Y8888' dP dP `88888P'    `Y88888P' dP
 * ========================================================================================
 */

/**
 * ========================================================================================
 * This Class borrowed from stackoverflow answer found at https://stackoverflow.com/a/39545306
 * ========================================================================================
 */
class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }

    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }

    onRight(callback) {
        this.onRight = callback;
        return this;
    }

    onUp(callback) {
        this.onUp = callback;
        return this;
    }

    onDown(callback) {
        this.onDown = callback;
        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt);
        }.bind(this), false);
    }
}

/**
 * ========================================================================================
 * This function enables the sidebar to resize depending on orientation or device
 * and is the way I got around the chrome mobile address bar. The link for this
 * solution comes from a forum post on stackoverflow https://stackoverflow.com/a/40156488.
 * I had to modify the jquery function slightly to allow for the address bar in chrome.
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 * ========================================================================================
 */
function calcVH(element) {
	let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	//alert(height);
	$(`#${element}`).innerHeight( height );
}
(function($) {
	calcVH('sidebar');
	$(window).on('orientationchange resize', function() {
		calcVH('sidebar');
	});
})(jQuery);

/**
 * ========================================================================================
 * [description]
 * @param  {[type]} ) {	if         ((viewer) && (viewer.classList[0].includes('grid-content'))) {		console.log('Change swipe setting when gallery open');	}	else {		sidebar_slide();	}} [description]
 * @return {[type]}   [description]
 * ========================================================================================
 */
$(document).ready(function() {
	if ((viewer) && (viewer.classList[0].includes('grid-content'))) {
		console.log('Change swipe setting when gallery open');
	}
	else {
		sidebar_slide();
	}
})

/**
 * ========================================================================================
 * [sidebar_slide description]
 * @return {[type]} [description]
 * ========================================================================================
 */
function sidebar_slide(prov) {
	if (!viewer || viewer.classList[0].includes('hidden-gall')) {
		if (MD.phone()) {
			let sideswipe = new Swipe('#wrapper');
			//console.log('Sidebar slide');
				//console.log('actually its thisone is on');
				if(ORI == 'port') {
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
						sideswipe.onLeft(function(){
							$('#show-menu')
							.removeClass('slide-in')
							.css({'left':'0px','transition':'0.5s'})
							$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
							$('html').css({'position':'unset','overflow':'unset'});
						});
						sideswipe.onRight(function(){
							$('#show-menu')
							.addClass('slide-in')
							.css({'left':'calc(80% - 1px)','transition':'0.5s'});
							$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
							$('html').css({'position':'fixed','overflow':'hidden'});
						});
				}
				else if (ORI == 'land') {
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
						sideswipe.onLeft(function(){
							$('#show-menu')
							.removeClass('slide-in')
							.css({'left':'0px','transition':'0.5s'})
							$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
							$('html').css({'position':'unset','overflow':'unset'});
						});
						sideswipe.onRight(function(){
							$('#show-menu')
							.addClass('slide-in')
							.css({'left':'calc(50% - 1px)','transition':'0.5s'});
							$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
							$('html').css({'position':'fixed','overflow':'hidden'});	
						});

				}
				else {
					console.log('Could not detect orientation')
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
						sideswipe.onLeft(function(){
							$('#show-menu')
							.removeClass('slide-in')
							.css({'left':'0px','transition':'0.5s'})
							$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
							$('html').css({'position':'unset','overflow':'unset'});
						});
						sideswipe.onRight(function(){
							$('#show-menu')
							.addClass('slide-in')
							.css({'left':'calc(80% - 1px)','transition':'0.5s'});
							$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
							$('html').css({'position':'fixed','overflow':'hidden'});
						});
				}
			sideswipe.run();
		}
	}
	else if (viewer.classList[0].includes('grid-content')){
		if (MD.phone()) {
			let sideswipe = new Swipe('#wrapper');
			//console.log('reset here');
			sideswipe.onRight(function(){
				//console.log('Setting new function');
				if(ORI == 'port') {
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
				}
				else if (ORI == 'land') {
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
				}
				else {
					$('#show-menu')
						.removeClass('slide-in')
						.css({'left':'0px','transition':'0.5s'})
						$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
						$('html').css({'position':'unset','overflow':'unset'});
				}
			});
			sideswipe.onLeft(function(){ 
				console.log('turn off');
			});
			sideswipe.run();
		}
	}
}

$('.service-block').on('click', function() {
	if (MD.phone()) {
		$(this).find('.serv-blurb').toggle(300);
	}
	else if (MD.tablet()) {
		$(this).find('.serv-blurb').toggle(300);
	}
});

/* All of this here was trying to figure out why blocks wouldn't expand on an iPad tablet.
   The problem actually had to do with screens that were exactly 768 pixels wide which
   required a >= comparator in the conditional statement. In doing this I also discovered'
   the "touchstart" event and utilizing it with pure javaScript.
*/

// let servblock = document.getElementById('serv1');
// 	if (!servblock == null) {
// 	servblock.ontouchstart = function(){
// 		console.log(servblock.childNodes[5]);
// 		servblock.childNodes[5].style.display = 'block';
// 	}
// }

// $('.service-block').bind('touchstart', function(){
// 	if (SWidth < 768) {
// 		$(this).find('.serv-blurb').toggle(300);
// 	}
// 	else if (SWidth >= 768 && SWidth <= 1366) {
// 		$(this).find('.serv-blurb').toggle(300);
// 	}
// });

// $('.service-block').bind('tap', function(){
// 	if (SWidth < 768) {
// 		$(this).find('.serv-blurb').toggle(300);
// 	}
// 	else if (SWidth >= 768 && SWidth <= 1366) {
// 		$(this).find('.serv-blurb').toggle(300);
// 	}
// });

/**
 * ========================================================================================
 * 						Sidebar Functions
 * ========================================================================================
 * These functions handle some of the special elements
 * within the sidebar including the show function when
 * on mobile.
 * ========================================================================================

								.d88888b  oo       dP          dP                         
								88.    "'          88          88                         
								`Y88888b. dP .d888b88 .d8888b. 88d888b. .d8888b. 88d888b. 
								      `8b 88 88'  `88 88ooood8 88'  `88 88'  `88 88'  `88 
								d8'   .8P 88 88.  .88 88.  ... 88.  .88 88.  .88 88       
								 Y88888P  dP `88888P8 `88888P' 88Y8888' `88888P8 dP       
 * ========================================================================================
 */

/**
 * ========================================================================================
 * [description]
 * @param  {[type]} ){	if (this.classList[0] [description]
 * @return {[type]}        [description]
 * ========================================================================================
 */
$('#show-menu').click(function(){
	if (this.classList[0] == 'slide-in') {
		if (ORI == 'port') {
			$(this)
			.removeClass('slide-in')
			.css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});
		}
		else if (ORI == 'land') {
			$(this)
			.removeClass('slide-in')
			.css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});	
		}
		else {
			console.log('Could not detect orientation')
			$(this)
			.removeClass('slide-in')
			.css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});
		}
	}
	else {
		if (ORI == 'port') {
			$(this)
			.addClass('slide-in')
			.css({'left':'calc(80% - 1px)','transition':'0.5s'});
			$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
			$('html').css({'position':'fixed','overflow':'hidden'});
		}
		else if (ORI == 'land') {
			$(this)
			.addClass('slide-in')
			.css({'left':'calc(50% - 1px)','transition':'0.5s'});
			$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
			$('html').css({'position':'fixed','overflow':'hidden'});	
		}
		else {
			console.log('Could not detect orientation')
			$(this)
			.addClass('slide-in')
			.css({'left':'calc(80% - 1px)','transition':'0.5s'});
			$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
			$('html').css({'position':'fixed','overflow':'hidden'});
		}
	}
});


/**
 * ========================================================================================
 * 						Responsive Functions
 * ========================================================================================
 * These functions aim to assist with some of the responsive
 * functions.
 * ========================================================================================

	 888888ba                                                        oo                   
	 88    `8b                                                                            
	a88aaaa8P' .d8888b. .d8888b. 88d888b. .d8888b. 88d888b. .d8888b. dP dP   .dP .d8888b. 
	 88   `8b. 88ooood8 Y8ooooo. 88'  `88 88'  `88 88'  `88 Y8ooooo. 88 88   d8' 88ooood8 
	 88     88 88.  ...       88 88.  .88 88.  .88 88    88       88 88 88 .88'  88.  ... 
	 dP     dP `88888P' `88888P' 88Y888P' `88888P' dP    dP `88888P' dP 8888P'   `88888P' 
 * ============================= 88 =======================================================
	                             dP                                                       
 */

 
 window.onresize = function() {
	if (cur_name == 'photography') {
		if(!MD.phone() && !MD.tablet()){
			adjust_cubes();
		}
	}
}


/**
 * ========================================================================================
 * 						Photography Page Functions
 * ========================================================================================
 * These functions purely handle the image and 
 * photo manipulation on the photography pages.
 * ========================================================================================

 888888ba  dP                  dP                                                dP                
 88    `8b 88                  88                                                88                
a88aaaa8P' 88d888b. .d8888b. d8888P .d8888b. .d8888b. 88d888b. .d8888b. 88d888b. 88d888b. dP    dP 
 88        88'  `88 88'  `88   88   88'  `88 88'  `88 88'  `88 88'  `88 88'  `88 88'  `88 88    88 
 88        88    88 88.  .88   88   88.  .88 88.  .88 88       88.  .88 88.  .88 88    88 88.  .88 
 dP        dP    dP `88888P'   dP   `88888P' `8888P88 dP       `88888P8 88Y888P' dP    dP `8888P88 
* =============================================== .88 ================= 88 =================== .88 
                                              d8888P                    dP                 d8888P  
 */

if ( cur_name == 'photography' ) {
	load_galleries();
}

/**
 * ========================================================================================
 * [load_galleries description]
 * @return {[type]} [description]
 * ========================================================================================
 */
function load_galleries() {
	let grid = document.getElementById('gall-container');
	let html_payload = '';
	let gallery = set.galleries;

	// console.log(MD.phone());
	// console.log(MD.is('DesktopMode'));
	
	//Conditional on screen width 
	//Target for Mobile
	if (MD.phone()) {  
		gallery.forEach( function(gallery){
			if(gallery.avail == true) {
				html_payload += `<div class="gall-block gall1" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
				html_payload += `<div class="gall-img-wrap">`;
				html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mobmainimg}">`;
				html_payload += `<div class="gall-info">`;
				html_payload += `<h3 class="gall-header">${gallery.display_name}</h3>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
			}
		});
		grid.innerHTML = html_payload;
	}
	//Target for tablets
	else if (MD.tablet()) { 
		gallery.forEach( function(gallery){
			if(gallery.avail == true) {
				html_payload += `<div class="gall-block gall1" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
				html_payload += `<div class="gall-img-wrap">`;
				html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mobmainimg}" alt="${gallery.mainalt}">`;
				html_payload += `<div class="gall-info">`;
				html_payload += `<h3 class="gall-header">${gallery.display_name}</h3>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
			}
		});
		grid.innerHTML = html_payload;
	}
	//Target for Desktop
	else if (!MD.phone() && !MD.tablet()) {  
		gallery.forEach( function(gallery){
			if(gallery.avail == true) {
				html_payload += `<div class="gall-block gall1" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
				html_payload +=	`<div class="cube">`;
				html_payload += `<div class="cube-face front">`;
				html_payload += `<div class="gall-img-wrap">`;
				html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mainimg}" alt="${gallery.mainalt}">`;
				html_payload += `</div>`;
				html_payload += `</div>`;
				html_payload += `<div class="cube-face right">`;
				html_payload += `<div class="gall-info">`;
				html_payload += `<h3 class="gall-header">${gallery.display_name}</h3>`;
				html_payload += `<p class="gall-blurb">${gallery.desc}</p>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
				html_payload += `<div class="cube-face back"></div>`;
				html_payload += `<div class="cube-face left"></div>`;
				html_payload += `<div class="cube-face top"></div>`;
				html_payload += `<div class="cubeface bottom"></div>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
			}
		});
		grid.innerHTML = html_payload;
		adjust_cubes();
	}
	else {
		html_payload += `<p>There was an error loading galleries!</p>`;
		grid.innerHTML = html_payload;
	}
}

/**
 * ========================================================================================
 * This code was required in order to run specific math calculations
 * that could not be handled through css. For instance calculating a
 * perspective value that is based on the width of the area
 * and the ratio of the available width to the desired perspective
 * @return {[type]} [description]
 * ========================================================================================
 */
function adjust_cubes() {
	//Run code to perfectly space the cube elements
	//1) Get the width of the gallery wrapper and use it to space and size the cubes
	//	 also grab the border width to make things dynamic
	let grid_area_w = document.getElementById('gall-wrapper').offsetWidth;
	let border_width_px = $('.cube-face').css("border-top-width");
	let border_width = border_width_px.substring(0,1);
	// console.log(`The gallery wrapper is ${grid_area_w}px wide`);

	//2) Put the 'jsresp' style element into a variable 
	//   if it doesnt exist add it to the document.
	let sheet 
	if ( document.getElementById('jsresp')) {
		sheet = document.getElementById('jsresp');
		sheet.innerHTML = '';
	}
	else {
		sheet  = document.createElement('style');
		sheet.id= "jsresp";
	}
	let sty_mu = '';

	//3)Change The width and height of every .gall-container grid cell, 
	//  .gall-block, .cube, .cube-face
	//    3a) .gall-container { grid-template-columns, grid-column-gap, grid-row-gap}
	//    sty_mu += `\n`;
	let col_wid 	= Math.round((grid_area_w * 0.9)/3);
	let col_width   = col_wid + (border_width * 2);
	let col_gap		= Math.round((grid_area_w - (col_width * 3)) / 2);
	sty_mu += `#gall-container { \n`;
	sty_mu += `		grid-template-columns: ${col_width}px ${col_width}px ${col_width}px; \n`;
	sty_mu += `		grid-column-gap: ${col_gap}px;\n`;
	sty_mu += `		grid-row-gap: ${Math.round(col_width / 3)}px;\n`;
	sty_mu += `}\n\n`;

	//    3b) .gall-block {width(350px), height(350px), perspective(1050px)}
	sty_mu += `.gall-block { \n`;
	sty_mu += `		width: ${col_width}px;\n`;
	sty_mu += `		height: ${col_width}px;\n`;
	sty_mu += `		perspective: ${col_width * 3}px;\n`;
	sty_mu += `}\n\n`;

	//    3c) .cube {transform translateZ(-175px)}
	sty_mu += `.cube { \n`;
	sty_mu += `		transform: translateZ(${Math.round(col_width * 0.5) * -1}px);\n`;
	sty_mu += `}\n\n`;

	//    3d) .cube-face {width(350px) height(350px)}
	sty_mu += `.cube-face { \n`;
	sty_mu += `		width: ${col_width}px;\n`;
	sty_mu += `		height: ${col_width}px;\n`;
	sty_mu += `}\n\n`;

	//    3e) .cube-face each side 
	//    	.cube-face.front 	{ transform: rotateY(   0deg) translateZ(175px); } 
	// 		.cube-face.right 	{ transform: rotateY(  90deg) translateZ(175px); }
	// 		.cube-face.left 	{ transform: rotateY( -90deg) translateZ(175px); }
	// 		.cube-face.back 	{ transform: rotateY( 180deg) translateZ(175px); }
	// 		.cube-face.top 		{ transform: rotateX(  90deg) translateZ(175px); }
	sty_mu += `.cube-face.front	{ transform: rotateY(  0deg) translateZ(${Math.round(col_width * 0.5)}px);}\n`;
	sty_mu += `.cube-face.right	{ transform: rotateY( 90deg) translateZ(${Math.round(col_width * 0.5)}px);}\n`;
	sty_mu += `.cube-face.left 	{ transform: rotateY(-90deg) translateZ(${Math.round(col_width * 0.5)}px);}\n`;
	sty_mu += `.cube-face.back 	{ transform: rotateY(180deg) translateZ(${Math.round(col_width * 0.5)}px);}\n`;
	sty_mu += `.cube-face.top		{ transform: rotateX( 90deg) translateZ(${Math.round(col_width * 0.5)}px);}\n\n`;
	
	//    3f) .cube-face each side show
	//    	.cube.show-front 	{ transform: translateZ(-175px) rotateY(    0deg); }
	// 		.cube.show-right 	{ transform: translateZ(-175px) rotateY(  -90deg); }
	// 		.cube.show-back 	{ transform: translateZ(-175px) rotateY( -180deg); }
	// 		.cube.show-left 	{ transform: translateZ(-175px) rotateY(   90deg); }
	// 		.cube.show-top 		{ transform: translateZ(-175px) rotateY(  -90deg); }
	// 		.cube.show-bottom 	{ transform: translateZ(-175px) rotateY(   90deg); }
	sty_mu += `.cube.show-front	{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateY(0deg);}\n`;
	sty_mu += `.cube.show-right	{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateY(-90deg);}\n`;
	sty_mu += `.cube.show-back 	{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateY(-180deg);}\n`;
	sty_mu += `.cube.show-left 	{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateY(90deg);}\n`;
	sty_mu += `.cube.show-top		{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateX(-90deg);}\n`;
	sty_mu += `.cube.show-bottom	{ transform: translateZ(${Math.round(col_width * 0.5) * -1}px) rotateX(90deg);}\n\n`;
	
	//    3g) .cubeface.bottom {width(200px) height(200px) translate(315px)
	//        left(75px) box-shadow(0px 0px 100px 50px rgba(0,0,0,0.2))}
	let b_width = Math.round(col_width * (200/350));
	let b_left 	= Math.round((col_width - b_width) / 2);
	let b_shad	= Math.round((col_width) * (100/350));
	let b_stre	= Math.round((col_width) * (50/350));
	sty_mu += `.cubeface.bottom { \n`;
	sty_mu += `		width: ${b_width}px;\n`;
	sty_mu += `		height: ${b_width}px;\n`;
	sty_mu += `		transform: rotateX(-90deg) translateZ(${Math.round(col_width * (315/175/2))}px);\n`;
	sty_mu += `		left: ${b_left}px;\n`;
	sty_mu += `		box-shadow: 0px 0px ${b_shad}px ${b_stre}px rgba(0,0,0,0.2);\n`;
	sty_mu += `}\n\n`;
	
	//    3h) .gall-img-wrap {width(350px) height(350px)
	sty_mu += `.gall-img-wrap { \n`;
	sty_mu += `		width: ${col_wid}px;\n`;
	sty_mu += `		height: ${col_wid}px;\n`;
	sty_mu += `}\n\n`;
	
	//    3i) .gall-info {width(350px) height(350px)
	sty_mu += `.gall-info { \n`;
	sty_mu += `		width: ${col_wid}px;\n`;
	sty_mu += `		height: ${col_wid}px;\n`;
	sty_mu += `}\n\n`;
	
	//4)Load all of the styles into the new sheet element
	//sheet.innerHTML = "#content{border: 2px solid yellow;}";
	// console.log(sty_mu);
	sheet.innerHTML = sty_mu;
	
	//5)Load the new element onto the page
	document.body.appendChild(sheet);
}

let cube = document.querySelector('.cube')
let currentClass = '';

function changeSide() {
	let showClass = 'show-';
	if ( currentClass ) {
		cube.classList.remove( currentClass);
	}
	cube.classList.add(showClass);
	currentClass = showClass;
}

function reveal_right(block) {
	block.childNodes[0].classList.add('show-right');
}

function reveal_norm(block) {
	block.childNodes[0].classList.remove('show-right');
}

/**
 * ========================================================================================
 * Adds a listener to each gallery image that will load the gallery view
 * @param  {Object} event) {	let        gallery [description]
 * @return {[type]}        [description]
 * ========================================================================================
 */
$(".gall-block").click(function(event) {
	let ctarget = event.target.classList;
	//console.log(event.target);
	let gname;
	if (MD.phone()) {
		if ( ctarget[0].includes('gall-img')) {
			//console.log(event.target.parentNode.parentNode.getAttribute('data-gallname'));
			gname = event.target.parentNode.parentNode.getAttribute('data-gallname');
		}
		else {

		}
	}
	else if (MD.tablet()) {
		if ( ctarget[0].includes('gall-img')) {
			//console.log(event.target.parentNode.parentNode.getAttribute('data-gallname'));
			gname = event.target.parentNode.parentNode.getAttribute('data-gallname');
		}
		else if ( ctarget[0].includes('gall-block')) {
			//console.log(event.target.getAttribute('data-gallname'))
			gname = event.target.getAttribute('data-gallname');
		}
	}
	else if (!MD.tablet() && !MD.phone()) { 
		if ( ctarget[0].includes('gall-info')) {
			//console.log(event.target.parentNode.parentNode.parentNode.getAttribute('data-gallname'));
			gname = event.target.parentNode.parentNode.parentNode.getAttribute('data-gallname');
		}
		else if ( ctarget[0].includes('gall-block')) {
			//console.log(event.target.getAttribute('data-gallname'))
			gname = event.target.getAttribute('data-gallname');
		}
	}
	else {

	}
	if (gname != null) {
		let gallery = {
			name : gname
		}
		open_gallery(gallery);
	}
	
});

/**
 * ========================================================================================
 * 						Photography Page Functions
 * ========================================================================================
 * All of the code below handles the movement of the gallery including the rotation
 * and loading the gallery and calculating theta and the radius.
 * ========================================================================================

 888888ba  dP                  dP                .88888.           dP dP                            
 88    `8b 88                  88               d8'   `88          88 88                            
a88aaaa8P' 88d888b. .d8888b. d8888P .d8888b.    88        .d8888b. 88 88 .d8888b. 88d888b. dP    dP 
 88        88'  `88 88'  `88   88   88'  `88    88   YP88 88'  `88 88 88 88ooood8 88'  `88 88    88 
 88        88    88 88.  .88   88   88.  .88    Y8.   .88 88.  .88 88 88 88.  ... 88       88.  .88 
 dP        dP    dP `88888P'   dP   `88888P'     `88888'  `88888P8 dP dP `88888P' dP       `8888P88 
 * ============================================================================================ .88 
                                                                                            d8888P  
 */


let viewer = document.getElementById('gall-viewer');
let content = document.getElementById('content');
let carousel = document.getElementById('carousel');
let gswipe;
if (viewer) {
	gswipe = new Swipe(viewer);
}
let selectedIndex = 0;
let radius;
let theta;
let gall_size;

/**
 * [rotateCarousel description]
 * @return {[type]} [description]
 */
function rotateCarousel() {
	let angle = theta * selectedIndex * -1;
	$('#carousel').css({"transform": `translateZ(-${radius}px) rotateY(${angle}deg`})
	//console.log(`I rotated ${angle} degrees my theta is ${theta} my index is ${selectedIndex}`);
}

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
	//console.log('opening gallery ' + gal_set.name);
	let galleries = set.galleries;
	let gallery = gal_set.name;
	//Reveal the gallery viewer
	content.classList.remove('grid-content');
	content.classList.add('hidden-gall');
	viewer.classList.add('grid-content');
	viewer.classList.remove('hidden-gall');
	//Reveal the images
	if (SWidth < 768 ) {
		galleries.forEach(function(gall){
			if (gall.name == gallery) {
				gall_size = gall.images.length;
				gall.images.forEach(function(img,i){
					let source = `photos/galleries/${gallery}/${img.filename}`;
					$.get(source)
						.done(function(){
							$('#carousel').append(`
								<div id="img${i+1}" class="carousel-cell">
									<img class="mgallery-img" src="${source}" alt="${img.alttext}">
								</div
								`);
							position_cell(i);
						})
						.fail(function(err){
							$('#carousel').append(`
								<div id="img${i+1}" data-num="${i}" class="carousel-cell">
									<div class="no-img"></div>
								</div>
							`);
							position_cell(i);
						});
				});
			}
		});
		if (viewer.classList[0].includes('grid-content')) {
			sidebar_slide();
		}
	}
	else if ((SWidth >= 768) && (SWidth <= 1366)) { 
		galleries.forEach(function(gall){
			if (gall.name == gallery) {
				gall_size = gall.images.length;
				gall.images.forEach(function(img,i){
					let source = `photos/galleries/${gallery}/${img.filename}`;
					$.get(source)
						.done(function(){
							$('#carousel').append(`
								<div id="img${i+1}" class="carousel-cell">
									<img class="tgallery-img" src="${source}">
								</div>
								`);
							position_cell(i);
						})
						.fail(function(err){
							$('#carousel').append(`
								<div id="img${i+1}" data-num="${i}" class="carousel-cell">
									<div class="no-img"></div>
								</div>
							`);
							position_cell(i);
						});
				});
			}
		});
	}
	else if ((SWidth > 1366) && (SWidth < 1600)) { 
		galleries.forEach(function(gall){
			if (gall.name == gallery) {
				gall_size = gall.images.length;
				gall.images.forEach(function(img,i){
					let source = `photos/galleries/${gallery}/${img.filename}`;
					$.get(source)
						.done(function(){
							$('#carousel').append(`
								<div id="img${i+1}" class="carousel-cell">
									<img class="gallery-img" src="${source}">
								</div>
								`);
							position_cell(i);
						})
						.fail(function(err){
							$('#carousel').append(`
								<div id="img${i+1}" data-num="${i}" class="carousel-cell">
									<div class="no-img"></div>
								</div>
							`);
							position_cell(i);
						});
				});
			}
		});
	}
}

function position_cell(it) {
	//Arrange pictures
	theta = 360 / gall_size;
	let cellsize = carousel.offsetWidth;
	radius = Math.round(( cellsize / 2 ) / Math.tan( Math.PI / gall_size ));
	let cells = document.getElementsByClassName('carousel-cell');
	for (let i=0; i < cells.length; i++) {
		let cell = cells[i];
		let cell_angle = theta * i;
		cell.style.transform = `rotateY(${cell_angle}deg) translateZ(${radius}px)`;
	}
	//let style = window.getComputedStyle($(''))
	rotateCarousel();
}

$('.gall-closer').click(function(){
	//Swap styles to normal
	viewer.classList.remove('grid-content');
	viewer.classList.add('hidden-gall');
	content.classList.add('grid-content');
	content.classList.remove('hidden-gall');
	//empty the carousel
	carousel.innerHTML = '';
	sidebar_slide();
});

$('#show-menu').click(function(){
	if ((viewer) && (viewer.classList[0].includes('grid-content'))) {
		//Swap styles to normal
		viewer.classList.remove('grid-content');
		viewer.classList.add('hidden-gall');
		content.classList.add('grid-content');
		content.classList.remove('hidden-gall');
		//empty the carousel
		carousel.innerHTML = '';
		sidebar_slide();
	}
});

$('#photo-prev').click(function(){
	selectedIndex--;
	rotateCarousel();
});


$('#photo-next').click(function(){
	selectedIndex++;
	rotateCarousel();
});


/**
 * Add event listeners for swiping on mobile
 */

if (viewer) {
	gswipe.onLeft(function(){
		selectedIndex++;
		rotateCarousel();
	});
	gswipe.onRight(function(){
		selectedIndex--;
		rotateCarousel();
	});
	gswipe.run();
}

/**
 * Add Coolio tooltips to each gallery image
 */

var tooltip = document.getElementById('tooltip');

window.onmousemove = function(event) {
	let x = event.clientX;
	let y = event.clientY;
	if (tooltip) {
		tooltip.style.top = (y + 20) + 'px';
		tooltip.style.left = (x + 20) + 'px';
	}
}

function change_tooltip(gall) {
	//tooltip.innerHTML =
	//console.log('bracket_fix') ;
}

function hide_tooltip() {

}

/**
 * ========================================================================================
 * 						About Page Functions
 * ========================================================================================
 * All of the code below handles some of the functions on the about page including 
 * the custom tooltips with more details
 * ========================================================================================

											 .d888888  dP                           dP   
											d8'    88  88                           88   
											88aaaaa88a 88d888b. .d8888b. dP    dP d8888P 
											88     88  88'  `88 88'  `88 88    88   88   
											88     88  88.  .88 88.  .88 88.  .88   88   
											88     88  88Y8888' `88888P' `88888P'   dP
 * ========================================================================================
 */

$('.prog-bubble').mouseenter( function() {
	let progtip = $(this).find('.abouttool')[0];
	let tip_h = $(this).find('.abouttool').outerHeight();
	let limit = window.innerHeight;
	window.onmousemove = function(event) {
		//console.log(event.pageX + ', ' + event.pageY + 'client' + event.clientX + ', ' + event.clientY + 'screen height' + window.innerHeight);
		let x = event.clientX;
		let y = event.clientY;
		if (progtip) {
			( y + tip_h + 15 < limit)
			? (progtip.style.top = ((y + 20) + 'px'),
			  progtip.style.borderRadius = '0 10px 10px 10px')
			: ( progtip.style.top = ((y - 10 - tip_h) + 'px'),
			  progtip.style.borderRadius = '10px 10px 10px 0');
			progtip.style.left = 
				(x + 20) + 'px';
		}
	}
})