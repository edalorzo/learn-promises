function* numbers(){
	yield 1;
	yield 2;
	yield 3;
}


var iter = numbers();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
