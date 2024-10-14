let runningInterval = null, startTime = 0, elapsedTime = 0;
const element = document.getElementById("stop");

const startStopwatch = () => {
    if (!runningInterval) {
        startTime = Date.now() - elapsedTime;
        runningInterval = setInterval(() => {
            displayTime(elapsedTime = Date.now() - startTime);
        });
    }
};

const stopStopwatch = () => {
    clearInterval(runningInterval), runningInterval = null;
};

const resetStopwatch = () => {
    stopStopwatch(), displayTime(elapsedTime = 0);
};

const displayTime = time => {
    const pad = n => (n < 10 ? "0" : "") + n;

    element.innerText = `${
        pad(Math.floor(time / 60000))
    }: ${
        pad(Math.floor((time / 1000) % 60))
    }: ${
        pad(Math.floor((time % 1000) / 10))
    }`
} 