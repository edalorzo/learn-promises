'use strict';

var fs = require('fs'),
	path = require('path');

var products = ['sku-1','sku-2','sku-3'];

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

products.forEach(sku => {
	getInfo(sku).then(console.log);
});

console.log('Finished program');