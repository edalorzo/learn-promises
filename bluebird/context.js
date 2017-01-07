'use strict';

var Bluebird = require('bluebird');

var printer = {
	pageSize: 'US LETTER',

	connect: function() {
		return Bluebird.resolve('Connected');
	},

	configure: function(pageSize) {
		var setSize = () => this.pageSize = pageSize;
		return this.connect().then(setSize.bind(this));
	},

	print: function(job){
		var me = this;
		return this.connect().then(() => console.log('Printing "%s" using page size "%s"', job, me.pageSize));
	}
};

printer.configure('A4').then(() => printer.print('Test page'));

