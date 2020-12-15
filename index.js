const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = Array.from(document.querySelectorAll('.hand'));

function setClock(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  

    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    if(secondsDegrees === 90){
    allHands.forEach(hand => hand.style.transition = 'none');
    } else {
    allHands.forEach(hand => hand.style.transition = '');
    }
}

function setDigital(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const display = document.querySelector('.digital');
    display.textContent = hours + ":" + minutes + ":" + seconds

    
}

function pulse(e){
    const clock = document.querySelector('.clock')
    clock.classList.add('pulse')
}

function removeTransition(e){
    e.target.classList.remove('pulse')
}

window.addEventListener('transitionstart', pulse);
window.addEventListener('transitionstart', removeTransition);

setInterval(setClock, 1000)
setInterval(setDigital, 1000)