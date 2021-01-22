function main(number){

    let array = [2, 3, 6, 7, 10];
    var max = Math.max(array);

    if(number % array.length == 0){
        number = Math.max(max);

    console.log('The number is divisible by ' + Math.max(max));
    }
}

main(30);


// || number % 3 == 0 || number % 6 == 0 || number % 7 == 0 || number % 10 == 0 

// alt way to write this code:

// function main(num) {
//     let output = 0;
//     if (num % 10 == 0) {
//         output = 10;
//     } else if (num % 7 == 0) {
//         output = 7;
//     } else if (num % 6 == 0) {
//         output = 6;
//     } else if (num % 3 == 0) {
//         output = 3;
//     } else if (num % 2 == 0) {
//         output = 2;
//     }
//     if (output == 10 || output == 7 || output == 6 || output == 3 || output == 2) {
//         console.log(`The number is divisible by ${
//             output}`);
//     } else {
//         console.log("Not divisible");
//     }
// }