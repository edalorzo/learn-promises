'use strict';

function bad(url){
	var image;
	image.src = url;
	return new Promise((resolve, reject) => {
		image.onload = resolve;
		image.onerror = reject;
	});
}

function good(url){
	return new Promise((resolve, reject) => {
		var image;
		image.src = url;
		image.onload = resolve;
		image.onerror = reject;
	});
}

//bad();
good('http://localhost:8080/profile.img').catch(console.log);