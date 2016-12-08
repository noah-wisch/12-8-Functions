/** 
 * Functions are names for processes.
 * Variables are names for data.
 * 
 * Benefits:
 *  - Naming
 *  - Grouping similar ideas into one place
 *  - DRY!
 *  - Probs more... lol
 */

/**
 * doubleMyMoney is the name of the function
 * money is a parameter which is an INPUT to a function.
 *  - can have as many as you want (seperate w/ commas)
 * 'return' is a special keyword that means 'here is the answer'
 */

function doubleMyMoney(money, taxRate, compundedInterestRate) {
    return money * 2;
}

let balance = doubleMyMoney(100, 5, 1); // CALLING the function is actually running it
let budget = doubleMyMoney(300, 5, 100)

function product(first, second) {
    return first * second;
}

product(5, 4);

function makeChange(money) {
    let change = [0, 0, 0, 0];

    change[0] = Math.floor(money / 20);
    money = money % 20;

    change[1] = Math.floor(money / 10);
    money = money % 10;

    change[2] = Math.floor(money / 5);
    money = money % 5;

    change[3] = money;

    return change;
}

let bills = makeChange(118);
let bills2 = makeChange(114);
let bills3 = makeChange(6);
console.log(bills);
console.log(bills2);
console.log(bills3);

// Write a function that returns the number of x's in a string
// Inputs: one string 
// Outputs: one number (of x's)

function xWord(word) {
    // 1. go through all the letters
    // 2. if the current letter is an x, count it
    // 3. return the final answer 
    let freq = 0;

    for ( let i = 0; i < word.length; i++) {
        // logical operators
        // &&    and
        // ||   or
        // !    not
        if (word[i] === 'x' || word[i] == 'X') {
            freq = freq + 1; 
        }
    }

    // when it doesn't work you probs forogot...
    return freq;
}

let x1 = xWord('x123x');
let x2 = xWord('xzxxzxzxzxzxzxzx');

console.log(x1);
console.log(x2);


console.log('PRACTICE')

// inputs: array of numbers
// output: number

function average(nums) {
    let sum = 0;
    for (let i = 0; i <nums.length; i++) {
        sum = sum + nums[i]; // add the current number to the existing sum
    }

    return sum / nums.length;
}

let avg = average([1, 3, 5]);
average([5, 5, 5, 5]);
average([1, 8 ,2, 5]);
