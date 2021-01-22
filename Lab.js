const { strict } = require("assert");

function main(str, n){

    console.log(solve(str, n));
    
}

// console.log(main('abc', 3));

function solve(str, n){

    let result = '';

    for (let i = 0; i < n; i++){
        result += str;
    }
    return result; 
}


main('abc', 3);