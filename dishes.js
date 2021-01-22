// function main(n, dishes){
// let detergent = n*750;
// let dish= dishes.shift();
// let load = 1;
// let plates = 0;
// let pots = 0;

// while(dish !== 'End'){
//     if(load % 3 === 0 ){
//        pots += dish;
//         detergent -= dish * 15;
//     } else {
//         plates += dish;     //plates = 53+65
//         detergent -= dish * 5;    //detergent = 1500 - 53*5 - 65*5
//     }
//     dish = dishes.shift();
//     load++;
// }
//     if(detergent >= 0){
// console.log('Detergent was enough!');
// console.log(`${plates} dishes and ${pots} pots were washed. `);
// console.log(`Leftover detergent ${detergent} ml`);
    
// }else{
//     console.log(`Not enought detergent, ${math.abs(detergent)} ml more necessary!`);
// }
// }

// main(2, [53, 65, 55, 'End']);

function main(n, dishes) {
    let detergent = n * 750;
    let dish = dishes.shift();
    let plates = 0;
    let pots = 0;
    let load = 1;
    while (dish !== "End") {
        if (load % 3 === 0) {
            pots += dish;
            detergent -= dish * 15;
        } else {
            plates += dish; //plates = 53+65
            detergent -= dish * 5; //detergert = 1500 - 53*5 - 65*5;
        }
        dish = dishes.shift();
        load++;
    }

    if (detergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml`);
    } else {
        console.log(
            `Not enough detergent, ${Math.abs(detergent)} ml more necessary!`
        );
    }
}

main(2, [53, 65, 55, "End"]);
