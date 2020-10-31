// JavaScript program to check wether the number is even or odd

function VerifyEvenOdd(number){
if(number % 2 == 0) 
{
    return 0;
}
else 
{
    return 1;
}
}//function end here
let number = prompt("Enter a number: ");
if  (VerifyEvenOdd(number)==0)
{
    console.log("The number is even.");
}
else
{   
    console.log("The number is odd.");
}
