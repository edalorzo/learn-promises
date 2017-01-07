var name = "Foo";
var loadAmount = 10;
var income = 30;

print("Checking credit for " + name);
creditCheckOk = false;
if( (income / 2) > loadAmount) {
	   creditCheckOk = true;
}
print("Credit check for " + name + "  outcome is " + creditCheckOk);
