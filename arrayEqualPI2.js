function main(arr1, arr2){
    let sum = 0;
    let index = 0;
    let areEqual = true;

    for ( let i = 0; i < arr1.length; i++){
        if(Number(arr1[i]) != Number(arr2[i])){
            areEqual = false; 
            index = i;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }

if(areEqual){
    console.log(`Arrays are identical. Sum: ${sum}`);
}else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
}
}