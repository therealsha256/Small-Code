funciton main(){
    let lastItem = Number(arr.pop());

    let firstItem = Number(arr.shift());

    console.log(firstItem + lastItem);
}

main(['20', '30', '40']);

//(Number converts a string to a nUmnber integer)

// let a= '5';
// let b = '6';

// console.log(a + b);  //56 
// console.log(+a + +b);  //11 or Number(a) + Number(b) same result
