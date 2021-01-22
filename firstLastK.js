function main(arr){
    let k = arr.shift();  
    let first = arr.slice(0, k);
    let end = arr.slice(arr.length - k);
    console.log(first.join(' '));
    console.log(end.join(' '));
}


main([3, 6, 7, 8, 9]);