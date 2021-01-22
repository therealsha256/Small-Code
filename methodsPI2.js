// let person = {
//     //  Key  -  value     Keys are not variables. 
//     firstName: 'John',
//     lasName: 'Doe',
//     age: 35
//     printFullName: function(){
//     console.log('John Doe');
// }
// }

// person.printFullName();



//alternate:

// let person = {
//     //  Key  -  value     Keys are not variables. 
//     firstName: 'John',
//     lasName: 'Doe',
//     age: 35,
//     job: 'Developer'
// }

// let entriesArr = Object.entries(person);
// let keysArr = Object.keys(person);
// let valuesArr = Object.values(person);
// //console.log(entriesArr); //returns a nested series of arrays.
// console.log(Object.entries(person).join('  ')); // will print line of values in sequence
// console.log(valuesArr); //returns values only w/in an Arr.


// let personArr = ['john doe', 29]; 

// let [name, age] = personArr; //this will create Vars based on array items/index from above Arr. 
// console.log(name);

// let name = personArr[0];
// let age = personArr[1];

// let name = 'John';
// let age = 25;

// let person = {
//     name, 
//     age
// }
// console.log(person);

// let student = { name: 'Peter', age: '18', grade: '5.50'};

// for(let i in student){  //you can call the 'key ' anything you want 'i'
//     console.log(student);
// }

// function person(name, last, age){

//     let person = {
//         name, 
//         last, 
//         age
//     }
//     console.log(person);
// }

//person('John', 'Doe', 35);

// function user1(name, userName, age){
//    let user1 = {
//     name, 
//     userName,
//     age 
// }

// for(let key in user1){
//     console.log(`${key}: ${user1[key]}`);
//     }
// }

// user1('Lou', 'Ninja', 42);

// function area(city, land, population, country, postalCode){
//     let area = {
//         city, 
//         land, 
//         population, 
//         country, 
//         postalCode
//     }
//     for (let key in area){
//         console.log(`${key}: ${area[key]}`);
//     }
// }


function main(name, area, pop, country, zip){
    
        let city = {
        name, 
        area, 
        pop, 
        country, 
        zip
        }  
        let entries = Object.entries(city); 
        entries.forEach(entry => {
            console.log(`${entry[0]} -> ${entry[1]}`)
        })
       
    }

main(['Tucson', '350', '953000', 'USA', '85713']);