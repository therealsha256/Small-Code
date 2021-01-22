// Print a multiplication table of size 10 for given integer n:
// ▪ Read an integer n
// ▪ Print n's multiples in the format "{n} x {i} = {result}" for each i in the range [1…10]

function main(n){

    var result = 1;
    for (let i = 1; i <= 10; i++){
       result = result * n; 
       console.log(`${n} x ${i} = ${n * i}`); //console.log(n + 'x' + i + '=' + result);
    }
  

}
main(2);