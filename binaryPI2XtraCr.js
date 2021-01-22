//havent started on this yet. talked about it during lab class. 

//console.log(parseInt('000111', 2));  // will conver to an integer

function main(binaryNum){

    let sum = 0;
    let count = 0;
    for(let i = binaryNum.length - 1; i >= 0; i--){
        sum += Number(binaryNum[i]) *2 **count;
            count ++;
    }
    console.log(sum);
}