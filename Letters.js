function main(start, end, x){
let counter = 0;
let startChar = start.charCodeAt(0);
let endChar = end.charCodeAt(0);
x = x.charCodeAt(0);

for(let l1 = startChar; l1 <= endChar; l1++){
    for(let l2 = startChar; l2 <= endChar; l2++){
        for(let l3 = startChar; l3 <= endChar; l3++){
            if(l1 !== x && l2 !== x && l3 !== x){
             let output = 
                String.fromCharCode(l1) +
                String.fromCharCode(l2) +
                String.fromCharCode(l3);
                console.log(output);
                counter++;
    }
}
}
}
}


main('a', 'c', 'b');