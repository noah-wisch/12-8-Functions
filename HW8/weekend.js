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

// console.log('#4 secondLargest')

// function secondLargest (nums) {
//     // console.log('running');
//     let largest = nums[0];
//     let second = nums[1];

//     for (let i = 0; i <nums.length; i++) {
//         if (largest < nums[i]) {
//             largest = second[i];
//         }
//     }
//     return second;
// }

// let nums = [0, 10, 20, 15, 30];

// console.log( secondLargest(nums) );

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


// console.log(containsVowel ('sdfeoad') );

/*------------------------------------------*/

console.log('#6 pigLatin')

// Write a function called piglatin that takes a single string and returns the 
// piglatin version of that string. 
// Hint: look into the split() function that you can call on strings.


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

fizzbuzz(21);

/*------------------------------------------*/