function main(inpDrink, inpSugar, inpNumOfDrinks)
{
	// Local Variables
	var Drink = ["Espresso", "Cappuccino", "Tea"];
    var Sugar = ["Without", "Normal", "Extra"];
    var Cost = [[.90, 1.00, .50], [1.00, 1.20, .60], [1.20, 1.60, .70]];
     
    posDrink  = Drink.indexOf(inpDrink);
    posSugar  = Sugar.indexOf(inpSugar);
    
    
    // console.log("posDrink = " + posDrink);
    // console.log("posSugar = " + posSugar);

        //get cost of Drink
    var DrinkCost = Cost[posDrink][posSugar];
    //console.log("Drink Cost = " + DrinkCost);

    var total = inpNumOfDrinks * DrinkCost;
    //console.log("cups = " + total);
        
    //Drink w/o Sugar
    // indexOf returns 0, then no sugar line 47. 
    if (posSugar == 0)
    total = total - (total * 0.35);
  //console.log("New Total = " + total);

  //was espresso ordered
  if (posDrink == 0 && inpNumOfDrinks > 4)
  total = total - (total * 0.25);
    //console.log("Discounted Cost = " + total.toFixed(2));

  // 20% discount > 15.00
  if (total > 15.00)
  total = total - (total * .2);
//console.log("Discounted Cost > $15 = " + total);

console.log("You bought " + inpNumOfDrinks + " cups of " + Drink[posDrink] + " for " + total.toFixed(2) + " dollars.");
}



main('Espresso', 'Without', 10);
main('Cappuccino', 'Normal', 13);
main('Tea', 'Extra', 3);