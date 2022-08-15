function thisAFunction(params) {
    console.log("This is the standard declaration of a function.");
}

const thisAFunction2 = function (params) {
    console.log("\nThis is also a function as in JS functions are treated as variables which are treated as (JSON) objects...");
    console.log("This is also called as anonymous function.");
}

const thisAFunction3 = (params) => {
    console.log("\nThis is the arrow function of ECMAScript 6 (ES6) JS. It also mostly behaves like any other function.");
}

thisAFunction();
thisAFunction2();
thisAFunction3();
