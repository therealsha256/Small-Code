//going home problem
function main(distance, litPer100Km, gasPricePerLiter, amountWon){
//create a variable to track the amount of liters car need to get home
//let litersNeeded = distance * litPer100Km / 100;
    let litersNeeded + distance * litPer100km / 100;
//create var for amount of $ it will cost for liters needed to get home
// let totalCost = litersNeeded * gasPriceLiter
    let totalCost = litersNeeded * gasPricePerLiter;

  //  if (amountWon >= cost to go home) 
  //then print you can go home{amountWon - totalCost}.toFixed(2)) + 'left over');
    //else{ 
        //print 'sorry, you cannot go home, each player receives {share of money}
    
    if (amountWon >= totalCost){
        let leftOver = amountWon - totalCost;
        console.log('you can go home. ${leftOver.toFixed(2)} money left');
    } else{
        let share = amountWon / 5;
        console.log('you cannot go home. ');
    }
}



main(100, 5, 1.2, 4); //inputs
//you can go home!
main(120, 5, 1.2, 4); //inputs
//sorry you cannot go home