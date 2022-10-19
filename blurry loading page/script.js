const percentage = document.querySelector('.percentage');
const bg = document.querySelector('.bg-image');
let load = 0;

let interval = setInterval(blur, 40); // run the blur function every 40 milliseconds

// mapping one range of numbers to another
const mapRange = function(num, in_min, in_max, out_min, out_max){
    return ((num-in_min) * (out_max-out_min)) / (in_max-in_min) + out_min;
}

function blur(){
    load++;

    if (load >= 100){
        clearInterval(interval);
    }

    percentage.innerText = `${load}%`;
    percentage.style.opacity = 1-(load/100);
    bg.style.filter = `blur(${mapRange(load, 0, 100, 30, 0)}px)`;
}

