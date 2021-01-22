let simpleCalc = (a, b, op) => {

switch (op){
    case 'multiply': 
    return a*b;
    case 'add': 
    return a+b;
    case 'subtract':
        return a - b;
    case 'divide':
        return a / b;
   
}
};
let result = simpleCalc(6, 2, 'multiply');


console.log(result);

    