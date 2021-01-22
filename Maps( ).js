//create a map()
//const and Let can be used interchangeably 
const mapData1 = new Map(); 
const mapData2 = new Map([['John'], ['Mike'], ['Sam']]);



//add data to Map/ add item string key
// you can use booleans(true/falst) with Maps you cant with Associative Arrays

mapData1.set('Mike', 'Jones');
//add boolean key
mapData1.set(true, 'Yes');

console.log(mapData1);
console.log(mapData2);


//use .get('mike')) to get the value for Mike
// use .has('CLara')): this will return False, cause Clara is not part of this map
// you can use mapData1.keys() .entries(), .values(

let keysArr = Array.from(mapData2.keys());
console.log(keysArr); // will return array of keys

