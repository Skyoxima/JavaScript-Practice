document.getElementById('mainbutton').addEventListener('click', e => {
    e.preventDefault()
    sortlist();
})

function sortlist()
{
    let inString = document.getElementById('inputbox').value;
    let inList = inString.trim().split(" ");

    document.getElementById('outputbox1').value = inList.sort((a, b) => a - b);
    document.getElementById('outputbox2').value = inList.sort((a, b) => b - a);
}

// The Compare Function
// The purpose of the compare function is to define an alternative sort order.

// The compare function should return a negative, zero, or positive value, depending on the arguments:

// function(a, b){return a - b} -----> Arrow function format: (a, b) => a - b
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

// Example: [40, 100, 1, 5, 23, 10]
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  
// the sort function will sort 40 as a value lower than 100.