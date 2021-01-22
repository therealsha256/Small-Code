function main(hours, minutes, seconds){

    while(hours < 24){
        while (minutes < 60){
            while (seconds < 60){
            let hoursStr = hours.toString().padStart(2, '0')
            let minutesStr = minutes.toString().padStart(2, '0')
            let secondsStr = seconds.toString().padStart(2, '0')

                console.log(hoursStr + ':' + minutesStr + ':' + secondsStr);
                seconds += 1; 
            }
            seconds = 0;
            minutes += 1;

        }
        minutes = 0;
        hours += 1; 
    }



}
main(1, 1, 1);