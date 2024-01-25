function dayOfWeek (num){
let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let dayName = 0

    if (num === 1){
        dayName=day[0]
    }else if (num===2){
        dayName=day[1]
    }else if (num===3){
        dayName=day[2]
    }else if (num===4){
        dayName=day[3]
    }else if (num===5){
        dayName=day[4]
    }else if (num===6){
        dayName=day[5]
    }else if (num===7){
        dayName=day[6]
    }else{
        dayName = "Invalid day!"
    }

    console.log(dayName);
}
dayOfWeek(1);
dayOfWeek(6);
dayOfWeek(11);
