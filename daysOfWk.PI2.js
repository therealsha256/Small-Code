function main (number){

let days = [
    'monday',
    'Tuesday',
    'Wednesday', 
    'Thursday', 
    'Fruday', 
    'Saturday', 
    'Sunday', 
];

if(number >= 1 && number <= 7){
    console.log(days[number - 1]);
}else {
    console.log('Invalid day')
}
}

main();



