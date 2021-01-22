function main (n) {
 let sum = 1;
 let outputString = '';
 for(let i = 1; i <= n; i++){
     sum += i;
     outputString += '+' + i;

 }
    console.log(outputString+ '=' + sum);
}

main(5); //1+2+3+4+5=15
main(6); //1+2+3+4+5=21 

//example 2