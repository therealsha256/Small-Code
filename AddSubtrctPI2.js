// function main(array){
//    let sumOriginalArray = 0;

//     var output = array[];

//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             output = array[i] += array.indexOf();
//             }else { 
//                 output = array[i] -= array.indexOf();
//             }
            
//             console.log(output);

//     }
    
    
    
// }

function main(arr) {
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let item;
        if (arr[i] % 2 == 0) {
          // add item to its index
          item = Number(arr[i]) + i;
        } else {
          // subtract item to its index
          item = Number(arr[i]) - i; 
        }
        // Push the item to the newArr
        newArr.push(item);
        arrSum += arr[i];
        newArrSum += item;
        // add arr[i] to arrSum
        
        // add item to newArrSum
       
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}

main([5, 15, 23, 56, 35]);



// for(let index in array){
//     output = index + output;
//     console.log(output); 
//