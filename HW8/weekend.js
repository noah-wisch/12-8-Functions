console.log('#1 Sum')

function sum (first, second) {
    return (first + second);
}

answer = sum(50, 8);
console.log(answer);

/*------------------------------------------*/

console.log('#2 Avg')

function avg (one, two, three) {
    return ((one + two + three) / 3);
}

answer = avg(7, 10, 4);
console.log(answer);

/*------------------------------------------*/

console.log('#3 greaterThan')

// Write a function called greaterThan
// takes two parameters and returns true if the second parameter is greater than the first
// Otherwise the function should return false.

function greaterThan (one, two) {
    if (two > one) {
        return true;
    } else {
        return false;
    }
}

console.log( greaterThan(20, 10) );

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

function containsVowel (word) {
    let freq = 0;

    for ( let i = 0; i < word.length; i++) {
        // logical operators
        // &&    and
        // ||   or
        // !    not
        if (word[i] === 'a, e, i, o, u' || word[i] == 'A, E, I, O, U') {
            freq = freq + 1; 
        }
    }

    return freq;