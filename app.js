const head = document.querySelector('#header');
const button = document.querySelector('#randomizer');
const body = document.querySelector('#body');
const chance = document.querySelector('#chances');
const clkCounter = document.querySelector('#counter');
const rands = [];
let counter = 0;
const num = document.createElement('p');
button.addEventListener('click', () => {

    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const alpha = Math.floor(Math.random() * 255) + 1;
    body.style.backgroundColor = `rgb(${red},${green},${blue},${alpha})`;

    head.innerText = `rgb(${red},${green},${blue},${alpha})`;
    head.style.color = `rgb(${255 - red},${255 - green},${255 - blue})`;
    button.style.backgroundColor = `rgb(${255 - red},${255 - green},${255 - blue})`;
    button.style.color = `rgb(${red},${green},${blue},${alpha})`;

    body.style.transition = "background-color 200ms ease-in-out 200ms";
    head.style.transition = "color 200ms ease-in-out 200ms";
    button.style.transition = "background-color 200ms ease-in-out 200ms";
    button.style.transition = "color 200ms ease-in-out 200ms";

    let i = Math.floor(Math.random() * 20) + 1;

    if (!rands.includes(i)) {
        rands.unshift(i);
        const div = document.querySelector(`#id${rands[0]}`);
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = "<a>&hearts;</a>";
    }

    // counter++;
    // num.innerText = null;
    // num.innerText = counter;
    // clkCounter.append(num);

});
