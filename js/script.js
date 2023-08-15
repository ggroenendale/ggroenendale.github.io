/**
 * @file Geoff Groenendale - Portfolio
 * @since 5/7/2018
 * @author: Geoff Groenendale
 * @description This is a javascript file for primary functions for the portfolio website. These functions
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
 * 						Global Variables
 * ========================================================================================
 * These variables are used across the portfolio for various logic checks and display flags.
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
 * @name base
 * @type {String}
 * @desc Just like in the html files specify a base variable that holds the domain and hostname
 */
let base = document.location.hostname;

/**
 * @name curname
 * @type {String}
 * @desc Grabs the data-pagename attribute from the html element to be used as a logic check to separate functions
 * based on the current portfolio page that is loaded.
 */
let cur_name = document.getElementsByTagName('html')[0].getAttribute('data-pagename');

/**
 * @name SWidth
 * @type {number}
 * @desc Contains the pixel value of window.innerWidth
 */
let SWidth = window.innerWidth;

/**
 * @name MD
 * @type {MobileDetect}
 * @desc Used to determine the type of device being used based on the User Agent value. <br><br>
 * Uses the open source Mobile Detect JavaScript port found at {@link https://github.com/hgoebl/mobile-detect.js/}
 */
let MD = new MobileDetect(window.navigator.userAgent);

/**
 * @name orientationcheck
 * @desc Uses the Screen.orientation property to determine landscape vs portrait
 * @returns {String}
 */
function orientationcheck() {
	if (screen.orientation.type === 'portrait-primary' ) {
		return 'port';
	}
	else if (screen.orientation.type === 'landscape-primary') {
		return 'land';
	}
	else {
		return 'port';
	}
}

/**
 * @name ORI
 * @type {String}
 * @desc Contains the string value returned from the orientationcheck function, used in later functions
 */
let ORI = orientationcheck();

/**
 * @function
 * @name orientation_callback
 * @desc This function is fired by the event listener waiting for an orientation change.
 */
function orientation_callback(){
	ORI = orientationcheck();
	console.log(`Changed orientation to ${ORI}`);
	sidebar_slide();
	window.scrollTo(0,1);
}

/**
 * @event orientationchange
 * @desc
 */
window.addEventListener('orientationchange', orientation_callback,true);

/**
 * @event onresize
 * @param {UIEvent} event
 * @desc An event listener that fires when the window is resized
 */
window.onresize = function(event) {

}

/**
 * @function
 * @name setup
 * @desc A function that fires when the window is loading.
 */
function setup() {
	//change_page_name();
}

/**
 * @event onload
 * @param {Event} event
 * @desc When the window loads this fires off the setup function
 */
window.onload = function(event) {
	console.log(event)
	setup();
}

/**
 * @function
 * @name change_page_name
 * @desc I'm not sure why this function is. Maybe I wanted to dynamically change pages? This targets an h2 element
 * in the sidebar and would update its innerText when it is fired and depends on the cur_name and data-pagename
 * values/variables.
 */
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
 * @class
 * @name Swipe
 * @desc This Class borrowed from stackoverflow answer found at https://stackoverflow.com/a/39545306
 */
class Swipe {
	/**
	 * @constructor
	 * @desc
	 * @param element
	 */
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }

	/**
	 * @method
	 * @desc
	 * @param callback
	 * @returns {Swipe}
	 */
    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }

	/**
	 * @method
	 * @desc
	 * @param callback
	 * @returns {Swipe}
	 */
    onRight(callback) {
        this.onRight = callback;
        return this;
    }

	/**
	 * @method
	 * @desc
	 * @param callback
	 * @returns {Swipe}
	 */
    onUp(callback) {
        this.onUp = callback;
        return this;
    }

	/**
	 * @method
	 * @desc
	 * @param callback
	 * @returns {Swipe}
	 */
    onDown(callback) {
        this.onDown = callback;
        return this;
    }

	/**
	 * @method
	 * @desc
	 * @param {TouchEvent} event
	 */
    handleTouchMove(event) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;

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

	/**
	 * @method
	 * @desc
	 */
    run() {
        $(this).on('touchmove', function(event) {
            this.handleTouchMove(event);
        }.bind(this), false);
    }
}

