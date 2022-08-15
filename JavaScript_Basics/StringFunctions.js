let string1 = "This is an example string (Number 1).";

console.log(string1.charAt(3)); // returns character at the specified position (index)
console.log(string1.charCodeAt(3));    // returns unicode (ASCII) of the character at the specified index
console.log("This is the OG string".concat(", This is concatenated string 1", ", This is concatenated string 2")); // concatenates string(s) to a string

console.log("")
console.log(string1.endsWith(".")); // checks if a string ends with specified character, returns true or false
console.log(String.fromCharCode(112, 115)); // returns a character/string based on the unicode for character(s) given
console.log(string1.includes("an ex"));  // returns true if specified substring is present in the main string otherwise returns false. Starting index can be specified too

console.log("");
console.log(string1.indexOf('x'));
console.log(string1.indexOf('is'));     // returns the index from which the specified substring is found first 
console.log(string1.lastIndexOf('i'));  // returns the index from which the specified substring was found last in the main string

console.log("");
console.log("Example A ".repeat(9)); // returns a string which has specified no_of_repetitions of the string the function is called on  
console.log(string1.slice(1, 8));    // returns a sliced string based on the specified start and end indices, end index not included
console.log(string1.substring(1, 8))   // same as slice


//these are mostly trivial, imp ones are the regex ones