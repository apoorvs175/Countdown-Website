
let countdown;
let remainingTime = 0;
let isPaused = false;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;
    remainingTime = minutes * 60 + seconds;
    
    if (remainingTime > 0 && !isPaused) {
        updateDisplay();
        countdown = setInterval(() => {
            remainingTime--;
            updateDisplay();
            if (remainingTime <= 0) {
                clearInterval(countdown);
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(countdown);
    } else {
        startTimer();
    }
}

function resetTimer() {
    clearInterval(countdown);
    remainingTime = 0;
    updateDisplay();
    minutesInput.value = '';
    secondsInput.value = '';
    isPaused = false;
}

startButton.addEventListener('click', () => {
    clearInterval(countdown);
    startTimer();
});

pauseButton.addEventListener('click', pauseTimer);

resetButton.addEventListener('click', resetTimer);

updateDisplay();
