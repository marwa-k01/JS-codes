let seconds = 10;

const timerDisplay = document.getElementById('timer');

const interval = setInterval(() => {
    if (seconds > 0) {
        timerDisplay.textContent = seconds + " seconds remaining";
        seconds--;
    } else {
        clearInterval(interval);
        timerDisplay.textContent = "Time's up!";
    }
}, 1000); 