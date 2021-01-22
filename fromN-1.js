// function main(n){
// let result = '';

//     for (i = n; i >= 1; i--){
//         if(i !== n){
//             result += ',';
//         }
//         result += i;
//     }
//     console.log(result);
// }

// main(100);
// main(10);

function main(n){
    let result = '';
  
    for(i = 1; i <= n; i += 3){
        if(i !== 1){
            result += ',';
        }
        result += i;
}
console.log(result);
}

main(10);
main(7);
main(14);
