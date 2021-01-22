function main(pounds) {
    var usd =  pounds * 1.31;
    if(pounds){
        pounds *= usd; 
    }

    console.log(usd.toFixed(3));

}
main(80);