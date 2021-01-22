function main(n){
    let p1
    let p2
    let output = ''
    let i = 0
    let x= 0
    for (i = 0; i <= n; i++){
        if (i % 2 == 0 && i + 2 <= n)
        p1.push(i+2);
    }else if (i % 2 i !==)
}


//alternate code same problem

// function main(floors, estates){
//     let line = '';
//     for (let floor = floors; floor >= 1; floor--){
//         for (let estate = 0; estate < estates; estate++){
//             if (floor == floors){
//                 line = line + 'L';
//             } else if ((floor % 2) == 1){
//                 line = line + 'A';
//             } else {
//                 line = line + 'O';
//             }
//             line = line + floor + estate;
//             if (estate != (estates - 1)){
//                 line = line + ' ';
//             }
//         }
//         console.log(line);
//         line = '';
//     }
// }

// main(4, 3);

function main(floors, apartments){
    
        //floors loop going from 6th to 1st
    for(let f = floors; f <= 1; f--){
        let result = '';
        //apts loop
        for(let a = 0; a < apartments; a++)
        // check if floor is even
        if(f % 2 == 0 && f !== floors){
            result += `O${f}${a}`;
            //the last floor
        }else if(f === floors){
            //the floor is odd
            result += `L${f}${a}`;
        }else{
            result += `A${f}${a}`;
        }
        console.log(result);
    }
}

main(6, 4);
