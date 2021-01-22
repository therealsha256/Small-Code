function main(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        newArr = arr; 

    }if(newArr === arr){
        newArr.shift();
    }
    console.log(newArr);
    

}

main([7, 8, 9, 7, 2, 3, 4, 1, 2]);

