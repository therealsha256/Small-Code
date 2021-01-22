function main(arr){

    let map = new Map();

let neighborhoods = arr.shift().split(', ');
neighborhoods.forEach(nh => map.set(nh, []));
 
arr.forEach(item => {
   
    let [neighborhood, person] = item.split(' - ');
    if (neighborhoods.includes(neighborhood)) {
        map.get(neighborhood).push(person);
    }
});
//sort them

let mapArr = Array.from(map);
mapArr.sort((a, b) => b[1].length- a[1].length);
mapArr.forEach(item =>{
    console.log(`${item[0]}: ${item[1].length}`);
    item[1].forEach(person => console.log(`--${person}`));
});


}

main(['Abbey Street, Herald Street, Bright Mews','Bright Mews - Garry','Bright Mews - Andrea',
'Invalid Street - Tommy','Abbey Street - Billy']);

