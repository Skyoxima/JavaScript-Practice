var arr = [1, 2, 3, 4, 5, 6, 9, 8, 10];

//* Functions which require a callback function
//! find
// arrow
var res = arr.find((element) => element > 3);  // first element which satisfies the predicate is returned [Note, arrow function is not compulsory]
console.log(res);

// anonymous
res = arr.find(function(element) {
    return element > 3;
})
console.log(res);

// standard
res = arr.find(checker);
function checker(element) {
    return element > 3;
}
console.log(res);

//! there's also findIndex function which works the same like find except that it returns the index of the first satisfying element

//? =====================================================================================================================================

//! reduce - function applied to the elements of array, returns accumulated result after each element which is used for the calc of next
console.log("");
var ans = arr.reduce((acc, ele) => acc + ele, 0);
console.log("Sum of the elements of array: " + String(ans));
//reduce doesn't change the array, starting index can be given

//! reduceRight - right to left reduction
var ans = arr.reduceRight((acc, ele) => acc + ele, 0);
console.log("Sum of the elements of array: " + String(ans));


//? =====================================================================================================================================

//! map - applies the callback function to all the elements of the array, returns a new array with the new elements
console.log("");
var arr2 = arr.map((element) => element ** 2);
console.log(arr2);

//? =====================================================================================================================================

//! forEach - for all elements in an array, it performs the callback function, but not on the elements themselves, rather something 'external'
console.log("");
let string1 = "";
arr.forEach((element) => {
    string1 += (String(element) + ' ');
});
console.log(arr, " ", string1);

//? =====================================================================================================================================

//! filter - returns an array of all elements satisfying the predicate in the callback function
console.log("");
arr2 = arr.filter((element) => element > 3);
console.log(arr2);

//? =====================================================================================================================================
// Self explanatory  
//! every
console.log("")
console.log([1, 2, 3, 4, 5].every((ele) => ele >= 2));

//! some
console.log([1, 2, 3, 4, 5].some((ele) => ele >= 2));