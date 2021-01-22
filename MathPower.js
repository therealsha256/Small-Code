function main(num, power){

console.log(solve(num, power));
}

function solve(num, power){

    let result = 1;

for (let i = 1; i <= power; i++){

    result = result * num;
}
return result;
}

main(2, 8);