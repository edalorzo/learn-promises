var inputArray = [1,2,3,5];

var sum = inputArray.reduce(function(acc, next) { 
	   return acc + next; 
}, 0);

print("Summ is: " + sum);
