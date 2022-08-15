const string2 = "Mumbai is a city in India. I love Mumbai, it is my home. Mumbai is also the financial capital of India. Mumbai is in Maharashtra";

//! match() - IMP
let result = string2.match("Mumbai"); // non regex argument ~ returns an object containing info for the match found
console.log(result);

let result2 = string2.match(/Mumbai/g); // regex argument ~ returns an array of found match(s) (depends on the flags set in the regex)
console.log(result2);                    //! length of the returned array is the number of occurrences of the searchstring  

//? ==============================================================================================================================================================================================

//! matchAll
let result3 = string2.matchAll("Mumbai");   // non regex argument ~ returns an array (iterable iterator) of objects containing info for the match found
for (result of result3) {                   
    console.log(result)
}

let result4 = string2.matchAll(/India/g);   //regex argument ~ same as non regex
for (result of result4) {                   
    console.log(result)
}

//? ==============================================================================================================================================================================================

//! replace - IMP
let result5 = string2.replace("Mumbai", "Delhi");  //non regex - only first found match is replaced
console.log(result5);

let result6 = string2.replace(/Mumbai/g, "Delhi");  //regex - first or all matches found are replaced, depends on the flags
console.log(result6);

//? ==============================================================================================================================================================================================

//! search
console.log(string2.search(/Mumbai/g)); //returns the starting index of the first match found 

//? ==============================================================================================================================================================================================

//! test - tests a string on the regex specified
let regex = /\d?\w+/g;
console.log(regex.test(string2));   //! string is tested on the regex, not vice versa!

//? ==============================================================================================================================================================================================

//! exec ~ outdated
const results = regex.exec(string2);
for (result of results) {
    console.log(result)
}

//? ==============================================================================================================================================================================================
//* to make a regex from a string in a string variable
string3 = "Mumbai";
var rex = new RegExp(string3, "ig");
//now this regex can be used in match, search, replace etc

//* ==============================================================================================================================================================================================
