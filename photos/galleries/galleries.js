/**
 * @typedef GalleryImage
 * @type {Object}
 * @property {String} name A name for the image to display to the user
 * @property {String} alttext The text to place in the alt text attribute
 * @property {String} blurb A description of the image to display to the user
 * @property {String} filename The filename of the image to load
 * @property {Date} date The date the image was taken
 * @property {String} location Location data if available
 */

/**
 * @typedef Gallery
 * @type {Object}
 * @property {String} name The folder name of the Gallery
 * @property {boolean} avail A flag to turn on the gallery for public viewing
 * @property {String} display_name A short name to display to the user
 * @property {String} desc A description of the gallery to view from the frontend
 * @property {String} mainimg The filename of an image to display to the user before opening the gallery
 * @property {String} mobmainimg The filename of an image to display a mobile user before opening the gallery
 * @property {String} mainalt Alternate text used for the gallery thumbnail.
 * @property {Array<GalleryImage>} images The set of images to display
 */

/**
 * @typedef GallerySet
 * @type {Object}
 * @property {Array<Gallery>} galleries
 */

/**
 * @name template
 * @type {Gallery}
 */
const template = {
	"name" : "template",
	"avail": false,
	"display_name" : "Template",
	"desc" : "Description here is placed onto right cube face",
	"mainimg" : 'filename.jpg|png This file should be 350px BY 350px',
	"mobmainimg" : 'filename.jpg|png This file should be 300px BY 215px',
	"mainalt": "Alt text for the gallery image that shows on the cube or as a thumbnail",
	"images" : [
		{
			"name": "Bread",
			"alttext": "Alt text goes here.",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name blackWhite
 * @type {Gallery}
 */
const blackWhite = {
	"name" : "blackwhite",
	"avail": false,
	"display_name" : "Black and White Photos",
	"desc" : "What portfolio is complete without some photos done in black in white.<br><br>Click here to view the gallery.",
	"mainimg" : 'main',
	"mobmainimg" : 'main',
	"mainalt": "Front image for the black and white gallery.",
	"images" : [
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name design
 * @type {Gallery}
 */
const design = {
	"name" : "design",
	"avail": true,
	"display_name" : "Graphic Design",
	"desc" : "This is a collection of some of favorite designs I have created over the years.<br><br>Click here to view the gallery.",
	"mainimg" : 'uiux.svg',
	"mobmainimg" : 'uiux.svg',
	"mainalt": "Front image for the design gallery featuring the UI/UX image of a phone with hexagons on the screen.",
	"images" : [
		{
			"name": "UI / UX",
			"blurb": "I modified some designs I saw elsewhere into my portfolio color scheme. I used Adobe Illustrator to create the vector graphic",
			"filename": "uiux.svg",
			"alttext": "A simple UI/UX design with hexagons over a stylized mobile phone",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
	]
}

/**
 * @name food
 * @type {Gallery}
 * @desc
 */
const food = {
	"name" : "food",
	"avail": true,
	"display_name" : "Food Photography",
	"desc" : "I like to make food presentable enough for the camera and take photos of it before I eat it. When you spend so much time for a good meal it's nice to get cool pictures along with a full belly.<br><br>Click here to see more.",
	"mainimg" : 'main.jpg',
	"mobmainimg" : 'img2.jpg',
	"mainalt": "Front image for the food gallery featuring a loaf of bread.",
	"images" : [
		{
			"name": "Parsley",
			"blurb": "Parsley over a mirror",
			"filename": "img2.jpg",
			"alttext": "Parsley over a mirror",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Burger",
			"blurb": "One of my creations that took forever to make. It weighed 2.5lbs altogether and was fully loaded. The patty was part beef and part elk. As good as it looks it was pretty mediocre tasting.",
			"filename": "img3.jpg",
			"alttext": "giant burger on a blue plate",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread Loaf",
			"blurb": "Sometimes I bake bread",
			"filename": "img4.jpg",
			"alttext": "bread loaf on glass table outside",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Cinnamon Roll",
			"blurb": "This was part of a pinterest trick to bake a cinnamon roll inside of an orange peel. It was cool but the orange flavor was intense.",
			"filename": "img5.jpg",
			"alttext": "cinnamon roll in an orange peel",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Mushrooms",
			"blurb": "Mushrooms on a mirror",
			"filename": "img6.jpg",
			"alttext": "Mushrooms on a mirror",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Potatoes",
			"blurb": "Potatoes on a mirror",
			"filename": "img7.jpg",
			"alttext": "Potatoes on a black mirror",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name hobbies
 * @type {Gallery}
 */
const hobbies = {
	"name" : "hobbies",
	"avail": true,
	"display_name" : "Hobbies",
	"desc" : "Just a collection of photos of my favorite hobbies. I often enjoy the process of learning and making cooling things more than creating a finished good.<br><br>The journey is often more colorful than the destination.<br><br>Click here to view the gallery.",
	"mainimg" : 'woodmug.jpg',
	"mobmainimg" : 'woodmug.jpg',
	"mainalt": "Front image for the hobby gallery featuring a lathed wooden travel mug.",
	"images" : [
		{
			"name": "Wooden Travel Mug",
			"blurb": "This was a gift for a friend using a contigo travel mug and replacing the outside plastic layer with a thin wooden layer. That layer was made of several blocks glued together and then worked on a lathe to make it smooth and round before gluing the contigo insert inside it.",
			"filename": "woodmug.jpg",
			"alttext": "A modified contigo travel mug with a thin wooden exterior instead of plastic.",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
	]
}

/**
 * @name landscapes
 * @type {Gallery}
 */
const landscapes = {
	"name" : "landscapes",
	"avail": false,
	"display_name" : "Landscapes",
	"desc" : "Landscape photography is different from nature photography in that I try to take wide angle shots of beautiful areas.<br><br>Click here to view more.",
	"mainimg" : 'main',
	"mobmainimg" : 'main',
	"mainalt": "Front image for the landscape gallery.",
	"images" : [
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name macro
 * @type {Gallery}
 */
const macro = {
	"name" : "macro",
	"avail": true,
	"display_name" : "Macro Photography",
	"desc" : "Macro photography is all about making the smaller things visible and vivid. Here is a collection of photos in which I tried to get quality close up shots.<br><br>Click here to view the gallery.",
	"mainimg" : 'img1.png',
	"mobmainimg" : 'img1.png',
	"mainalt": "Front image for the macro gallery featuring a red dragonfly sitting on a car antenna.",
	"images" : [
		{
			"name": "Death Metal Dragonfly",
			"blurb": "This dragonfly was sitting on my car antenna one day.",
			"filename": "img1.png",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}
	]
}

/**
 * @name nature
 * @type {Gallery}
 */

const nature = {
	"name" : "nature",
	"avail": false,
	"display_name" : "Nature Photography",
	"desc" : "I like nature and here are some of my shots. Click here to view the gallery.",
	"mainimg" : 'main',
	"mobmainimg" : 'main',
	"mainalt": "Front image for the nature gallery.",
	"images" : [
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name urban
 * @type {Gallery}
 */
const urban = {
	"name" : "urban",
	"avail": false,
	"display_name" : "Urban Photography",
	"desc" : "Urban Photography is a new adventure of mine. I like the gritty and visceral look of it all.<br><br>Click here to view the gallery.",
	"mainimg" : 'main',
	"mobmainimg" : 'main',
	"mainalt": "Front image for the urban gallery.",
	"images" : [
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		},
		{
			"name": "Bread",
			"blurb": "This is a picture of a loaf of bread I took",
			"filename": "img1",
			"date": "2018-01-12T00:00:00.000Z",
			"location": "NULL"
		}

	]
}

/**
 * @name set
 * @type GallerySet
 */
const set = {
	"galleries": [
		food,
		hobbies,
		design,
		macro
	]
}