// Key pointers

// 1. Variables once declared don't loose there value


// var carName;
// console.log(carName);


// var carName = "Volvo";
// console.log(carName);


// var carName = "Myname";
// console.log(carName);

// 2. Use of special variable names:
// a. $ : The dollar sign is used to fetch data 
// b. _ : The underscore is used fpr hidden variables


// 3. VAriables declared with let can not be redefined

// var a = 4;
// console.log(a);

// var a = 5;
// console.log(a);

// let x = 4;
// console.log(x);

// // let x = 5;
// console.log(x);


// 4. In const variables, you can NOT:
/*
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object

*/


// Local var

// var myName = "";
// function myFunction() {
//     var myName = "Muskan";
//     // code here CAN use carName
//     console.log(myName);
// }




// myFunction();

// console.log(myName);











//JSON Objects
// let x = {key1: "Value1", key2: "Value2"};


// console.log(x);



// console.log(x.key1);

// //Arrays
// var arr = [2,4,5]

// console.log(arr[0]);
// console.log(arr);
// arr[3] = 4;

// console.log(arr);

// arr[2] = 4;

// console.log(arr);




// String concatenations

// let x ="Volvo" + 16 + 4;

// console.log(x);

// console.log(typeof x);

// var arr = [2,4,5];

// console.log(typeof arr);









// Assignment 1: Create an array. For example: [10, 20, 30, 40, 50] and change its middle value to 90

let array = [10, 20, 30, 40, 50];
let mid = parseInt(array.length/2);

console.log("************Program 1************")
console.log("Before replacing the element: " + array);

array[mid] = 90;

console.log("Before replacing the element: " + array);


// Assignment 2: Create an array ['one', 'two', 'three', 'four', 'five'] and delete 'two' element

array1 = ['one', 'two', 'three', 'four', 'five'];
let index;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 'two') {
        index = i;
    }
}
console.log("************Program 2************")
console.log("Before removing the element: " + array1);

array1.splice(index, 1);

// delete array1[index];

console.log("After removing the element: " + array1);


// Assignment 3: Find length of a string and console its value

let string = "Muskan";
console.log("************Program 3************")
console.log("Length of the String " + string + " is : " + string.length)

// Assignment 4: Find length of an array and console its value

let array2 = [10, 20, 30, 40, 50]
console.log("************Program 4************")
console.log("Length of the array is : " + array2.length)


// Assignment 5: Initially create a JSON object. For Example: {'first': 7000, 'second': 2000, 'third': 4200}
// and after that add another key-value pair 'fourth' = 2000 in that JSON. The JSON would be:
// {'first': 7000, 'second': 2000, 'third': 4200, 'fourth': 2000} 

const JObj = {'first': 7000, 'second': 2000, 'third': 4200};
JObj.fourth = 2000;
console.log(JObj);
let sum = 0;
for (let i in JObj) {
    sum += JObj[i];
}

console.log("************Program 5************")
console.log("The sum is : " + sum)


// Assignment 6: Write a program to convert a string into an array of words.

const string1 = "My name is Muskan Gulati";
stringArray = string1.split(" ");

console.log("************Program 6************");
console.log("The original string: " + string1);
console.log("Array from string: " + stringArray);

