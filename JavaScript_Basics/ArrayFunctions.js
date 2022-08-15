//! Array declaration + definition
var arr1 = [0, 1, 2, 'hello'];   //recommended
var arr2 = new Array("new", 1, "sleep");
console.log(arr1, "\n", arr2);

//! Adding an element(s) to the array
console.log("");
arr1.push('world');     // appends the element specified
arr2.unshift('hola');   // prepends the element specified
console.log(arr1, "\n", arr2);

//* adding elements using array indices
console.log("");
arr1[5] = "good";  
arr2[7] = 69;      //elements at indices in-between will be empty/undefined
console.log(arr1, "\n", arr2);

console.log("");
arr2.unshift([1, 2, 3]); // whole array will be prepended
console.log(arr2);
arr2.unshift(1, 2, 3);
console.log(arr2);

//! Removing an element from the array
console.log("");
var returned = arr1.pop();   // element removed from the tail of the array
console.log(returned, " ", arr1);
returned = arr2.shift()      // element removed from the head of the array
console.log(returned, " ", arr2);

//? =====================================================================================================================================
//*Other array functions
//First Up - some which are also there in string

console.log("");
arr1 = [1, 2, 3]; arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2)
console.log(arr3)

console.log([1, 2, 3, 5, 4].indexOf(3));
console.log([1, 2, 3, 4, 5].includes(5)); 
console.log(arr3.slice(0, 3))   // element of the end index not included

//? ====================================================================================================================================
// Array specific functions - push, unshift and pop, shift also come under array specific functions 
console.log("");
console.log(arr3.splice(0, 2), arr3) // actually modifies the array
console.log(arr3.reverse())   // reverses the array in place, modifies the array

console.log("");
console.log(arr3.sort((a, b) => a - b));  //also modifies the array, a - b for ascending, b - a for descending
console.log(arr3.sort((a, b) => b - a));  