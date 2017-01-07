'use strict';

var Bluebird = require('bluebird');

var promise = Bluebird.resolve(Promise.resolve('Hello World!'));

promise.then(console.log).then( () => {
	console.log('Pending? %s', promise.isPending());
	console.log('Fulfilled? %s', promise.isFulfilled());
	console.log('Rejected? %s', promise.isRejected());
});

console.log('Main program just finished');