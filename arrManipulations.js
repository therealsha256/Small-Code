function main(inputArr){

    let arr = inputArr.shift().split(' ').map(Number);

    inputArr.forEach((command => {

        let [com, num1, num2] = command.split(' ');
       
        console.log([com, num1, num2]);
    
         
    }));
}

main(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3'])