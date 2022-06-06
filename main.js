// time
let hours = document.querySelector('.hour')
let minutes = document.querySelector('.minute')

//set up the time
let updateTime = () => {
    let currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    // if (currentHour > 12) {
    //     currentHour -= 12;
    // }


    hours.textContent = currentHour.toString();
    minutes.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 3000)
updateTime();

//=======calculator==================

const screen = document.querySelector("#screen");
const digit = document.querySelectorAll('.digit');
let selection = 'rad';

for (item of digit) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if (btnText === '÷') {
            btnText = '/';
        }
        if (btnText === 'X') {
            btnText = '*'
        }
        if (btnText === 'xy') {
            btnText = '^'
        }
        if (btnText === 'y√x') {
            btnText = '√'
        }
        if (btnText === 'EE') {
            btnText = 'E'
        }
        if (btnText === 'yx') {
            btnText = '<'
        }
        if (btnText === 'Logy') {
            btnText = 'L'
        }
        screen.value += btnText;
    });

};

function calculate() {
    if (screen.value.indexOf('^') > -1) {
        let base = screen.value.slice(0, screen.value.indexOf('^'));
        let exponent = screen.value.slice(screen.value.indexOf('^') + 1);
        screen.value = eval('Math.pow(' + base + ',' + exponent + ')');
    } else if ((screen.value.indexOf('√') > -1)) {
        let a = screen.value.slice(0, screen.value.indexOf('√'));
        let b = screen.value.slice(screen.value.indexOf('√') + 1);
        screen.value = eval('Math.pow(' + a + ',' + 1 + '/' + b + ')');
    } else if ((screen.value.indexOf('E') > -1)) {
        let c = screen.value.slice(0, screen.value.indexOf('E'));
        let d = screen.value.slice(screen.value.indexOf('E') + 1);
        screen.value = eval(c * (10 ** d));
    } else if (screen.value.indexOf('<') > -1) {
        let base = screen.value.slice(0, screen.value.indexOf('<'));
        let exponent = screen.value.slice(screen.value.indexOf('<') + 1);
        screen.value = eval('Math.pow(' + exponent + ',' + base + ')');
    } else if (screen.value.indexOf('L') > -1) {
        let log1 = screen.value.slice(0, screen.value.indexOf('L'));
        let log2 = screen.value.slice(screen.value.indexOf('L') + 1);
        screen.value = eval(Math.log(log1) / Math.log(log2));
    } else {
        screen.value = eval(screen.value);
    }

};

function changeRad() {
    let rad = document.querySelector('.rad');
    if (rad.textContent.includes('Rad')) {
        rad.textContent = "Deg";
        selection = "deg";
    } else {
        rad.textContent = "Rad";
        selection = 'rad'
    }
};

function addMinus() {
    if (screen.value.charAt(0) === '-') {
        screen.value = screen.value.slice(1);
    } else {
        screen.value = '-' + screen.value;
    }
}

function sin() {
    if (selection === 'deg') {
        screen.value = Math.sin(screen.value);
    } else if (selection === 'rad') {
        screen.value = Math.sin(screen.value * (Math.PI / 180));
    }
};
function arSin() {
    screen.value = Math.asin(screen.value);
};
function cos() {
    if (selection === 'deg') {
        screen.value = Math.cos(screen.value);
    } else if (selection === 'rad') {
        screen.value = Math.cos(screen.value * (Math.PI / 180));
    }
};
function arCos() {
    screen.value = Math.acos(screen.value);
};
function tan() {
    if (selection === 'deg') {
        screen.value = Math.tan(screen.value);
    } else if (selection === 'rad') {
        screen.value = Math.tan(screen.value * (Math.PI / 180));
    }
};
function arTan() {
    screen.value = Math.atan(screen.value);
};
function square() {
    screen.value = screen.value * screen.value;
};
function square2() {
    screen.value = 2 ** screen.value;
};
function cube() {
    screen.value = screen.value * screen.value * screen.value;
};
function percents() {
    screen.value = screen.value / 100;
};
function pi() {
    screen.value = Math.PI;
};
function rand() {
    screen.value = Math.random();
};
function exp() {
    screen.value = Math.exp(screen.value);
};
function exp2() {
    screen.value = 2.71828182846;
};
function factorial() {
    let number = 1;
    if (screen.value === 0) {
        screen.value = '1';
    } else if (screen.value < 0) {
        screen.value = NaN;
    } else {
        let number = 1;
        for (let i = screen.value; i > 0; i--) {
            number *= i;
        }
        screen.value = number;
    }
};

function numInverse() {
    screen.value = 1 / screen.value;
};

function sinh() {
    screen.value = Math.sinh(screen.value);
};
function arSinh() {
    screen.value = Math.asinh(screen.value);
};
function cosh() {
    screen.value = Math.cosh(screen.value);
};
function arCosh() {
    screen.value = Math.acosh(screen.value);
};
function tanh() {
    screen.value = Math.tanh(screen.value);
};
function arTanh() {
    screen.value = Math.atanh(screen.value);
};
function log() {
    screen.value = Math.log10(screen.value);
};
function log2() {
    screen.value = Math.log2(screen.value);
};

function inlog() {
    screen.value = Math.log(screen.value);
};
function sqrtroot() {
    screen.value = Math.sqrt(screen.value);
};
function cbrtroot() {
    screen.value = Math.cbrt(screen.value);
};
function pow10() {
    screen.value = 10 ** screen.value;
};

//memory============

let memory = [];
let memBtn = document.querySelector(".memory")
function addToMemory() {

    if (screen.value > 0) {
        memory.push(+screen.value);
    }
    if (memory.length > 0) {
        memBtn.style.backgroundColor = '#9a9494';
    }
};
function getFromMemory() {

    if (memory.length > 0) {
        screen.value = memory.reduce((acc, item) => {
            return acc + item;
        })

    }

};
function cleanMemory() {
    memory.length = 0;
    if (memory.length <= 0) {
        memBtn.style.backgroundColor = '#212121';
    }
};
function deleteLastMemory() {
    if (memory.length > 0) {
        memory.pop();
    }
    if (memory.length <= 0) {
        memBtn.style.backgroundColor = '#212121';
    }
};
//=================================2nd
function show2nd() {
    let hideMain = document.querySelectorAll('.main-hide');
    let show2nds = document.querySelectorAll('.hide')

    for (item of hideMain) {
        item.classList.toggle('_hide');
    }
    for (item of show2nds) {
        item.classList.toggle('_show');
    }
};












