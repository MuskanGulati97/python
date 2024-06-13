let a = 10;
let b = 20;

function sum(a, b) {
    return a + b;
}

sum(a,b);

// Procedural

const firstname = 'Muskan';
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

function calculateSalary(firstname, baseSalary, overtime, rate) {
    console.log('Employee name: ' + firstname);
    return baseSalary + (overtime * rate);
}


// OOPS

// employee is an Object
// firstname, salary, overtime etc are properties
// totalSalary is a method here that is used to define the functionality

const employee = {
    'firstname': 'Muskan',
    'baseSalary': 30000,
    'overtime': 10,
    'rate': 20,
    totalSalary: function() {
        console.log('Employee name: ' + firstname);
        return this.baseSalary + (this.overtime * this.rate)
    }
}

employee.totalSalary();


// OOPS concepts : Pillars 
// 1. Encapsulation
//    Binding variables & methods in a single object 
// 2. Abstraction
//    Hiding the data from outside world that is not necessary for them
// 3. Inheritance
//    Getting the parent property to decrease duplicasy
// 4. Polymorphism


// Object creation

// 1. Object literal way
// We create a JSON object and provide literals

const obj = {
    animal: 'ABC',
    animalType: function() {
        return this.animal;
    }
}

function showAnimal(obj) {
    console.log(obj.animalType());
}

obj.animal = "Dog";
showAnimal(obj);

// 2. Factory function

function animalFunction(animal) {
    // animal: animal,
    // if both name and value are same we can write it as below:
    return {
        animal,
        animalType: function() {
            return this.animal;
        }
    }
}

const dogObject = animalFunction('Dog')
const catObject = animalFunction('Cat')
console.log(dogObject.animalType('Dog'))
console.log(catObject.animalType('Cat'))


// 3. Constructor Function

function employeeConstructor(firstname, lastname, baseSalary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.baseSalary = baseSalary;
    let designation = "Software Engineer"; // this is a private variable. Not accessible tot he user
    this.calculateSalary = function() {
        return this.baseSalary;
    }
    this.employeeFullName = function() {
        return this.firstname + " " + this.lastname;
    }
    this.empDesignation = function() {
        return designation;
    }
    Object.defineProperty(this, 'designation', {
        get: function() {
            return designation;
        },
        set: function(value) {
            designation = value;
        }
    });
}

const emp1 = new employeeConstructor('Test', 'user', 12312)

console.log(emp1.calculateSalary());

console.log(emp1.employeeFullName());

console.log(emp1.designation);


// Constructor property

let int = 1;
console.log(int.constructor);

let var2 = new Number(100);
console.log(var2);
console.log(var2.constructor);


let str1 = ' ';
console.log(str1);
console.log(str1.constructor);


let str2 = new String();
console.log(str2);
console.log(str2.constructor);


let bool = new Boolean(true);
let bool1 = true;
console.log(bool);
console.log(bool1);
console.log(bool.constructor);
console.log(bool1.constructor);



//Assignment 1: JSON object using Object literal way and set {'key1': 'value1', 'key2': 'value2'} key-value pair in that object

const obj1 = {
    key1: 'value1',
    key2: 'value2'
};

console.log(obj1.key1)
console.log(obj1.key2)


// Assignment 2: Array object using Object literal way and assign ['value1', 'value2', 'value3'] in that array

var arrLiteral = ["val1","val2","val3"];

console.log(arrLiteral[0])
console.log(arrLiteral[1])
console.log(arrLiteral[2])


// Assignment 3: Polymorphism


function greetPerson(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
}

let person1 = new greetPerson('Bob');
let person2 = new greetPerson('Sarah');

person1.greeting()
person2.greeting()


// Assignment 4: Student object which will have basic information like name, email, subject etc. 
// as public properties and set marks as private property using getter/setter and read it


function studentInformation(firstname, lastname, emailID, Subject) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.emailID = emailID;
    this.Subject = Subject;
    let marks = 60; // this is a private variable. Not accessible tot he user
    this.StudentFullName = function() {
        return this.firstname + " " + this.lastname;
    }
    this.StudentEmailID = function() {
        return this.emailID;
    }
    Object.defineProperty(this, marks, {
        get: function() {
            return marks;
        },
        set: function(value) {
            marks = value;
        }
    });
}


const std1 = new studentInformation('Test', 'user', 'testuser@gmail.com', 'English')

console.log(std1.StudentFullName());

console.log(std1.StudentEmailID());

console.log(std1.marks);


// Assignment 5: Create a Person object using Factory Function which have 
// properties like first name, last name, email, phone number, Address etc and create methods to return these values.


function PersonFunction(first_name, last_name, email, phone_number, address) {
    // animal: animal,
    // if both name and value are same we can write it as below:
    return {
        first_name,
        last_name,
        email,
        phone_number,
        address,
        PersonFirstName: function() {
            return this.first_name;
        }
        PersonLastName: function() {
            return this.last_name;
        }
        PersonEmailID: function() {
            return this.email;
        }
        PersonPhoneNumber: function() {
            return this.phone_number;
        }
        PersonAddress: function() {
            return this.address;
        }
    }
}

const Object1 = PersonFunction('Muskan', 'Gulati', 'muskangulati@gmail.com', '8465738', 'Jalandhar');
console.log(Object1.Person('Muskan', 'Gulati', 'muskangulati@gmail.com', '8465738', 'Jalandhar'))


