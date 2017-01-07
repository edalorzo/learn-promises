'use strict';

var fs = require('fs');

function readFile(filePath){
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (err, buff) => {
			if(err) {
				return reject(err);
			}
			return resolve(buff.toString());
		});
	});
}

var p = readFile(process.argv[2]);

p.then(data => { console.log("The data length is :" + data.length); });
p.then(console.log);



