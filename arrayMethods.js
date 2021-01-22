// let nums = [10, 20 ,30];
// console.logo(nums.length);//3
// nums.push(40);  //,push is the method
// console.log(nums);
// console.log(nums.length); //4

// //add array in any position 
// nums.unshift(40);

// //remove items/ elemnt from end of the array
// let lasItem = nums.pop(); //will remove the last element off the array. 
// //nums.pop(); end of array remove
// console.log(lasItem);

// let firstItem = nums.shift(); // '10'
// console.log(nums); // [20, 30]
// console.log(nums.length); // length will now be 2


// console.log(nums.sort()); //ascending sorting[10, 20, 30]
// console.log(nums.sort().reverse()); //will reverse the order to descending
// // use this code to manipulate the order of items in an array
// console.log(nums.indexOf(3)); //will return the 4th item in the array. it is case sensitive 

// 'array iteration using a for loop'
// let capitals = ['Sofia', 'Washington', 'London']

// for(i = 0; i < capitals.length; i++){
//     console.log(capitals[i]);
// }
// console.log(capitals.toString());
// console.log(capitals.join(', '));

// array[arr.length - 1] grabs the last index

function main(num, array){
    let outputArray = [];
    let result = '';
    //get to n items from the input array

    for(let i = 0; i < num; i++){
    //add it to the output array
        outputArray.push(array[i]);
    
    }
    //accessing items from end of array
    for (let i = outputArray.length - 1; i >= 0; i--){
        result += `${outputArray[i]} `;
    }
    console.log(result);

}
main(3, [10, 20, 30, 40, 50, 60]);