
//this could also be made into a 'function'

let n = 3; //# of columns and rows. 

for ( let row = 1; row <= n; row++){
    let result = '';

    //inner loop
    for(let col = 1; col <= n; col++){
        result += ' *';
    }
    console.log(result);
}
