const day = document.querySelector(".days-digits");
const hour = document.querySelector(".hrs-digits");
const minute = document.querySelector(".mins-digits");
const second = document.querySelector(".secs-digits");

const countDownTime = 14 * 24 * 60 * 60 * 1000;

//Current time
const currentTime = new Date().getTime();

// Target time
const TargetTime = currentTime + countDownTime;

// Update Interval
const countDownInterval = setInterval(function() {
    const currentTime = new Date().getTime();

    const remainingTime = TargetTime - currentTime;
    if (remainingTime <= 0) {
        clearInterval(countDownInterval);
    } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
         
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds; 
    }
}, 1000);
