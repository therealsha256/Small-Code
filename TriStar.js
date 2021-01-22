function main(n){

for(r = 1; r <= n; r++){
    result = '';
    for(let c = 1; c <= r; c++){
        result += '*';
    }
    console.log(result);
}

}

main(3);