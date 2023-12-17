const playButton = document.getElementById('play-pause');
const resetButton = document.getElementById('reset');
const clock = document.getElementById('clock');

let active = false;
let intervale;
let elapse = 1;

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / (60*60));
    const minutes = Math.floor((seconds % (60*60) / 60));
    const remainingSeconds = seconds % 60;
    
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(remainingSeconds)}`;
}

function addZero(number) {
    return number < 10 ? '0'+ number : number;
}

function updateClock() {    
    clock.innerText = secondsToTime(elapse++);
}

playButton.addEventListener('click', ()=>{    
    if(!active) {
        active = true;
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';              
        intervale = window.setInterval(updateClock, 1000)
    } else {
        active = false;
        actualTime = clock.innerText;
        playButton.innerHTML = '<i class="bi bi-play-fill"></i>'; 
        window.clearInterval(intervale);        
    }
})

resetButton.addEventListener('click', ()=>{
    clock.innerText = '00:00:00';
    playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    window.clearInterval(intervale);
    active = false;
    elapse = 0;
})
