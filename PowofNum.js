// Write a function to calculate n^p:
// • Read n (the number) and p (the power)
// • Print the result of n to the power of p
// • Don't use Math.pow(), use loops


function main(n, p){
    
    var result = 1;
    for(i = 0; i < p; i++){
        result = result * n;
        }
        console.log(result);

}

main(2, 5);
main(3, 4);
main(2.5, 3);