// Asynchronous
/*
setTimeout(function() {
    for (let i=0; i<=10; i++) {
        console.group(i);
    }
});

console.log('Outside Method');
*/


// Promises

// 1. Fulfilled
// 2. Rejected : code failed
// 3. Pending : initial state of Promise
// 4. settled: Promise is completed, either fulfilled or rejected




// Asynchronous JavaScript:

//     setTimeout, Promise, callback function, Async-await - These functions of JavaScript are used in asynchronous behavior

// Promises:

//     Execute the code in asynchronous way and always return response either successful (resolve) or fail (reject).
//     Promise states: pending (initial state), fulfilled (pass), rejected (fail)
//     Promise constructor i.e. (new Promise()) takes 1 argument i.e. callback function function(resolve, reject) and this callback function takes 2 arguments i.e. resolve and reject
//     The code placed in this callback function will be executed and if all code is passed then resolve() is called and .then() i.e. (promise.then(function() {)) will handle the successful response.
//     If code fails in callback function then reject() is called and .catch() i.e. (promise.catch(function(error) {)) will handle the failed response/exception.


// Promise constructor: Take one arguement i.e. callback function which contains
// all the steps to be performed

// Callback functions takes 02 arguements i.e. resolve and reject

/*

let promise = new Promise(function(resolve, reject) {
    // do all the code here
});
*/

// Promise consumers: then(), catch()


const x = 'Test1';
const y = 'Test2';

new Promise(function(resolve, reject) {
    if(x == y) {
        resolve();
    } else {
        reject("Rejected");
    }
}).then(function() {
    console.log('Successful');
}).catch(function(error) {
    console.log("Error: " + error);
});


// async await
// Await is always used in async block/function and it is added in front of statement i.e. (await new Promise()),
// which will always wait for the response from promise then execute further statements of async block.
// Till then it will halt the execution of async block, but outside async block, the code will run asynchronously.

(async () => {
    //code
})();



// console.log and console.error difference














