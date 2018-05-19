/**
 * This was part of a huge effort to keep my google maps API secret
 * so that other developers couldnt steal it and potentially use up
 * my API limits or potentially charge my account. In order to protect
 * my API key I would need a client/server setup, a node.js app, or own
 * the domain so I can limit IP addresses on googles api console. 
 */
let GOOGLE_MAP_KEY = config.G_api_key;

let search_loc;
// As soon as the window is loaded the setup tag will load. This is similar to jQuery's document.ready
window.onload = setup();

function setup() {
	console.log("Running initial setups...");
	load_google();	
}

// This function is fired as soon as the window loads the setup function. The purpose of this function is to
// create the google maps tag. 
function load_google() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAP_KEY + '&libraries=places&callback=initMap';
	document.body.appendChild(script);
}

// This function will load all of the markers onto the map using the data from Yelp results.

function createMarker(bar) {
    var placeLoc = bar.coordinates;
    let placeLoc_lat = bar.coordinates.latitude;
    console.log(placeLoc_lat);
    let placeLoc_lng = bar.coordinates.longitude;
    console.log(placeLoc_lng);
    var marker = new google.maps.Marker({
		map: map,
		position: {lat: placeLoc_lat, lng: placeLoc_lng}
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.setContent(bar.name);
		infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
    	infowindow.close();
    });

    google.maps.event.addListener(marker, 'click', function() {
    	
    }); 
}


// This function will pull the various options for the yelp search from the browser
function yp_options_f() {
	let loc_to_search = document.getElementById('origin-input').value;

	let search_lat = search_loc.geometry.location.lat();
	let search_lng = search_loc.geometry.location.lng();

	let in_radius = document.getElementById('rad-input').value;
	console.log(in_radius);
	let radius = Math.floor(in_radius * 1609.34); // convert radius in miles to meters - this value cannot go over 40,000 meters
	if(radius > 40000) {
		radius = 40000;
	}

	let dollar_Selector = document.getElementById('dollar-sel');
	let dollar_ch = new Array();
	$.each($("input[name='dollars']:checked"), function() {
		dollar_ch.push($(this).val());
	});
	// Pack up the total variable with all of the arguements
	let total = "?";
	// Start with the search area
	// if(loc_to_search) {
	// 	total += 'loc=' + loc_to_search + "&";
	// }
	// else {
	// 	return false;
	// }
	if(search_lat && search_lng) {
		total += 'loc=false&lat=' + search_lat +'&lng=' + search_lng + '&';
	}

	total += 'term=bars&';

	if(in_radius){
		total += 'rad=' + radius + "&";
	}
	if(dollar_Selector) {
		total += 'dol=';
		for(i = 0; i < dollar_ch.length; i++) {
			if(i < dollar_ch.length - 1) {
				total += dollar_ch[i] + ",";
			}
			else {
				total += dollar_ch[i];
			}
		}
	}

	return total;
}


//This function is fired when the button is clicked to search for the area
function search_for_loc() {
	map.setCenter(search_loc.geometry.location);

	let yp_options = yp_options_f();
	
	if(yp_options === false) {
		console.log('Please enter a location in the origin to begin!');
		return;
	}

	let yp_url = config.yelp_php_endpoint;

	console.log(yp_url + yp_options);

	const xhr = new XMLHttpRequest;
	const url = yp_url + yp_options;

	xhr.responseType = 'text';
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			let res_obj = JSON.parse(xhr.response);
			process_results(res_obj);
		}
	}
	xhr.open('GET', url);
	xhr.send();
}

function process_results(data) {
	console.log(data);
	//let list_bars = document.getElementById('bar-list')
	for(i = 0; i < data.businesses.length; i++) {
		$('#bar-list').append(`<h3>${data.businesses[i].name}</h3>`)

		//create a marker for each business
		createMarker(data.businesses[i])
		console.log(data.businesses[i].name);
	}
}

/**
 * Maps Project Code Start
 * 
 */
var map;
var service;
var infowindow;

function initMap() {
	var def_loc = {lat: 45.730924, lng: -122.636980};
	map = new google.maps.Map(
	document.getElementById('map'), {
		center: def_loc,
		zoom: 12
		}
	);

	infowindow = new google.maps.InfoWindow();

	new AutocompleteDirectionsHandler(map);
}



function AutocompleteDirectionsHandler(map) {
	this.map = map;
	this.originPlaceId = null;
	this.destinationPlaceId = null;
	this.travelMode = 'WALKING';
	var originInput = document.getElementById('origin-input');
	var destinationInput = document.getElementById('destination-input');
	this.directionsService = new google.maps.DirectionsService;
	this.directionsDisplay = new google.maps.DirectionsRenderer;
	this.directionsDisplay.setMap(map);

	var originAutocomplete = new google.maps.places.Autocomplete(
	    originInput);

	this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
}

// AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
// 	var radioButton = document.getElementById(id);
// 	var me = this;
// 	radioButton.addEventListener('click', function() {
// 		me.travelMode = mode;
// 		me.route();
// 	});
// };

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
	var me = this;
	autocomplete.bindTo('bounds', this.map);
	autocomplete.addListener('place_changed', function() {
		var place = autocomplete.getPlace();
		if (!place.place_id) {
			window.console.log("Please select an option from the dropdown list.");
			return;
			}
		search_loc = place;
		if (mode === 'ORIG') {
		me.originPlaceId = place.place_id;
		} 
		else {
		me.destinationPlaceId = place.place_id;
		}
		me.route();
	});
};

AutocompleteDirectionsHandler.prototype.route = function() {
	if (!this.originPlaceId || !this.destinationPlaceId) {
		return;
		}
	var me = this;

	this.directionsService.route(
		{
			origin: {'placeId': this.originPlaceId},
			destination: {'placeId': this.destinationPlaceId},
			travelMode: this.travelMode
		}, 
		function(response, status) {
		if (status === 'OK') {
			me.directionsDisplay.setDirections(response);
		} 
		else {
			window.console.log('Directions request failed due to ' + status);
		}
	});
};

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i=0; i< results.length; i++) {
			var place = results[i];
			createMarker(results[i]);
		}
	}
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: 'WALKING'
	}, function(response, status) {
		if (status === 'OK') {
		directionsDisplay.setDirections(response);
		} else {
		window.console.log('Directions request failed due to ' + status);
		}
	});
}