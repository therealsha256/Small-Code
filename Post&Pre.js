// let i = 1;

// while( i <= 100 ) {
//     console.log(i);
//     i +=10;
// }

// for(let i = 1; i < 50; i++){
//     console.log(i)
// }

// function main(n){
// while( n >= 2){         //you could: let i = n;
//     n--;
//     console.log(n);
// }

// }

// main(4);
// main(5);

// function main(n){
// let i = 1;
//     while(i <= n){
//         console.log(i);
//         i = i * 2 + 1;
//     }

// }
// main(8);
// main(15);

// function main(numbers){
//     let num = numbers.shift();
//     while(num % 2 === 0){
//     num = numbers.shift();
// }
//     console.log(num);

// }
// main([2, 4, 8, 3]);
// main([5]);


function main(n,  commands){
    let command = commands.shift();
    while(command !== 'End' && command !== undefined){
        switch(command){
            case 'Dec': n--; break;
            case 'Inc': n++; break;

        }
            command = command.shift();
    }
        console.log(n);
}

main(5,  ['Inc', 'Dec'])


// alternative if else
// if(command === 'inc'){
//     n++;
// } else if(command === 'dec'){
//     n--;
// }
// command = commands.shift();
// }
// console.log(n);
// }