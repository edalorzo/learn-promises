'use strict';

var user = {
	authenticated: false,
	login: function() {
		var self = this;
		return new Promise(resolve => {
			setTimeout(() => {
				self.authenticated = true;
				resolve();
			}, 5000);
		});
	}
};

//avoid this style of conditional async execution
/*
function showMainMenu() {
	if(!user.authenticated) {
		user.login().then(showMainMenu);
		return;
	}
	console.log('Show main menu');
}
*/

//Any functions that user a promise should return a promise
function showMainMenu() {
	var p = (!user.authenticated) ? user.login() : Promise.resolve();
	return p.then(() => {console.log('Show main menu');});
}

showMainMenu();
showMainMenu();

