let array = [1,2,3,4,5]

function increment(array) {
    array[0] += 10;
}
console.log(array);
increment(array);
console.log(array);

let json = {key1: 1, key2: 2, key3: 3};
function incrementValue(json) {
    json.key2 *= 100;
}

console.log(json);
incrementValue(json);
console.log(json);



// Classes

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.weight = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    get area() {
        return this.calculateArea();
    }
    set setHeight(value) {
        this.height = value;
    }
}

const recObj = new Rectangle(100,100);
console.log(recObj.calculateArea());
console.log(recObj.area);
recObj.setHeight = 20;
console.log(recObj.height);
console.log(recObj.area);




// Private properties



class NewClass {
    #var1 = 0;
    #var2 = 0;
    constructor(var1, var2) {
        this.#var1 = var1;
        this.#var2 = var2;
    }

    calculateValues() {
        return this.#var1 + this.#var2;
    }
    get returnCalculate() {
        return this.calculateValues();
    }
}

const obj = new NewClass(123,345);
console.log(obj.returnCalculate)


// Static properties

class staticExample {
    static classname = 'StaticExample';
    static classDescription = 'To show example';
    constructor() {

    }
    static staticMethod() {
        console.log('Static method is called');
    }
}

const newObj = new staticExample();
console.log(newObj.classname);
console.log(newObj.classDescription);
console.log(staticExample.classDescription);

staticExample.staticMethod();


// Inheritance & super keyword

// extends: To inherit from parent class
// super: To call variables and methods of parent class

// class Company {
//     constructor(companyName) {
//         this.companyName = companyName;
//     }
//     get companyDetails() {
//         return this.companyName;
//     }
// }

// class Employee extends Company {
//     constructor(companyName, employeeName) {
//         super(this.companyName);
//         this.employeeName = employeeName;
//     }
//     get EmployeeDetails() {
//         console.log('Employee name : ' + this.employeeName);
//         console.log('Company Name : ' + super.companyDetails);
//     }
// }

// const emp = new Employee('Bebo', 'Muskan');
// emp.EmployeeDetails;




//Map

json = {1: 2};
console.log(json)
// It converts the key to string even though our input was integer

let map = new Map();
map.set(1,2);
map.set(false, 'test');
console.log(map)

console.log(map.get(false));

console.log(map.has(false));
console.log(map.has(true));




console.log(map.has('false'));

console.log(json['false']);

map.delete(false);
console.log(map);

map.clear();
console.log(map);


// Set
let arr1 = [1,2,3,4,2,3,4,2,2,3,2,3]
console.log(arr1)
let set = new Set()
let set1 = new Set(arr1);
console.log(set)
console.log(set1)

set.add(5);

console.log(set)

set1.delete(3);
console.log()
console.log(set1.has(2));
console.log(set1);
set1.clear();
console.log(set.size);
console.log(set1);







