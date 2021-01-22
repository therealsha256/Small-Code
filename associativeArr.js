// let players = ['Mike', 'John', 'Sam', 'Alex'];

// let player = {
//     name: 'Mike',
//     number: 'one', 
//     age: 26
// };

//associative array: also an object. 

// let team = {
//     'Mike': 'One', 
//     'John': 'Two', 
//     'Sam': 'Three', 
//     'Alex': 'Four'
// };

//to loop thry then 

// for (let key in player/team){
//     console.log(players);
// }

// console.log(team['Mike']);

let products = {}
    products['TV 16 inch'] = 129.99;

    products['Radio'] = 45;
    products['Alarm Clock'] = 15.99;
    // for (let key in products){
    //     console.log(`{key} -> ${products[key]}`);
    

    //associative arrays are OBJECTS and are treated as such . 

    let keys = Object.keys(products);
    keys.forEach(function(key){
        console.log(`${key} = ${products[key]}`)
    })
    console.log(keys);