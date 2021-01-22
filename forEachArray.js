let nums = [1, 2, 3, 4, 5, 6];
let initialValue = 0;
let total = nums.reduce((sum, i) => sum + 2 * i, initialValue);
console.log(total);
//nums.forEach((a) => console.log(a));
