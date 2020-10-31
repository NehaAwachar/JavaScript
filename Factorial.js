// JavaScript program to calculate factorial of entered number
function factorial(number){
  let fact = 1;
  for(var i = number; i >= 1; i--)
  {
      fact = fact * i;
  }
    return fact; 
}
let number =  prompt("Enter a number: ");
var_factorial = factorial(number);
console.log("The factorial of " + number + " is " + var_factorial);
