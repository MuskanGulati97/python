// JSON.stringify() & JSON.parse() 

// const myObject = { dog: "Bark", cat: "Meow", count: 2};
  
// console.log(JSON.stringify(myObject));
// console.log(typeof JSON.stringify(myObject));


// console.log(JSON.parse(JSON.stringify(myObject)));
// console.log(typeof JSON.parse(JSON.stringify(myObject)));



// Array.stringify() & Array.parse()

// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr);

// console.log(myJSON);
// console.log(typeof myJSON);

// console.log(JSON.parse(myJSON));
// console.log(typeof JSON.parse(myJSON));



// Retrieving data from the JSON Objects:

// 1. Using Dot (.) notation
// - Using parse for the string values


// const JObj = '{"name":"John", "age":30, "car":null}';
// const Obj1 = JSON.parse(JObj);
// x = Obj1.name;
// console.log(x);


// - From the JSON Object

// const JObj1 = {"name":"John", "age":30, "car":null};
// x = JObj1.name;
// console.log(x);


// 2. Using bracket ([]) notation
// - Using parse for the string values


// const JObj3 = '{"name":"John", "age":30, "car":null}';
// const Obj3 = JSON.parse(JObj3);
// x = Obj3["name"];
// console.log(x);



// - From the JSON Object

// const JObj4 = {"name":"John", "age":30, "car":null};
// x = JObj4["name"];
// console.log(x);


// Looping around JSON Object

// const JSON5 = '{"name":"John", "age":30, "car":null}';
// const Obj5 = JSON.parse(JSON5);

// var text = "";
// for (const x in Obj5) {
//   text += Obj5[x] + ", ";
// }
// console.log(text);


// Looping around Arrays

// 1. Using 'for in' for looping
// const JSON6 = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
// const Obj6 = JSON.parse(JSON6);

// var text = "";
// for (let i in Obj6.cars) {
//   text += Obj6.cars[i] + ", ";
// }

// console.log(text);


// 2. Using 'for' for looping
// const JSON7 = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
// const Obj7 = JSON.parse(JSON7);

// var data = "";
// for (let i = 0; i < Obj7.cars.length; i++) {
//   data += Obj7.cars[i] + ", ";
// }

// console.log(data);


// Hoisting

// 1. Var

// var x; // Declare x
// x = 5; // Assign 5 to x
// console.log(x);

// The above code will result in similar code as below code:

// x = 5; // Assign 5 to x
// console.log(x);
// var x; // Declare x


// 2. Let

// carName = "Volvo";
// let carName;
// console.log(carName);


// 3. Const

// carName = "Volvo";
// const carName;
// console.log(carName);


// Functions

// function SUM(x, y) {

//     x=4;
//     y=6;
//     console.log(x+y);
// }
// SUM();


// function SUM1(x, y) {
//     console.log(x+y);
// }
// SUM1(4,6);

// sum = SUM1(6,8);



// Operations on Arrays

// let fruits = ['Apple', 'Banana']

// 1. Length
// console.log(fruits.length);

// 2. Using index position to retrieve Data 
// console.log(fruits[0]);    // Prints the first value of the array
// let last = fruits[fruits.length - 1]    // Prints the last value of the array

// 3. Looping

// fruits.forEach(function(item, index, _array) {
//     console.log(item, index)
// })


// 4. Add new value at the end of the Array

// let newLength = fruits.push('Orange');
// console.log(fruits);

// 5. Remove from end

// let lastValue = fruits.pop();
// console.log(fruits);

// 6. Remove from first position 

// let firstValue = fruits.shift();
// console.log(fruits);

// 7. Add at first position

// let newValue = fruits.unshift('Strawberry');
// console.log(fruits);

// 8. Finding index of any value

// let pos = fruits.indexOf('Banana');
// console.log(pos);


// 9. Deleting any value using its index
// Basic syntax: splice(index, n)
// n is the total values to be removed


// let removedItem = fruits.splice(pos, 1)



// Reducer

//  Reduce is a method that uses reducer attribute as a call back function.
//  It uses an arrow function to call the values


// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;


// We can also write above lines as: 
// let total = [1, 2, 3, 4].reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(total);

// console.log(array1.reduce(reducer));

// console.log(array1.reduce(reducer, 5));

// We can also write above lines as: 

// let total1 = [1, 2, 3, 4].reduce((previousValue, currentValue) => previousValue + currentValue,5);
// console.log(total1);


// Array spread function
// It is only used when we want to include every element of the array in some functionality
// Basic syntax: function(...iterableObject, newValue);

// function sum(x, y, z) {
//     return x + y + z;
//   }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));


// We can use this to conactenate two different arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];

// console.log(arr1);
