'use strict';

export function square(n) {
	return n * n;
}

export class Point {
	
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return `(${this.x},${this.y})`;
	}

}

export function distance(x, y) {
	return Math.sqrt(
		square(y.x - x.x) + square(y.y - x.y)
	);
}