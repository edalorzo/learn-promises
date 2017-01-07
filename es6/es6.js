'use strict';

var numbers =  [10,20,30];
var [n1,n2, n3] = numbers;
console.log(n1);
console.log(n2);
console.log(n3);

let friend = 'Fred';
console.log(friend);
	

var position = {x: 10, y: 20};
var {x, y} = position;
console.log(x);
console.log(y);

Promise.resolve(position).then(({x,y}) => {
	console.log(x);
	console.log(y);
});

var array = [1,2];
var iterator = array[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* digits(){
	yield 1;
	yield 2;
	yield 3;
}


var iter = digits();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

class Point {
	constructor() {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x},${this.y})`;
	}
}

var p = new Point();
console.log("Point is: %s", p);

for(let ch of 'abc') {
	console.log(ch);
}

function withDefaults(m=1,n=2){
	console.log("m=%s, n=%s", m, n);
}

withDefaults();