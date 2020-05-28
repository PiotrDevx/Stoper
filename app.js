const btnMain = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panelTime = document.querySelector('.time');

let time = 0;
let active = false;
let idI;

const set = () => {
    if(!active){
        active = !active
        btnMain.textContent = 'PAUSE';
        idI = setInterval(start, 10);
    } else {
        active = !active
        btnMain.textContent = 'START';
        clearInterval(idI);
    };
};

const start = () => {
    time++;
    panelTime.textContent = (time/100).toFixed(2);
}

const restart = () => {
    time = 0;
    panelTime.textContent = '00:00'
    active = !active
    btnMain.textContent = 'START';
    clearInterval(idI);
}


btnMain.addEventListener('click', set);
btnReset.addEventListener('click', restart);