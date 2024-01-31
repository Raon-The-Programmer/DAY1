//a. Print Odd Numbers in an Array
// Anonymous Function
const printOddNumbers = function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

// IIFE
(function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

//b. Convert All Strings to Title Caps in a String Array
// Anonymous Function
const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

// IIFE
const titleCaps = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world", "example"]);


//c. Sum of All Numbers in an Array
// Anonymous Function
const sumOfNumbers = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

// IIFE
const sum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);

//d. Return All Prime Numbers in an Array
// Anonymous Function
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = function(arr) {
    return arr.filter(num => isPrime(num));
};

// IIFE
const primes = (function(arr) {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return arr.filter(num => isPrime(num));
})([1, 2, 3, 4, 5]);


//e. Return All Palindromes in an Array
// Anonymous Function
const isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};

const palindromes = function(arr) {
    return arr.filter(word => isPalindrome(word));
};

// IIFE
const palindromicWords = (function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
    return arr.filter(word => isPalindrome(word));
})(["level", "hello", "radar"]);


//f. Return Median of Two Sorted Arrays of the Same Size
// Anonymous Function
const findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
};

// IIFE
const median = (function(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
})([1, 3], [2, 4]);


//g. Remove Duplicates from an Array
// Anonymous Function
const removeDuplicates = function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};

// IIFE
const uniqueArray = (function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 5]);


//h. Rotate an Array by k Times
// Anonymous Function
const rotateArray = function(arr, k) {
    const n = arr.length;
    k %= n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    return arr;
};

function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// IIFE
const rotated = (function(arr, k) {
    const n = arr.length;
    k %= n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    return arr;
})([1, 2, 3, 4, 5], 2);


//Arrow Functions:
//a. Print Odd Numbers in an Array
const printOddNumber = (arr) => {arr.forEach(num => { if (num % 2 !== 0) console.log(num); })};

printOddNumber([1, 2, 3, 4, 5]);


//b. Convert All Strings to Title Caps in a String Array
const convertToTitleCap = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
const titleCap = convertToTitleCaps(["hello", "world", "example"]);
console.log(titleCap);

//c. Sum of All Numbers in an Array
const sumOfNumber = arr => arr.reduce((acc, curr) => acc + curr, 0);
const total = sumOfNumbers([1, 2, 3, 4, 5]);
console.log(total);

//d. Return All Prime Numbers in an Array
const iSPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumber = arr => arr.filter(num => iSPrime(num));
const prime = primeNumber([1, 2, 3, 4, 5]);
console.log(prime);


//e. Return All Palindromes in an Array
const iSPalindrome = str => str === str.split('').reverse().join('');
const palindrome = arr => arr.filter(word => iSPalindrome(word));
const palindromicWord = palindrome(["level", "hello", "radar"]);
console.log(palindromicWord);
