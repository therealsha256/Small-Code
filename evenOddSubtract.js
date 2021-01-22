function main (inputArr){
    let oddSum = 0;
    let evenSum = 0;
        for(let item of inputArr){
            item = NUmber(item);
            if(item % 2 === 0){
                evenSum += item;
            } else {
                oddSum += item;
            }
        }
        console.log(evenSum - oddSum);



}