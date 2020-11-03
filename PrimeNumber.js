// program to check if a number is prime or not

// take input from the user
const usernumber = parseInt(prompt("Enter a number to check it is prime or not: "));
let isPrime = true;

// check if usernumber is equal to 1
if (usernumber === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if usernumber is greater than 1
else if (usernumber > 1) {

    // looping through 2 to usernumber-1
    for (let i = 2; i < usernumber; i++) {
        if (usernumber % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${usernumber} is a prime number`);
    } else {
        console.log(`${usernumber} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
