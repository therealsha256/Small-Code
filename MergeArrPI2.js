// function main(arr1, arr2) {
//     let outputArr = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         if (i % 2 == 0) {
//             // add arrays items
//             outputArr += arr1 + arr2;
//         } else {
//             // concatenate arrays items
//             outputArr = (arr1,arr2);
//         }
//     }
//     console.log(outputArr.join(' - '));
// }


function main(arr1, arr2) {
    let outputArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            // add arrays items
            const output = `${arr1[i]}${arr2[i]}`;
            outputArr.push(output);
        } else {
            // concatenate arrays items
            arr1[i]=Number(arr1[i]);
            arr2[i]=Number(arr2[i]);
            const output= Number(`${arr1[i] + arr2[i]}`);
            outputArr.push(output);
        }
    }
    console.log(outputArr.join(' - '));
}

main(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

