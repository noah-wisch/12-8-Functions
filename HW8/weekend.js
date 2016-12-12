console.log('#1 Sum')

function sum(first, second) {
    return (first + second);
}

answer = sum(50, 8);
console.log(answer);

/*------------------------------------------*/

console.log('#2 Avg')

function avg(one, two, three) {
    return ((one + two + three) / 3);
}

answer = avg(7, 10, 4);
console.log(answer);

/*------------------------------------------*/

console.log('#3 greaterThan')

// Write a function called greaterThan
// takes two parameters and returns true if the second parameter is greater than the first
// Otherwise the function should return false.

function greaterThan(one, two) {
    if (two > one) {
        return true;
    } else {
        return false;
    }
}

console.log(greaterThan(20, 10));

/*------------------------------------------*/

console.log('#4 secondLargest')

let array = [1, 20, 8, 15, 2];

function secondLargest(nums) {
    let largest = 0;
    //this is da first (finding the largest number)
    for (let i = 0; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        //this is setting up the new array
        if (largest !== nums[i]) {
            newArray.push(nums[i]);
            //push() is an array operation that means 'add to'
        }
    }

    largest = 0;

    for (let i = 0; i < newArray.length; i++) {
        //this is getting the effing answer!
        if (largest < newArray[i]) {
            largest = newArray[i];
        }
    }
    return largest;
}

console.log(secondLargest(array));

/*------------------------------------------*/

console.log('#5 containsVowel')

let vowels = ['a', 'e', 'i', 'o', 'u'];
function containsVowel(word) {

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j]) {
                return true;
            }
        }
    }
    return false;
}

let word = containsVowel('wrd');
console.log(word);

/*------------------------------------------*/

console.log('#6 pigLatin')

function pigLatin(word) {
    // 1. convert word into array w/ split
    // 2. set letter [0] to index
    // 3. move [0] to end og array
    // 4. concatinate 'ay' to end of word
    let end = ('ay');
    let letters = word
    let cutoff = letters.slice(0, 1);
    let main = letters.slice(-4);
    let keeper = (main + cutoff + end)
    return keeper;
}

let final = pigLatin('tiger');
console.log(final);

/*------------------------------------------*/

console.log('#fizzbuzz')

function fizzbuzz(max) {
    for (let i = 1; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

// fizzbuzz(21);

/*------------------------------------------*/

console.log('#7 longestWord')

function longestWord(sentence) {
    // 1. Convert sentence into an array
    // 2. Search through words for the largest letter count
    //3. Once we've checked them all, return the longest one 
    let words = sentence.split(' '); // array of strings
    let longest = 0; // length of the longest word so far
    let keeper = '';

    for (i = 0; i < words.length; i++) {
        if (words[i].length > longest) { // if this word is longer than the longest so far
            longest = words[i].length; // we have a new longest words
            keeper = words[i];
            console.log('found a new longest: ' + keeper);
        }
    }
    // returns a string
    return keeper;
}

let winner = longestWord('how much wood would a woodchuck chuck?');
console.log(winner);

// split ()
/* let sentence = 'how much wood would a woodchuck chuck?'
let words = sentence.split(' '); // to get one word 'woodchuck' you could console.log words[5];
console.log(sentence.split (' '));
*/

/*------------------------------------------*/

console.log('#8 divisors')

//Write a function called divisors that accepts a number 
//and returns an array of all of the numbers that divide evenly into it.

function divisors(num) {
    // 1. input a number
    // 2. use some sort of .something to seperate it, maybe split?
    // 3. output the divisors, maybe in an array

}

let divided = divisors(10);
console.log(divided);

/*------------------------------------------*/

console.log('#9 weave')

// weave('hello there', 3); 
// means every 3rd character in 'hello there' should be replaced by 'x'
// not gonna lie, I'm a little lost as to how this works. 
// I had to look this up onlin.
function weave(strings) {
    let phrase = ('coding iz hard')
    let string = phrase.split('')
    let nth = 4;
    let replace = 'x';
    for (i = nth - 1; i < string.length; i += nth) {
        string[i] = replace;
    }
    return string.join('');
}
let sentence = weave('');
console.log(sentence);

/*------------------------------------------*/

console.log('#10 bonus')

function bonus(cost) {
    // 1. input the bill amount
    // 2. variable for 20% and Math.ceil(total)
    // 3. output the cost
    let bill = (17.83);
    let tip = (bill * .20);
    return Math.ceil(bill + tip);
}

let total = bonus('');
console.log(total);

/*------------------------------------------*/

console.log('#11 pokemon')

function pokemon(ash) {
    // 1. input values into array pokemon
    // 2. use a loop to add values together and then put into new array
    // 3. Let's see where this goes 
    let caught = ([2, 1, 4, 7, 1])
    for (i = 0; i < caught.length; i++) {

    }
    let pokeMaster = caught.concat(+[i]);

    return pokeMaster;
}

let Champion = pokemon(['']);
console.log(Champion);