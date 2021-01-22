function main(meters) {
    var kilometer = meters / 1000;
    if(meters){
        meters /= kilometer; 
    }

    console.log(kilometer.toFixed(2));

}
main(798);