function main(arr){
    //sort arr alphabetically with arr.sort(a,b )
    arr.sort((a, b) => a.localeCompare(b));

    //iterate thru arr
    arr.forEach((el, i) => {
        console.log(`${i + 1}.${el}`);
        
    });
}

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);
