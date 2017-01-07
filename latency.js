'use strict';

var entries = require('./blog.json');

function fetchData() {
	return new Promise(resolve => setTimeout(() => resolve(entries), 5000));
}

function fetchFromCache() {
	return Promise.resolve(entries);
}


function getData () {
	var timeAllowed = 500;
	var deadline = Date.now() + timeAllowed;

	var freshData = fetchData();
	var cachedData = fetchFromCache().then(data => {
		return new Promise(resolve => {
			var timeRemaining = Math.max(deadline - Date.now(), 0);
			setTimeout(() => resolve(data),timeRemaining);
		});
	});

	var failure = new Promise((resolve, reject) => {
		setTimeout(
			() => reject(new Error('Unable to fetch data in alloted time')), 
			timeAllowed
		);
	});

	return Promise.race([freshData, cachedData, failure]);
}


getData().then(console.log).catch(console.log);

