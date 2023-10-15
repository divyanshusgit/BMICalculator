const inputs = document.getElementsByClassName('inputs')
inputs[1].style.background = `#00c667`;
const bmi = document.getElementById('bmi');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
height.value = 167;
weight.value = 52;
const heightValue = document.getElementById('heightValue');
const weightValue = document.getElementById('weightValue');
height.addEventListener('input',heightFunc);
weight.addEventListener('input',weightFunc);
const result = document.getElementById('result');

let boxes = document.getElementsByClassName('boxes');
let underweight = document.getElementById('underweight');
let normal = document.getElementById('normal');
let overweight = document.getElementById('overweight');
let obese1 = document.getElementById('obese1');
let obese2 = document.getElementById('obese2');
let obese3 = document.getElementById('obese3');

function trachColor(rang){
    inputs[1].style.background = rang;
}

function calculateBMI(){
    let weightVal = weight.value;
    let heightVal = (height.value)/100;
    let bmiVal = (weightVal/(heightVal*heightVal)).toFixed(2);
    for(let i = 0; i<boxes.length; i++){
        boxes[i].style.opacity = 0.2;
    }
    if(bmiVal<18.5){
        underweight.style.opacity = 1;
        trachColor('#007bff');
    }
    else if(bmiVal<25){
        normal.style.opacity = 1;
        trachColor('#00c667');
    }
    else if(bmiVal<30){
        overweight.style.opacity = 1;
        trachColor('#fecc18');
    }
    else if(bmiVal<35){
        obese1.style.opacity = 1;
        trachColor('rgb(255, 149, 0)');
    }
    else if(bmiVal<40){
        obese2.style.opacity = 1;
        trachColor('red');
    }
    else{
        obese3.style.opacity = 1;
        trachColor('#cc1100');
    }
    if(bmiVal<10){
        result.innerHTML = `0${bmiVal}`; 
    }
    else{
        result.innerHTML = `${bmiVal}`; 
    }
}
function heightFunc(a){
    let inCm = a.target.value;
    let inFt = a.target.value/30.48;
    let inIn = Math.round((inFt-parseInt(inFt))*12)
    inFt = parseInt(inFt);
    if(inIn==12){
        inIn = 0;
        inFt++;
    }
    heightValue.innerHTML = `${inCm} cm / ${inFt}' ${inIn}"`;
    calculateBMI();
}
function weightFunc(a){
    let inKg = a.target.value;
    let inPnd = (a.target.value*2.20462).toFixed(2);
    weightValue.innerHTML = `${inKg} kg / ${inPnd} lb`;
    calculateBMI();
}