/**
 * @desc This function enables the sidebar to resize depending on orientation or device
 * and is the way I got around the chrome mobile address bar. The link for this
 * solution comes from a forum post on stackoverflow https://stackoverflow.com/a/40156488.
 *
 * I had to modify the jquery function slightly to allow for the address bar in chrome.
 * @param {String} element
 */
function calcVH(element) {
	let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	$(`#${element}`).innerHeight( height );
}

/**
 * @function
 * @param {JQueryStatic | jQuery | HTMLElement} $
 * @desc This fires when the window is resized or the orientation is changed. It then calls
 * the calcVH function which takes the string element and updates its inner height.
 */
(function($) {
	calcVH('sidebar');
	$(window).on('orientationchange resize', function() {
		calcVH('sidebar');
	});
})(jQuery);

/**
 *
 *
 * @desc
 */
$(function() {
	if ((viewer) && (viewer.classList[0].includes('grid-content'))) {
		console.log('Change swipe setting when gallery open');
	}
	else {
		sidebar_slide();
	}
})

/**
 * @function
 * @name sidebar_slide
 * @desc
 * @return
 *
 */
function sidebar_slide() {
	if (!viewer || viewer.classList[0].includes('hidden-gall')) {
		if (MD.phone()) {
			let sideswipe = new Swipe('#wrapper');
			if(ORI === 'port') {
				$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
				$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
				$('html').css({'position':'unset','overflow':'unset'});
				sideswipe.onLeft(function(){
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
					$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
					$('html').css({'position':'unset','overflow':'unset'});
				});
				sideswipe.onRight(function(){
					$('#show-menu').addClass('slide-in').css({'left':'calc(80% - 1px)','transition':'0.5s'});
					$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
					$('html').css({'position':'fixed','overflow':'hidden'});
				});
			}
			else if (ORI === 'land') {
				$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
				$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
				$('html').css({'position':'unset','overflow':'unset'});
				sideswipe.onLeft(function(){
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
					$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
					$('html').css({'position':'unset','overflow':'unset'});
				});
				sideswipe.onRight(function(){
					$('#show-menu').addClass('slide-in').css({'left':'calc(50% - 1px)','transition':'0.5s'});
					$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
					$('html').css({'position':'fixed','overflow':'hidden'});
				});

			}
			else {
				console.log('Could not detect orientation')
				$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
				$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
				$('html').css({'position':'unset','overflow':'unset'});
				sideswipe.onLeft(function(){
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
					$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
					$('html').css({'position':'unset','overflow':'unset'});
				});
				sideswipe.onRight(function(){
					$('#show-menu').addClass('slide-in').css({'left':'calc(80% - 1px)','transition':'0.5s'});
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
				if(ORI === 'port') {
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
					$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
					$('html').css({'position':'unset','overflow':'unset'});
				}
				else if (ORI === 'land') {
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
					$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
					$('html').css({'position':'unset','overflow':'unset'});
				}
				else {
					$('#show-menu').removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
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

/**
 * @desc Toggles the blurb block for the offered service on the index page
 */
$('.service-block').on('click', function() {
	if (MD.phone()) {
		$(this).children(".serv-blurb").toggle(300);
	}
	else if (MD.tablet()) {
		$(this).children('.serv-blurb').toggle(300);
	}
});


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
 * @desc
 *
 */
$('#show-menu').on('click', function(){
	if (this.classList[0] === 'slide-in') {
		if (ORI === 'port') {
			$(this).removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});
		}
		else if (ORI === 'land') {
			$(this).removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-50%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});	
		}
		else {
			console.log('Could not detect orientation')
			$(this).removeClass('slide-in').css({'left':'0px','transition':'0.5s'})
			$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
			$('html').css({'position':'unset','overflow':'unset'});
		}
	}
	else {
		if (ORI === 'port') {
			$(this).addClass('slide-in').css({'left':'calc(80% - 1px)','transition':'0.5s'});
			$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
			$('html').css({'position':'fixed','overflow':'hidden'});
		}
		else if (ORI === 'land') {
			$(this).addClass('slide-in').css({'left':'calc(50% - 1px)','transition':'0.5s'});
			$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
			$('html').css({'position':'fixed','overflow':'hidden'});	
		}
		else {
			console.log('Could not detect orientation')
			$(this).addClass('slide-in').css({'left':'calc(80% - 1px)','transition':'0.5s'});
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

/**
 * If on the Photography page run the load_galleries() function
 */
$(() => {
	if ( cur_name === 'photography' ) {
		load_galleries();
	}
});

/**
 * @function
 * @desc Checks if the browser is on the photography page and that the device is not a phone or tablet
 */
window.onresize = function() {
	if (cur_name === 'photography') {
		if(!MD.phone() && !MD.tablet()){
			adjust_cubes();
		}
	}
}

/**
 * @function
 * @name setup_mobile_galleries
 * @desc Setup the galleries for the mobile view.
 * @param {Gallery[]} galleries The array of gallery data
 */
function setup_mobile_galleries(galleries) {
	let grid = document.getElementById('gall-container');
	let html_payload = '';

	// For each gallery make an html payload
	galleries.forEach( function(gallery){
		if(gallery.avail === true) {
			html_payload += `<div class="gall-block gall1" onclick="gallery_click(this)" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
			html_payload += `<div class="gall-img-wrap">`;
			html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mobmainimg}" alt="${gallery.mainalt}">`;
			html_payload += `<div class="gall-info">`;
			html_payload += `<h3 class="gall-header">${gallery.display_name}</h3>`;
			html_payload += `</div>`;
			html_payload += `</div>`;
			html_payload += `</div>`;
		}
	});

	// Insert all the gallery html into the grid
	grid.innerHTML = html_payload;
}

/**
 * @function
 * @name setup_tablet_galleries
 * @desc Setup the galleries for the tablet view.
 * @param {Gallery[]} galleries The array of gallery data
 */
function setup_tablet_galleries(galleries) {
	let grid = document.getElementById('gall-container');
	let html_payload = '';

	// For each gallery make an html payload
	galleries.forEach( function(gallery){
		if(gallery.avail === true) {
			html_payload += `<div class="gall-block gall1" onclick="gallery_click(this)" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
			html_payload += `<div class="gall-img-wrap">`;
			html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mobmainimg}" alt="${gallery.mainalt}">`;
			html_payload += `<div class="gall-info">`;
			html_payload += `<h3 class="gall-header">${gallery.display_name}</h3>`;
			html_payload += `</div>`;
			html_payload += `</div>`;
			html_payload += `</div>`;
		}
	});

	// Insert all the gallery html into the grid
	grid.innerHTML = html_payload;
}

/**
 * @function
 * @name setup_desktop_galleries
 * @desc Setup the galleries for the desktop view.
 * @param {Gallery[]} galleries
 */
function setup_desktop_galleries(galleries) {
	let grid = document.getElementById('gall-container');
	let html_payload = '';

	// For each gallery make an html payload
	galleries.forEach( function(gallery){
		if(gallery.avail === true) {
			html_payload += `<div class="gall-block gall1" onclick="gallery_click(this)" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
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

	// Insert all the gallery html into the grid
	grid.innerHTML = html_payload;
}


/**
 * @function
 * @name load_galleries
 * @desc Retrieve gallery data then calls setup function depending on device flag.
 */
function load_galleries() {
	// Retrieve the gallery data
	let galleries = set.galleries;
	
	//Conditional on screen width 
	// Target for Mobile
	if (MD.phone()) {
		setup_mobile_galleries(galleries);
	}
	//Target for tablets
	else if (MD.tablet()) { 
		setup_tablet_galleries(galleries);
	}
	//Target for Desktop
	else if (!MD.phone() && !MD.tablet()) {
		setup_desktop_galleries(galleries);
		adjust_cubes();
	}
	else {
		$('#gall-container').innerHTML = `<p>There was an error loading galleries!</p>`;
	}
}

/**
 * @function
 * @name adjust_cubes
 * @desc This code was required in order to run specific math calculations that could not be handled through css.
 * For instance calculating a perspective value that is based on the width of the area and the ratio of the available
 * width to the desired perspective
 * @return
 *
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
	
	//4)Load all the styles into the new sheet element
	//sheet.innerHTML = "#content{border: 2px solid yellow;}";
	// console.log(sty_mu);
	sheet.innerHTML = sty_mu;
	
	//5)Load the new element onto the page
	document.body.appendChild(sheet);
}

let cube = document.querySelector('.cube')
let currentClass = '';

/**
 * @function
 * @name changeSide
 * @desc
 */
function changeSide() {
	let showClass = 'show-';
	if ( currentClass ) {
		cube.classList.remove( currentClass);
	}
	cube.classList.add(showClass);
	currentClass = showClass;
}

/**
 * @function
 * @name reveal_right
 * @desc Reveal the right side of the cube
 * @param {HTMLElement} gallery_cube The gallery cube HTML element that wraps the cube and face elements
 */
function reveal_right(gallery_cube) {
	$(gallery_cube).children(".cube").addClass('show-right')
}

/**
 * @function
 * @name reveal_norm
 * @desc Returns the cube back to the normal side of the cube
 * @param {HTMLElement} gallery_cube The gallery cube HTML element that wraps the cube and face elements
 */
function reveal_norm(gallery_cube) {
	$(gallery_cube).children(".cube").removeClass('show-right');
}

/**
 * @function gallery_click
 * @desc After the click event load the gallery view for the clicked gallery
 * @param {HTMLElement} gallery_block
 */
function gallery_click(gallery_block) {
	console.log("Gallery has been clicked")
	// Grab the name of the gallery
	let gallery_name = gallery_block.closest('.gall-block').getAttribute('data-gallname');

	open_gallery(gallery_name)
}

// /** I think all of this can be removed after adding the gallery click function to the onclick event in the element
//  * @desc Adds a listener to each gallery image that will load the gallery view
//  */
// $(".gall-block").on('click', function (){
// 	console.log("Test the click")
// });
// $(".cube").on('click', function (){
// 	console.log("Test the click")
// });
// $(".cube-face.right").on('click', function (){
// 	console.log("Test the click")
// });

/**
 * ========================================================================================
 * 						Photo Gallery Functions
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

/**
 * @name viewer
 * @desc This HTML Div contains the gallery carousel and gallery control buttons
 * @type {HTMLElement}
 */
let viewer = document.getElementById('gall-viewer');

/**
 * @name content
 * @desc This HTML Div is the main Content Div inside the Wrapper that is not the sidebar
 * @type {HTMLElement}
 */
let content = document.getElementById('content');

/**
 * @name carousel
 * @desc This HTML Div is the Carousel that will contain the actual photos
 * @type {HTMLElement}
 */
let carousel = document.getElementById('carousel');

/**
 * @name gswipe
 * @desc Instance of {@link Swipe} class
 * @type {Swipe}
 */
let gswipe;
if (viewer) {
	gswipe = new Swipe(viewer);
}

/**
 * @name selectedIndex
 * @type {number}
 */
let selectedIndex = 0;

/**
 * @name radius
 * @type {number}
 */
let radius;

/**
 *
 */
let theta;

/**
 * @function
 * @name open_mobile_gallery
 * @desc	Opens the mobile gallery view
 * @param 	{Gallery}	gallery
 */
function open_mobile_gallery(gallery) {
	// Get the size of the gallery
	let gallery_size = gallery.images.length;

	// Load each image in the array
	gallery.images.forEach(function(img, i){
		// Create the image source
		let source = `photos/galleries/${gallery.name}/${img.filename}`;

		// On successful load from source create an image element
		// On failure create an empty div.
		$.get(source).done(function(){
			$('#carousel').append(`
				<div id="img${i+1}" class="carousel-cell">
					<img class="mgallery-img" src="${source}" alt="${img.alttext}">
				</div>`);
		}).fail(function(err){
			$('#carousel').append(`
				<div id="img${i+1}" data-num="${i}" class="carousel-cell">
					<div class="no-img">Error loading Image</div>
				</div>`);
		});
	});

	// // Position the cells after the images are loaded.
	// position_cell(gallery_size);

	//
	if (viewer.classList[0].includes('grid-content')) {
		sidebar_slide();
	}
}

/**
 * @function
 * @name open_midsize_gallery
 * @desc	Opens the midsize gallery view
 * @param 	{Gallery}	gallery
 */
function open_midsize_gallery(gallery) {
	// Get the size of the gallery
	let gallery_size = gallery.images.length;

	// Load each image
	gallery.images.forEach(function(img,i){
		// Create the image source
		let source = `photos/galleries/${gallery.name}/${img.filename}`;

		// On successful load from source create an image element
		// On failure create an empty div.
		$.get(source).done(function(){
			$('#carousel').append(`
				<div id="img${i+1}" class="carousel-cell">
					<img class="tgallery-img" src="${source}">
				</div>`);
		}).fail(function(err){
			$('#carousel').append(`
				<div id="img${i+1}" data-num="${i}" class="carousel-cell">
					<div class="no-img">Error loading Image</div>
				</div>`);
		});
	});

	// // Position the cells after the images are loaded.
	// position_cell(gallery_size);

	//
	if (viewer.classList[0].includes('grid-content')) {
		sidebar_slide();
	}
}

/**
 * @function
 * @name open_large_gallery
 * @desc	Opens the large gallery view
 * @param 	{Gallery}	gallery
 */
function open_large_gallery(gallery) {
	// Get the size of the gallery
	let gallery_size = gallery.images.length;

	// Determine the angle theta for each image based on the gallery size
	let theta = 360 / gallery_size;

	// Determine the cellsize based on the carousel width
	let cellsize = $('#carousel').width();
	console.log(cellsize)

	// Determine the radius with math
	let radius = Math.round(( cellsize / 2 ) / Math.tan( Math.PI / gallery_size ));

	// Load each image
	gallery.images.forEach(function(img,i){
		// Create the image source
		let source = `photos/galleries/${gallery.name}/${img.filename}`;

		// On successful load from source create an image element
		// On failure create an empty div.
		$.get(source).done(function(){
			// Determine the  angle of the indexed image
			let cell_angle = theta * i;

			// Create the image element and its wrapper
			let imgWrap = $('<div>', {id: `img${i+1}`, "class": 'carousel-cell', "data-num": i, "data-name": img.name})
				.css('transform', `rotateY(${cell_angle}deg) translateZ(${radius}px)`)
			let imgElem = $('<img>', {"class": 'gallery-img', "src": source, "alt": img.alttext})

			// Add the image to the carousel
			$('#carousel').append(imgWrap.append(imgElem));
		}).fail(function(err){
			$('#carousel').append(`
				<div id="img${i+1}" data-num="${i}" class="carousel-cell">
					<div class="no-img"></div>
				</div>`);
		});
	});

	// Set some data values in the carousel
	$('#carousel').attr('data-current-index', '0')
		.attr('data-image-theta', theta)
		.attr('data-gallery-size', gallery_size)
		.attr('data-carousel-radius', radius)
		.attr('data-gallery-name', gallery.name);

	// Fire the rotate carousel function to begin
	rotateCarousel()

	$('#img-name').text(gallery.images[0].name)
	$('#img-desc').text(gallery.images[0].blurb)

	// Get the height of the gallery and use it to determine the position of the controls and the
	// image metadata
	let gallery_height = $('#gall-viewer').height()
	$('#img-meta').css({top: gallery_height/4})
	$('#controls').css({top: gallery_height/3.2})

	//
	if (viewer.classList[0].includes('grid-content')) {
		sidebar_slide();
	}

	document.onkeydown = function(event) {
		keyboard_gallery(event)
	}
}

/**
 * @function
 * @desc 	This function will load the gallery view with images and thumbnails. Thumbnails get inserted into a slider
 * 			with event listeners to change to the appropriate photo.
 * 				1) Load info from JSON file associated with gallery object
 * @param  {string} 	gallery_name 	Name of the gallery
 */
function open_gallery(gallery_name) {
	// Grab all the galleries from the data file
	let galleries = set.galleries;

	//Reveal the gallery viewer
	content.classList.remove('grid-content');
	content.classList.add('hidden-gall');
	viewer.classList.add('grid-content');
	viewer.classList.remove('hidden-gall');

	let gallery = galleries.find(gallery => (gallery.name === gallery_name) ? gallery : null);

	//Reveal the images
	if (SWidth < 768 ) {
		open_mobile_gallery(gallery);
	}
	else if ((SWidth >= 768) && (SWidth <= 1366)) {
		open_midsize_gallery(gallery);
	}
	else if ((SWidth > 1366) && (SWidth < 1600)) {
		open_large_gallery(gallery);
	}
	else if (SWidth > 1600){
		// FIXME: This is why the carousel doesn't work for large screens
		open_large_gallery(gallery);
		console.log("Here's your problem")
		console.log(`Device width is ${SWidth}`)
	}
}

/**
 * @function
 * @name rotateCarousel
 * @desc Rotates the photo carousel based on the direction string value and theta and index variables
 * @param {String}	direction	Can be default, left, or right
 */
function rotateCarousel(direction="default") {
	// Grab the gallery size from the carousel
	let gallery_size = Number($('#carousel').attr('data-gallery-size'))

	// Initialize current index as 0, allows for a default value and no direction
	let current_index = 0;

	// If there is a direction, update the current index value
	if (direction === "right") {
		// Grab the current index data attribute in the carousel
		current_index = Number($('#carousel').attr('data-current-index')) + 1
	}
	else if (direction === "left") {
		// Grab the current index data attribute in the carousel
		current_index= Number($('#carousel').attr('data-current-index')) - 1
	}

	// Grab the image theta value stored in the carousel attribute
	let theta = Number($('#carousel').attr('data-image-theta'))

	// Grab the radius value that determines the size of the image relative to the
	let radius = Number($('#carousel').attr('data-carousel-radius'))

	// Determine what the current angle of the carousel should be based on the current index
	let angle = theta * current_index * -1;

	// Set the carousel attributes
	$('#carousel').attr('data-current-index', `${current_index}`)
		.css({"transform": `translateZ(-${radius}px) rotateY(${angle}deg`})

	// Update the image meta
	let image_index = current_index % gallery_size;
	update_image_meta(image_index)
}

/**
 * @function
 * @name update_image_meta
 * @param {number} index
 */
function update_image_meta(index) {
	let gallery_name = $(`#carousel`).attr('data-gallery-name')
	let current_gallery = set.galleries.find(gallery => (gallery.name === gallery_name) ? gallery : null);
	let image = current_gallery.images.at(index)

	console.log($(`.carousel-cell[data-num='${index}']`).attr('data-name'))
	$('#img-name').text(image.name)
	$('#img-desc').text(image.blurb)
}

/**
 * @function
 * @name position_cell
 * @desc Positions the cells
 * @param {number}	gallery_size
 */
function position_cell(gallery_size) {
	// Arrange pictures
	let theta = 360 / gallery_size;

	//
	let cellsize = carousel.offsetWidth;

	//
	radius = Math.round(( cellsize / 2 ) / Math.tan( Math.PI / gallery_size ));

	//
	let cells = document.getElementsByClassName('carousel-cell');

	$('#carousel').addClass('testclass');
	// 	.each(function(index, element) {
	// 	console.log(index)
	// 	console.log(this)
	// 	console.log("Carousel cell load")
	// 	let cell_angle = 111;
	// 	this.css('transform', `rotateY(${cell_angle}deg) translateZ(${radius}px)`)
	// });


	//
	for (let i=0; i < cells.length; i++) {
		let cell = cells[i];
		let cell_angle = theta * i;

		cell.style.transform = `rotateY(${cell_angle}deg) translateZ(${radius}px)`;
	}

	//
	rotateCarousel();
}

/**
 * @function
 * @name gallery_closer
 * @param {MouseEvent} event
 */
function gallery_closer(event) {
	if ((viewer) && (viewer.classList[0].includes('grid-content'))) {
		// Swap styles to normal
		viewer.classList.remove('grid-content');
		viewer.classList.add('hidden-gall');
		content.classList.add('grid-content');
		content.classList.remove('hidden-gall');

		// Empty the carousel
		carousel.innerHTML = '';
		sidebar_slide();
	}
}

/**
 * @event
 */
$('.gall-closer').on('click', gallery_closer);

/**
 * @event
 */
$('#show-menu').on('click', gallery_closer);

/**
 * @desc Adds event listener to the left arrow to fire off carousel function
 */
$('#photo-prev').on('click', function(){
	console.log("photo prev")
	selectedIndex--;
	rotateCarousel("left");
});

/**
 * @desc Adds event listener to the right arrow to fire off carousel function
 */
$('#photo-next').on('click', function(){
	console.log("photo next")
	selectedIndex++;
	rotateCarousel("right");
});


/**
 * Add event listeners for swiping on mobile
 */

if (viewer) {
	gswipe.onLeft(function(){
		selectedIndex++;
		rotateCarousel("left");
	});
	gswipe.onRight(function(){
		selectedIndex--;
		rotateCarousel("right");
	});
	gswipe.run();
}

/**
 * @function
 * @name keyboard_gallery
 * @param {KeyboardEvent} event
 */
function keyboard_gallery(event) {
	if (event.key === "ArrowRight") {
		console.log("Advancing carousel right")
		rotateCarousel("right")
	}
	else if (event.key === "ArrowLeft") {
		console.log("Advancing carousel left")
		rotateCarousel("left")
	}
}

/**
 * Add Coolio tooltips to each gallery image
 * @type HTMLElement
 */
let tooltip = document.getElementById('tooltip');

/**
 *
 * @param event
 */
window.onmousemove = function(event) {
	let x = event.clientX;
	let y = event.clientY;
	if (tooltip) {
		tooltip.style.top = (y + 20) + 'px';
		tooltip.style.left = (x + 20) + 'px';
	}
}

// /**
//  *
//  * @param gall
//  */
// function change_tooltip(gall) {
// 	//tooltip.innerHTML =
// 	//console.log('bracket_fix') ;
// }
//
// /**
//  *
//  */
// function hide_tooltip() {
//
// }

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


/**
 * @function
 * @name skill_tooltip
 * @desc 	This function is for showing and positioning a skill tooltip. It fires if a mouseenter event
 * 			happens on a progress bubble.
 * @param {MouseEvent} event
 */
function skill_tooltip(event) {

	let progtip = $(event.target).children('.abouttool')[0];
	let tip_h = $(event.target).children('.abouttool').outerHeight();
	let limit = window.innerHeight;

	// This onmousemove event listener loads for the specific prog-bubble
	window.onmousemove = function(event) {
		// Grab the x and y of the client mouse
		let x = event.clientX;
		let y = event.clientY;

		// Position the tooltip based on client position and some math
		if (progtip) {
			if ( y + tip_h + 15 < limit) {
				progtip.style.top = (y + 20) + 'px';
				progtip.style.borderRadius = '0 10px 10px 10px'
			}
			else {
				progtip.style.top = (y - 10 - tip_h) + 'px';
				progtip.style.borderRadius = '10px 10px 10px 0';
			}
			// Regardless of the current position state, make it 20 additional pixels to the left
			progtip.style.left = (x + 20) + 'px';
		}
	}
}

/**
 *
 */
$('.prog-bubble').on('mouseenter', skill_tooltip)

/**
 *
 * @param id_from
 * @param id_contents
 * @param id_to
 */
function createFunction(id_from, id_contents, id_to) {

	//Container is just a wrapper for the element we want to point towards
	let create_container = '<div id="container" style="position: relative;">';

	//Wrap the element in the wrapper so as not to affect the state of the element
	$( "#"+id_to).wrap(function() {
		return create_container;
	});

	//New element (can be modified to dynamically position as well)
	let create_element = '<div id="'+id_from+'" style="display:block; position: absolute;  left: 350px; top: 100px;"> '+id_contents+' </div>';

	//SVG that will not appear until points towards the element that we want is given
	let create_svg = '<span style="position: absolute;"> <svg width="1000" height="1000" >    <defs>    <marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">        <path d="M2,1 L2,10 L10,6 L2,2" style="fill:red;" />      </marker>    </defs>    <path id="test" d="" style="stroke:red; stroke-width: 1.25px; fill: none; marker-end: url(#arrow);"/>  </svg> </span>';

	//Add elements arround the original element
	$( "#"+id_to).before(create_element);
	$( "#"+id_to).before(create_svg);
	$("#"+id_to).after("</div>");

	//Create a style for the element
	let att = document.createAttribute("style");   // Create a "style" Atttribute
	att.value = "display:block; position: absolute; outline:5px solid black;";
	document.getElementById(id_to).setAttributeNode(att);

	//Give the locations of the two elements
	let test1 = document.getElementById(id_from);
	let test2 = document.getElementById(id_to);
	let test1_loc = test1.getBoundingClientRect();
	let test2_loc = test2.getBoundingClientRect();

	//Input into SVG
	document.getElementById("test").setAttribute("d", "M"+(test1_loc.right - (test1_loc.right - test1_loc.left)) + "," + (test1_loc.top - (test1_loc.bottom - test1_loc.top))+" L"+ (test2_loc.left + (test2_loc.right - test2_loc.left)) + "," + (test2_loc.top - (test2_loc.bottom - test2_loc.top)));

}

//function(ID of new element,Contents of new element, element to point towards)
$("#run_button").on( "click", function() {
	new createFunction("test2","This is a test","test1");
});

//Display current HTML
$("#result").on( "click", function() {
	alert(document.getElementsByTagName("body")[0].outerHTML);
});
