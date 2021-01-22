function main(obj){
    

    let jsonData = JSON.stringify(obj);   //this converts objects to json file. 
    console.log(jsonData);

}

let person = { firstName: "George", lastName: "Jones", hairColor: "Brown" }
main(person);