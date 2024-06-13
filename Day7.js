// Exception Handling

// let a  = 20;




// try {
//     console.log("Try Block")
//     console.log(a);
// } catch(error) {
//     // handling
//     console.log("Catch Block")
//     console.log("Error Name: " + error)
//     console.log("Error Name" + error.name)
//     console.log("Error Message" + error.message)
// } finally {
//     // Always execute

//     console.log("Finally Block")
// }





// try {
//     console.log(string);
// } catch (error) {
//     console.log("The original error : " + error);
//     throw new Error("String is not declared yet")
// }

// function testFunction(a, b) {
//     try {
//         if (b==0) {
//             throw("The b should not be zero");
//         } else {
//             console.log(a/b);
//         }
//     } catch(error) {
//         console.log(error);
//     } finally {
//         //Not necessary
//         console.log("Hi!")
//     }
// }

// testFunction(10, 0);


// Arrow Function
// function test() {
//     console.log('normal functt=ion')
// }

// let testArrow = () => console.log("Arrow Function")

// testArrow();


// function sum(a, b) {
//     return a+b;
// }

// const sum1 = function(a, b) {
//     return a+b;
// }

// const sum2 = (a, b) => a+b;

// console.log(sum(10,20));
// console.log(sum1(10,20));
// console.log(sum2(10,20));



// Immediately invoked function expression (IIFE)


// (function() {
//     let a =10;
//     console.log("Immideately");
// })();

// (() => {
//     console.log(a);
//     console.log("Arrow");
// })();


// Callback function

// function one(a, b, callback) {
//     console.log("One function: " + a + " " + b);
//     callback(a,b,displayResult);
// }

// function sum(a, b, callback) {
//     const result = a + b;
//     console.log('Result : ' + result);
//     callback(result);
// }

// function displayResult(result) {
//     console.log("Result : " + result)
// }

// one(200, 200, sum);





// Synchronous vs asynchronous

// for (let i = 0; i <= 100; i++) {
//     if ( i == 100) {
//         console.log(testVariable);
//     }
// }


// console.log("Outside the Loop");


//Asynchronous
setTimeout(() => {
    for (let i = 0; i <= 100; i++) {
        if ( i == 100) {
            console.log("Loop done in timeout");
        }
    }
}, 0.01);

console.log("Code after the set timeout");
console.log("1 more console");



// Promises

// States:
// 1. Pending
// 2. Rejected
// 3. 
// 4. 






