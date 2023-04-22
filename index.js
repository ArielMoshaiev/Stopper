let stopwatchInterval;
let timeInMS = 0;
const xMS = 100

function start()
{
    if(stopwatchInterval)
    {
        return;
    }
    stopwatchInterval = setInterval(function(){
        timeInMS=timeInMS+100;
        document.getElementById("stopWatch").innerHTML = updateStopper();
    }, xMS);
}

function stop()
{
    clearInterval(stopwatchInterval);
    stopwatchInterval = undefined;
    
}

function reset()
{
    timeInMS =00;
    document.getElementById("stopWatch").innerHTML = updateStopper();
}

function updateStopper(){
    const milliseconds = Math.floor((timeInMS/100) % 10).toString().padStart(2, '0');
    const seconds =  Math.floor((timeInMS/1000) % 60).toString().padStart(2, '0');
    const minutes = Math.floor((timeInMS/1000/60)).toString().padStart(2, '0');

    return `${minutes} : ${seconds} : ${milliseconds}`;
}
