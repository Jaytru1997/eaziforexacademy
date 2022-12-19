"use strict";

function countDown() {
    const regText = document.querySelector('.reg-text');
    const regToggle = document.querySelector('#reg-toggle');
    const timer = document.querySelector(".timer");
    const startDate = new Date().getTime();
    const finalDate = new Date(timer.dataset["date"]).getTime();

    regToggle.checked = true;
    
    const count = finalDate - startDate;
    const days = Math.floor(count / (1000 * 60 * 60 * 24));
    const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((count % (1000 * 60)) / (1000));
    timer.innerHTML = `${days} D : ${hours} H : ${mins} M : ${secs} s`; 
    if (count < 0){
        timer.innerHTML = "EXPIRED";
        regText.innerHTML = "Registration has";
        regToggle.checked = false;
    };
}

setInterval(countDown, 1000);
