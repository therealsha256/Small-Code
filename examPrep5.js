//comp firm. 

// variables:
//total sum of ratings totalRatings = 0;
//total totalSales = 0;
//average ratings = 0; variable
//number of ratings = ratings/ num of ratings;

//for ()
//start from 1 initial value
//stop when i <= n(computerNumbs)
//step increase by 1
//inside the for loop code block

//let computerSaleAndRating = salesAndRatings.shift (array) eg 103
// ratings += computerSalesAndRating % 10;to get the last digit
//computerSale = Math.floor(computerSaleAndRating / 10
//if rating == 2
//totalSales += compuerSale * 0;
//else if rating == 3
//totalSales += compuerSale 50%;
//else if rating == 4
//totalSales += compuerSale 70%;
//else if rating == 5
//totalSales += compuerSale 85%;
//else if rating == 6
//totalSales += compuerSale 100%;

//outside the for loop
//console.log(sales .tofixed(2))
//calculate average console.log(toFixed(ratingsAverage = ratings / numRatings));

function main(computerNums, salesAndRatings){
    
    //can use else if to check rating

    //calculate average and print it
    let totalSales = 0;

for(let i = 1; i < computerNums; i++){
    let computerSaleAndRating = salesAndRatings.shift();
    let ratings = computerSalesAndRating % 10;
    let totaRatings = ratings;
    numRatings++;
    let computerSale = Math.floor(computerSaleAndRating / 10);

    if(rating === 6){
        totalSales += computerSale * 1;
    }else if(rating === 5){
        totalSales += computerSale * 0.85;
    }else if(rating === 4){
        totalSales += computerSale * 0.75;
    }else if(rating === 3){
        totalSales += computerSale * 0.5;
    }else if(rating === 2){
        totalSales += computerSale * 0;
    }

}
console.log(totalSales.toFixed(2));
ratingsAverage = totalRatings * numRatings;
console.log(ratingsAverage.toFixed(2));
}

main(3,[103, 103, 103]);        //num sold is 15, avg rating: 3
main(5, [122, 156, 202, 214, 185]);     //num sold 45, rating: 3.8


function main(numOfComp, salesAndRatings){
    var salesMade = 0;
    var avgRatingSales = 0;
    

    for(var rating <= 2){
    salesAndRatings = 2;
    
}else if{ 
        rating == 3;
    salesMade = numOfComp * 5;

}else if{
        rating == 4;
        salesMade = numOfComp *
    }

}

main(3, [103, 103, 103]);
main(5, [122, 156, 202, 214, 185]);
main(2, [204, 206]);


// function shopping(args) {
//     for (var i = 0; i < args.length; i++) {
//       var item = args[i];
  
  
//       var totalBreakTime = parseInt(item.totalBreakTime); // 20;
  
  
//       if (isNaN(totalBreakTime) || totalBreakTime === "")
//         console.log("enter valid value for totalBreakTime");
  
  
//       var hardwarePrice = parseFloat(item.hardwarePrice); // 2;
  
  
//       if (isNaN(hardwarePrice) || hardwarePrice === "")
//         console.log("enter valid value for hardwarePrice");
  
  
//       var softwarePrice = parseFloat(item.softwarePrice); // 4;
  
  
//       if (isNaN(softwarePrice) || softwarePrice === "")
//         console.log("enter valid value for softwarePrice");
  
  
//       var frappePrice = parseFloat(item.frappePrice); // 3;
  
  
//       if (isNaN(frappePrice) || frappePrice === "")
//         console.log("enter valid value for frappePrice");
  
  
//       var whiteFrappeTimeSpentDefault = 5; //5 minutes Peter spends on WhiteFrappe
  
  
//       var remainingTimeAFterBuyingFrappe = totalBreakTime - whiteFrappeTimeSpentDefault;
  
  
//       var timeSpentOnHW = 3 * 2;
//       var timeSpentOnSW = 2 * 2;
  
  
  
  
//       var relaxingTime = remainingTimeAFterBuyingFrappe - (timeSpentOnHW + timeSpentOnSW);
//       var moneyOnHW = hardwarePrice * 3; //3 is the number of hardwares bought
//       var moneyOnSW = softwarePrice * 2; //2 is the number of softwares bought
  
  
//       var totalMoney = moneyOnHW + moneyOnSW + frappePrice;
  
  
  
  
//       console.log("Total spent money during the break:" + (!isNaN(totalMoney) ? totalMoney : "check the input"));
  
  
//       console.log("The remaining time for relaxation:" + (!isNaN(relaxingTime) ? relaxingTime : "check the input"));
  
  
//     }
//   }
  
  
//   shopping([{
//     totalBreakTime: 20,
//     hardwarePrice: 2,
//     softwarePrice: 4,
//     frappePrice: 3
//   }, {
//     totalBreakTime: 20,
//     hardwarePrice: 2,
//     softwarePrice: 4,
//     frappePrice: 3
//   }]);