// Write a function to find the biggest and the smallest number
// • Input:
// • Integer n: the count of numbers to be read
// • n floating-point numbers (as array)
// • Finds and prints the min and the max number

function main(n, numbers){
let min = Infinity;
let max = -Infinity;
      
for(let i = 1; i <= n; i++){
   
    let num = numbers.shift();
    if(num > max) {
        max = num;

    }
    if(num < min){
        min = num;
    }
}
    console.log('Min number : '+ min );
    console.log('Max number : ' + max);
}
main(3 [10, 350, 50]);
