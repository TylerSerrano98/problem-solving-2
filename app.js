'use strict'
//code below 

//problem 2 Prime Numbers

// create function with for loop and if statement to iterate through the numbers and if they return 0 not a prime number.
function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    // add return true if number is going to be prime.
    return true;
}
// create function to find iterate through the numbers and find out which ones are prime.
function display(n) {
    let arr = [2];
    for(let i = 3; i < n; i += 2) {
        if(isPrime(i)) {
            arr.push(i);
        }
    }
    //console log the array so we can see on the web page which numbers prime in the console.
    console.log(arr);
}

display(100);

// problem 3 Fibonacci Series

//set prompt for user to enter number of terms they want in the sequence
let number = prompt('enter the number of terms:');
let n1 = 0;
let n2 = 1;
let next;

console.log('Fibonacci Series');
//for loop to iterate through icremented numbers starting from 0 going up 1.
for(let i = 1; i <= number; i++) {
    console.log(n1);
    //add n1 and n2 variable so system can execute the fibonacci sequence.
    next = n1 + n2;
    n1 = n2
    n2 = next;
}
