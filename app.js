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