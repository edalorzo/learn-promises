'use strict';

var p = new Promise((resolve,reject) => {
	console.log('Inside the resolver function');
	resolve();
});

p.then(res => {
	console.log('Insider the onFulfilled  handler');
});

console.log('This is the last line of the script');