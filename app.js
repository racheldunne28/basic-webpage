'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

function getNewListValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("newListItem").value;
    return inputVal
}

const textInput = document.querySelector('.btn2');

textInput.addEventListener('click', function() {
    let inputVal = getNewListValue()
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(inputVal));
    list1.appendChild(entry);
    console.log("New list value is " + inputVal);
});

function calculatorValue(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result = num1 + num2
    return result
}

const runCalculator = document.querySelector('.btn3');

runCalculator.addEventListener('click', function() {
    let result = calculatorValue()
    document.getElementById("calcOutput").innerHTML = result;
    console.log("Calculator results is " + result);
});