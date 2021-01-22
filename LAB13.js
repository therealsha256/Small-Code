// function main(n){
// sum = 0;

// while(n){
//     sum += n % 10;
//     n = Math.floor(n/10);
// } if (sum < 0){

// }
// console.log(sum);
// }

// main(5634);
// main(150);
// main(532);

// function main(n){
//     sum = 0;
    
//     while(n !== 0){
//         sum += n % 10;
//         n = Math.floor(n/10);
//     } if (sum < 0){
    
//     }
//     console.log(sum);
//     }
    
//     main(5634);
//     main(150);
//     main(532);

    //favorite book:

    // function man(favoriteBook, bookco){
    //     let book = bookCo.shift();
    //     while(book != favoriteBook && book != undefined){
    //         console.log(' Invalid book:' + book);
    //         book = book.CO.shift();
    //     }
    //     if(book == favoriteBook){
    //         console.log('Book Found!');
    //     }
    // }

    // main('Alice in Wonderland', ['Winnie the Pooh', 'Alice in Wonderland']);

    //find min & max

    // function main(numbers)[
    //     let num = shift();
    //     max = num;
    //     min = num;

    //     while(num != 'END' && num != undefined){
    //         if(num > max){
    //             max = num;
    //         }
    //         if (num < min){
    //              min = num;
    //         }
    //         num = numbers.shift();
    //     }
    //     console.log('Min number: '+ min);
    //     console.log('Max number: '+ max);

    // ]

    // main([10, 20, 304, 0, 50, 'END']);

    //special numbers

    // function main(number)[
    //     let isSpecial = true;
    //     let digitChecker = number;
    //     while(digitChecker !- 0) {
    //         let digitCal = digitChecker % 10;
    //         if(number % digitVal !== 0){
    //             isSpecial = false;
    //             break;
    //         }
    //         digitChecker = Math.floor(digitChecker / 10);
    //     }
    //     if(isSpecial){
    //         console.log(`${number} is special`);
    //     }else {
    //         console.log(`${number} is not special`);

    //     }
    // ]

    // main(23);
    // main(204); 

    // special bonus 

    // function main(stopNum, numbers){
    //     let previousNum = numbers.shift()
    //     let results = 0;
    //     while(previousNum != stopNum){
    //         let currentNum = numbers.shift();
    //         if(currentNum == stopNum){
    //             result = previousNum + previousNum * 0.2;
    //             break;
    //         } 
    //         previousNum = currentNum;
    //     }
    //     console.log(result);
    // }
    
    // main(25, [20, 30, 25]);

//account balance

    function main(incExpens){
        let balance = 0;
        let transaction = incExpens.shift();

        while(transaction != 'End' && transaction != undefined) {
            balance += transaction;

            if(transaction >= 0){
                console.log(`Increase: ${transaction.toFixed(2)}`);
            } else {
                console.log(`Decrease: ${Math.abs(transaction).toFixed(2)}`);  
            }
            transaction = incExpens.shift();
        }
        console.log(`Balance: ${balance.toFixed(2)}`);

    }

    main([500, 15.5, -80.35, 'End']);