function main(drinkName, extra){
    let total = 0;

    if(drinkName == 'coffee'){
        total += 1.00;
    } else {
    total += 0.6;
}

if (extra == 'sugar'){
    total += 0.4;
} 

console.log('Final Price: $' + total.toFixed(2));
}