
function main(product, day) {
if(product == 'Banana' && day == 'Weekday') {
    console.log(product + ' = $2.50');
} else {
    console.log(product + ' = $2.70');
} if(product == 'Kiwi' && day == 'Weekday') {
        console.log(product + ' = $2.20');
    } else {
        console.log(product + ' = $3.00');
    } if(product == 'Apple' && day == 'Weekday') {
            console.log(product + ' = $1.30');
        } else {
            console.log(product + ' = $1.60');
    }
} //own code

// function main(product, day) {
//     if(product === 'Banana'){
//         if(day === 'Weekday') {
//             console.log('2.50');
//         } else {
//             console.log('2.70');
//         }
//     }else if (product === 'Apple') {
//         if (day == 'Weekday') {
//             console.log('1.30');
//         } else {
//             console.log('1.60');
//         }
//     }else if (product === 'Kiwi') {
//         if (day === 'Weekday') {
//             console.log('2.20');
//         } else {
//             console.log('3.00');
//         }
//     }
// } // instructor's code. 

main('Apple', 'Weekday'); 
main('Kiwi', 'Weekend');
main('Banana', 'Weekday');