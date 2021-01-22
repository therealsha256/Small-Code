function main(budget, season) {
    let amount = 0;
    let location = '';
    let site = "";
    
    if (budget <= 100) {
        location = "Bulgaria";

        if (season == "summer") {
            budget = (budget * 0.3);
            site = "Camp";

        } else if (season=="winter") {
            budget = (budget*0.7);
            site = "Hotel";
        }    
       
        }else if (100 < budget && budget <= 1000) {
        location = "Balkans";

        if (season == "summer") {
            budget = (budget * 0.4);
            site = "Camp";
        } else if (season == "winter") {
            budget = (budget * 0.8);
            site = "Hotel";
        }       
     } else if (budget > 1000) {
        location = "Europe";
        budget = (budget * 0.9);
        site = "Hotel";   
    } 
    
    console.log(`Somewhere in ${location}`); 
    console.log(`${site} - ${ budget.toFixed(2)}`);
}

main(3413.04, 'summer');