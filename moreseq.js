'use strict';

var fs = require('fs'),
	path = require('path');

var products = ['sku-1','sku-2','sku-3'];

function sequence(array, callback){
	return array.reduce(
		(promise, item) => promise.then(() => callback(item)), 
		Promise.resolve()
	);
}

function getInfo(sku) {

	console.log('Requested info for %s', sku);
	
	var filePath = path.join(__dirname, 'skus', sku + '.txt');
	var utf8 = {encoding:'utf8'};

	return new Promise((resolve, reject) => {
		
		fs.readFile(filePath, utf8, (err, data) => {
			if(err){
				return reject(err);
			}
			return resolve(data);
		});
	});
}

sequence(products, sku => getInfo(sku).then(console.log));