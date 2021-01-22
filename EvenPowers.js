function main(n){
result = '';    //stores the prvious value as it loops
num = 1;  // is the actual # 1, 4, 8, 16...
            
    for(i = 0; i <= n; i += 2){    //i = power 2^0 - 2^10
    if(i !== 0){
        result += ',';
        }
        result += num;
        num = num *2 * 2;
    }
    console.log(result);
}

main(10);
main(7);