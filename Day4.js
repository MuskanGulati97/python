// Assignment 1: Program to check if character is alphabet, digit or a special character

function checkCharacter(ch) {
    if (ch >= 0 && ch <= 9) {
        console.log(ch + " is a digit")
    }
    else if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        console.log(ch + " is an alphabet")
    }
    else {
        console.log(ch + " is a special character")
    }
}
console.log("Program 1")
checkCharacter(9)
checkCharacter('a')
checkCharacter('K')
checkCharacter('*')



/* Assignment 3: program which iterates the integers from 1 to 50. For multiples of three print "Fizz" 
instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of 
both three and five print "FizzBuzz". */

function testFizzBuzz() {
    for (i = 1; i <= 50; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

console.log("Program 3")
testFizzBuzz()



// Assignment 4: Write a program to make such a pattern like a pyramid with numbers increased by 1

function makePyramid() {
    let n = 4;
    let st = "";
    let count = 1;
    for (let i = 1; i <= n; i++) {
        for (j = 0; j < n-i; j++) {
            st += " ";
        }
        for (let j = 1; j <= i; j++) {
            st += count + " ";
            count++;
        }
        st += "\n";
    }
    console.log(st);
}

console.log("Program 4")
makePyramid()


// Assignment 5: Program that accepts a string and calculate the number of digits and letters

function checkCharacter(st) {
    let digit = alphabet = 0
    for (s in st) {
        if (st[s] >= 0 && st[s] <= 9) {
            digit += 1
        }
        else if (st[s] >= 'a' && st[s] <= 'z' || st[s] >= 'A' && st[s] <= 'Z') {
            alphabet += 1
        }
    }
    console.log("Number of digits in " + st + " are " + digit)
    console.log("Number of alphabets in " + st + " are " + alphabet)
}

console.log("Program 5")
checkCharacter("Muskan@123")



// Assignment 6: Write a function to calculate the factorial of a given number

function Factorial(number) {
    let f = 1;
    if (number == 0) {
        console.log("Factorial of "+ number + " is 1")
    }
    else {
        for (i = 1; i <= number; i++) {
            f *= i;
        }
    }
    console.log("Factorial of " + number + " is " + f)
}

console.log("Program 6")
Factorial(5)


// Assignment 7: Program to find Armstrong number


function findArmstrong(number) {
    sum = 0;
    temp = number;
    while(temp > 0) {
        r = temp % 10;
        sum += r*r*r;
        temp = parseInt(temp/10);
    }
    if (sum == number) {
        console.log(number + " is an Armstrong");
    }
    else {
        console.log(number + " is not an Armstrong");
    }
    console.log(sum)
    console.log(number)
}

console.log("Program 7")
findArmstrong(1221)
findArmstrong(674)


//Assignment 8: Program to display the pattern like a diamond

function printDiamond() {
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            string += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        for (let k = (n - i) * 2 - 1; k > 0; k--) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

console.log("Program 8")
printDiamond()