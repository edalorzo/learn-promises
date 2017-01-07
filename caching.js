'use strict';

var user = {
	loginPromise: null,
	login: function() {
		return (this.loginPromise = new Promise(resolve => setTimeout(() => resolve(), 5000)));
	}
};

//Now the caching kicks in once the promise has been fulfilled.
function showMainMenu() {
	return user.login().then(() => {console.log('Show main menu');});
}

showMainMenu();
showMainMenu();

