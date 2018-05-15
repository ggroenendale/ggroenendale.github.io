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
let folio = '';
if (base == 'localhost') {
	folio = '/newfolio';
}
let cur_name = document.getElementsByTagName('html')[0].getAttribute('data-pagename');
let SWidth = window.innerWidth;

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
 */

/**
 * This Class borrowed from stackoverflow answer found at https://stackoverflow.com/a/39545306
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
 * 						Sidebar Functions
 * ========================================================================================
 * These functions handle some of the special elements
 * within the sidebar including the show function when
 * on mobile.
 * ========================================================================================
 */

$('#show-menu').click(function(){
	if (this.classList[0] == 'slide-in') {
		$(this)
		.removeClass('slide-in')
		.css({'left':'0px','transition':'0.5s'})
		$('#sidebar').css({'left':'-80%','transition':'0.5s','box-shadow':'unset'});
		$('html').css({'position':'unset','overflow':'unset'});
	}
	else {
		$(this)
		.addClass('slide-in')
		.css({'left':'calc(80% - 1px)','transition':'0.5s'});
		$('#sidebar').css({'box-shadow': '2px 0px 15px 1px rgba(0,0,0,0.5)','left':'0','transition':'0.5s'});
		$('html').css({'position':'fixed','overflow':'hidden'});
	}
});


/**
 * ========================================================================================
 * 						Responsive Functions
 * ========================================================================================
 * These functions aim to assist with some of the responsive
 * functions.
 * ========================================================================================
 */

/**
 * ========================================================================================
 * 						Photography Page Functions
 * ========================================================================================
 * These functions purely handle the image and 
 * photo manipulation on the photography pages.
 * ========================================================================================
 */

if ( cur_name == 'photography' ) {
	load_galleries();
}

function load_galleries() {
	let grid = document.getElementById('gall-container');
	let html_payload = '';
	let gallery = set.galleries;
	
	//Conditional on screen width 
	//Target for Mobile
	if (SWidth < 768) {  
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
	else if ((SWidth > 768) && (SWidth < 1200)) { 
		gallery.forEach( function(gallery){
			if(gallery.avail == true) {
				
			}
		});
		grid.innerHTML = html_payload;
	}
	//Target for Desktop
	else if ((SWidth > 1200) && (SWidth < 1600)) {  
		gallery.forEach( function(gallery){
			if(gallery.avail == true) {
				html_payload += `<div class="gall-block gall1" onmouseover="reveal_right(this)" onmouseout="reveal_norm(this)" data-gallname="${gallery.name}">`;
				html_payload +=	`<div class="cube">`;
				html_payload += `<div class="cube-face front">`;
				html_payload += `<div class="gall-img-wrap">`;
				html_payload += `<img class="gall-img" src="photos/galleries/${gallery.name}/${gallery.mainimg}">`;
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
				html_payload += `<div class="cube-face bottom"></div>`;
				html_payload += `</div>`;
				html_payload += `</div>`;
				grid.innerHTML = html_payload;
			}
		});
	}
	else {
		html_payload += `<p>There was an error loading galleries!</p>`;
	}
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
 * Adds a listener to each gallery image that will load the gallery view
 * @param  {Object} event) {	let        gallery [description]
 * @return {[type]}        [description]
 */
$(".gall-block").click(function(event) {
	let ctarget = event.target.classList;
	//console.log(event.target);
	let gname;
	if (SWidth < 768) {
		if ( ctarget[0].includes('gall-img')) {
			//console.log(event.target.parentNode.parentNode.getAttribute('data-gallname'));
			gname = event.target.parentNode.parentNode.getAttribute('data-gallname');
		}
		else {

		}
	}
	else if ((SWidth > 768) && (SWidth < 1200)) { 

	}
	else if ((SWidth > 1200) && (SWidth < 1600)) { 
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
 * All of the code below handles the movement of the gallery including the rotation
 * and loading the gallery and calculating theta and the radius.
 */

let viewer = document.getElementById('gall-viewer');
let content = document.getElementById('content');
let carousel = document.getElementById('carousel');
let selectedIndex = 0;
let radius;
let theta;
let gall_size;

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
									<img class="mgallery-img" src="${source}">
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
	}
	else if ((SWidth > 768) && (SWidth < 1200)) { 

	}
	else if ((SWidth > 1200) && (SWidth < 1600)) { 
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
if (( cur_name == 'photography' ) && (viewer.classList[0].includes('grid-content'))) {
	let swiper = new Swipe(document.getElementById('carousel'));
	swiper.onLeft(function(){
		selectedIndex++;
		rotateCarousel();
	});
	swiper.onRight(function(){
		selectedIndex--;
		rotateCarousel();
	});
	swiper.run();
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

if(document.fullscreenElement) {
	alert('Is Full screen');
}