'use strict';

function scaleImage(width, height, image) {
	console.log('Scaling image to %d %d', width, height);
	return '[' + image + ']';
}

function watermark(text, image) {
	console.log('Watermarking image with %s', text);
	return '{' + image + ' ' + text + '}';
}

function grayscale(image) {
	console.log('Converting image to grayscale');
	return '<' + image + '>';
}

function processImage(image) {

	var customScale = img => scaleImage(300, 450, img);
	var customWatermark = img => watermark('The Real Estate Company', img);

	return Promise.resolve(image)
		.then(customScale)
		.then(customWatermark)
		.then(grayscale);
}

processImage(':-)').then(console.log);