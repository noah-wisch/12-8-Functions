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

let largest = 0;
let array = [1, 4, 8, 15, 2];
// let secondlarge = 0;

function secondLargest(array) { //dis is da first (finding the largest number)
    for (let i = 0; i < array.length; i++) {
        if (largest < array[i]) {
            largest = array[i];
        }
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) { //dis is setting up the new array
        if (largest !== array[i]) {
            newArray.push(array[i]);
        }
    }

    largest = 0;

    for (let i = 0; i < newArray.length; i++) { //this is getting the effing answer!
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
