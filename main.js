//Set Star Wars release date. Dec 20, 2019


var releaseDate = new Date('January 16, 2025 ').getTime();



console.log(releaseDate);

//set fuction to update time

var Clock = setInterval(updateTime, 1000);

// function to loop every second

function updateTime(){
    var TimeNow = new Date(Date.now()).getTime();  //create variable to update
    var timeRemaining = releaseDate - TimeNow; 
    //console.log(timeRemaining); 
    
    
    // conversions
    let daysRemaining = Math.floor(timeRemaining / 86400000);
    let hoursRemaining = Math.floor(timeRemaining % 86400000 / 3600000);
    let minutesRemaining = Math.floor(timeRemaining % 3600000 / 60000);
    let secondsRemaining = Math.floor(timeRemaining% 60000 / 1000);
    console.log(hoursRemaining);

    //place results within html

    //Days
    if (daysRemaining < 10){
    document.getElementById("Day").innerHTML = '0' + daysRemaining;
        }
    else{
        document.getElementById("Day").innerHTML = daysRemaining;
    }
    //Hours
    if (hoursRemaining < 10){
    document.getElementById("Hour").innerHTML = '0' + hoursRemaining;
        }
    else {
    document.getElementById("Hour").innerHTML = hoursRemaining;
    }

    //Minutes
    if (minutesRemaining < 10){
    document.getElementById("Min").innerHTML = '0' + minutesRemaining;
    }
    else {
    document.getElementById("Min").innerHTML = minutesRemaining;
    }
    //Seconds
    if (secondsRemaining < 10){
    document.getElementById("Sec").innerHTML = '0' + secondsRemaining;
    }
    else{
    document.getElementById("Sec").innerHTML = secondsRemaining;
    }


    /*if (TimeNow.getHours() > 12){
        if (TimeNow.getHours() - 12 < 10){
            document.getElementById("Hour").innerHTML = '0' + (TimeNow.getHours() - 12);
            document.getElementById("AmPm").innerHTML = 'PM';
            }
            else {
                document.getElementById("Hour").innerHTML = TimeNow.getHours() - 12;
                document.getElementById("AmPm").innerHTML = 'AM';
            }
    }
    else{
            if (TimeNow.getHours() < 10){
            document.getElementById("Hour").innerHTML = '0' + TimeNow.getHours();
            document.getElementById("AmPm").innerHTML = 'AM';
            }
            else {
                document.getElementById("Hour").innerHTML = TimeNow.getHours();
                document.getElementById("AmPm").innerHTML = 'AM';
            }
        }
//Minutes


    if (TimeNow.getMinutes() > 9){
        document.getElementById("Min").innerHTML = TimeNow.getMinutes();
        }
    else{
        document.getElementById("Min").innerHTML = '0' + TimeNow.getMinutes();
        }
//Seconds
    if (TimeNow.getSeconds() > 9){
        document.getElementById("Sec").innerHTML = TimeNow.getSeconds();
        }
    else{
        document.getElementById("Sec").innerHTML = '0' + TimeNow.getSeconds();
        }
    */    
    }
