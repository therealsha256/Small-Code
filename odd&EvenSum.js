function main(num) {
    // initial value for evenSum and oddSum = 0
    let evenSum = 0,
        oddSum = 0;
    // convert the number to array using split() method
    numArr = num.toString().split('');
    // Iterate throught each item in the array
    for (let item of numArr) {
        //convert the item to Number
        item = Number(item);
        // if item is even number add it to evenSum variable
        if(item % 2 == 0) {
            evenSum = evenSum + item;
        }else{
            oddSum = oddSum + item; 
        }
        // if item is odd number pass it to oddSum variable
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}