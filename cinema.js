function main(type, rows, seats) {
    let total = 0;
    switch(type){
        case 'premiere': total = 12.00 * rows * seats; break;
        case 'normal':  total = 7.50 * rows * seats; break;
        case 'discount':  total = 5.00 * rows * seats; break;
    }
        console.log(total.toFixed(2) + ' leva');

}

main('normal', 21, 13);