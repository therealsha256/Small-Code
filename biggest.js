//instructor's code:
function main(num1, num2, num3) {
    if (num1 > num2) {      //num1 > num
        if(num1 > num3) {
            console.log(num1);   //num1>num2 and num1 > num3
        } else {
            console.log(num3);   //num1 > num2 and num3 > num1
        }
        //  num1 >num3  num1 is the biggest 
        // otherwise num3 is the biggest 
    } else {
        if(num3 > num3) {
            console.log(num2);   //num2 > num1 and num2 > num3
        } else {
            console.log(num3);    //num3 > num1 and num3 > num2
        }
        
    }
}

main(1, 2, 3);
main(-1, -5, -9);
main(0.5, 1.5, -3);
