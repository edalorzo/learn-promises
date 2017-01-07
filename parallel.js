'use strict';

var fs = require('fs');

function deserialize(line){
	var fields = line.split(',');
	return {name: fields[0], balance: Number(fields[1])};
}

function getCards(card) {	
	return new Promise((resolve, reject) => {
		fs.readFile('./accounts.txt', {encoding: 'utf8'}, (err,data) => {
			if(err) {
				return reject(err);
			}
			resolve(data.split('\n')
						.map(deserialize)
						.filter(account => account.name === card)
			);
		});
	});
}

var accounts = ['Checking Account','Travel Rewards Card','Big Box Retail Card'];

Promise.all(accounts.map(getCards))	
	.then(accounts => accounts.reduce((acc,next) => acc.concat(next), []))
	.then(accounts => accounts.reduce((acc,next) => acc + next.balance, 0))	
	.then(balance => { console.log('The balance of your accounts is %s', balance);});