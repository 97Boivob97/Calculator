var number1 = document.querySelector("#input-1");
var number2 = document.querySelector("#input-2");
var buttonForAdd = document.querySelector("#buttonForAdd");
var buttonForMinus = document.querySelector("#buttonForMinus");
var buttonForMultiply = document.querySelector("#buttonForMultiply");
var buttonForDivide = document.querySelector("#buttonForDivide");
var buttonForExponential = document.querySelector("#buttonForExponential");
var result = document.querySelector("#result");


buttonForAdd.addEventListener("click",addNumbers);
buttonForMinus.addEventListener("click",minusNumbers);
buttonForMultiply.addEventListener("click",multiplyNumbers);
buttonForDivide.addEventListener("click",divideNumbers);
buttonForExponential.addEventListener("click",exponentialNumbers);


function addNumbers(){
    var output = parseInt(number1.value)+parseInt(number2.value);
    result.innerText = output;
}

function minusNumbers(){
    if(number1.value>number2.value){
        var output = parseInt(number1.value)-parseInt(number2.value);
        result.innerText = output;
    }
    else{
        var output = parseInt(number2.value)-parseInt(number1.value);
        result.innerText = output;

    }
}

function multiplyNumbers(){
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);
    var output = num1 * num2;
    result.innerText = output;
}


function divideNumbers(){
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);
    var output = num1 / num2;
    result.innerText = output.toFixed(2);
}

function exponentialNumbers(){
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);
    var output = num1 ** num2;
    result.innerText = output
}