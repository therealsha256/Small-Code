function main(budget, numOfNights, pricePerNight, extraCostPercentage)
{
  
    // Does discount apply 
	if (numOfNights > 7)
      pricePerNight = pricePerNight - (pricePerNight * 0.05);
	//console.log("Price/night = " + pricePerNight);
  
    // Calculate Extra Cost based on Budget Amount
    var extraCost = budget * (extraCostPercentage/100);
  	//console.log("Extra Cost = " + extraCost);

   // Find total cost of stay
   var totalStay = (numOfNights * pricePerNight) + extraCost;
	//console.log("Total Stay = " + totalStay);
  
   // Amount Of Money left Over
  var leftOver = budget - totalStay;
	//console.log("Left  = " + leftOver);
  
  // Print out the results
  
  if (leftOver > 0)
     console.log("The Smiths will be left with " + leftOver.toFixed(2) + " dollars after vacation.");
   else
   console.log(Math.abs(leftOver).toFixed(2) + " dollars needed.");


}

//main(800.50, 8, 100, 2);
main(500.00, 7, 66, 15);