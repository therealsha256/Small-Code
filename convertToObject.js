function main(jsonInput){
    let objData = JSON.parse(jsonInput); // this will return an object
    console.log(objData);
}

let json = '{"name", "land", "population", "country", "postalCode"}'
main(json);

