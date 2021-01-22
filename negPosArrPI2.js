// function main(arr){
//     let result = [];
//     for (let item of arr){
//         if (item < 0){
//             result.unshift(item);

//         } else{
//             result.push(item);
//         }
//     }
//     console.log(result.join('\n'));  //(.join('\n')) for print on separate lines

// }

main([-3, 2, -1, 0]);


//arrow function style:

function main(arr){
    let result = [];

    arr.forEach((value) => {
        
        if(value < 0){
            result.unshift(value);
        }else{
            result.push(value);
        }
        
        
    });
    console.log(result.join('\n'));
}