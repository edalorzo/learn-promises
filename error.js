'use strict';

Promise.reject(Error('Bad news'))
	.then(res => {console.log('This never happens'); })
	.catch(err => { console.log('Something went wrong'); });