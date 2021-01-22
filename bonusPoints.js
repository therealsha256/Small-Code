function main(points){
    var num = points;
    result = 0;
    var lastDigit = 0;
    
 
     if( points < 100){
         points += 5;
     } if (points >= 101 && points <= 1000 ){
         points = points (num * 0.20);
     }if (points >= 1001) {
         points = points (num * 0.10);
     } if (points % 2){
             points++;
         }if (lastDigit == 5){
                 points = points + 2;
             }
             console.log(Math.abs(num - points));
             console.log(points);
         }
    
        



main(20);
main(175);