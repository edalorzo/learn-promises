'use strict';

Promise.resolve('ta-da!')
	.then(result => {
		console.log('Step 2 received ' + result);
		return 'Greetings from step 2';
	}).then(result => {
		console.log('Step 3 received ' + result);
	}).then(result => {
		console.log('Step 4 received ' +  result);
		return Promise.resolve('fulfilled value');
	}).then(result => {
		console.log('Step 5 received ' + result);
	});