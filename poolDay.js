function main( numOfPpl, entranceFee, sunbedPrice, umbrellaPrice ){
    
    var totalEntranceFee = numOfPpl * entranceFee;
    //console.log(totalEntranceFee);

    // Calculate sunbeds needed and cost
    var sunbedsNeeded =  Math.ceil(numOfPpl * .75);
    //console.log("Sunbeds Needed = " + sunbedsNeeded);
    var sunbedTotal = sunbedsNeeded * sunbedPrice;
    //console.log("Sunbed Cost = " + sunbedTotal);

    // Calculate Umbrellas needed and coat
	var umbrellasNeeded = Math.ceil(numOfPpl * .50);
    //console.log("Umbrellas Needed = " + umbrellasNeeded);
  	var umbrellasTotal = umbrellasNeeded * umbrellaPrice;
    //console.log("Umbrellas Cost = " + umbrellasTotal);
  
	console.log((totalEntranceFee + sunbedTotal + umbrellasTotal).toFixed(2) + " dollars.");
}




main(21, 5.50, 4.40, 6.20); //254.10 dollars. 