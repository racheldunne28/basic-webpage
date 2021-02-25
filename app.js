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
    var calcOperator = document.getElementById('operation').value;
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    switch (calcOperator) {
        case "plus":
            var result = num1 + num2;
            break;
        case "minus":
            var result = num1 - num2;
            break;
        default:
            var result = "Invalid operator";
            break;
    } 
    return result
}

const runCalculator = document.querySelector('.btn3');

runCalculator.addEventListener('click', function() {
    let result = calculatorValue()
    document.getElementById("calcOutput").innerHTML = result;
    console.log("Calculator results is " + result);
});


function isPrime(num) {
    let isPrime = true;
    let i;
    for (i=2; i<num; i++) {
        if (num % i === 0) {
            isPrime = false
        }
    };
    if (num === 2) {
        isPrime = true
    };
    return isPrime
}


function calculateFactors(num) {
    var factors = []
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
             factors.push(i)
        }
     };
     return factors
}


function calculatePrimeFactors(num) {
    let factors = calculateFactors(num);
    let all_factors_prime = factors.map(isPrime);
    let not_prime;
    let factor;
    let fofs = []
    while (all_factors_prime.includes(false)) {
        not_prime = all_factors_prime.indexOf(false);
        factor = factors[not_prime]
        fofs = calculateFactors(factor)
        factors.splice(not_prime,1)
        factors = factors.concat(fofs)
        all_factors_prime = factors.map(isPrime);
    }
    factors = [...new Set(factors)]
    if (factors.length === 0) {
        factors = "It's prime!"
    }
    return factors
}


function getPrimeFactorsValue(){
    var primeFactorsVal = document.getElementById("num3").value;
    return primeFactorsVal
}


const runPrimeFactors = document.querySelector('.btn4');

runPrimeFactors.addEventListener('click', function() {
    let primeFactorsVal = getPrimeFactorsValue();
    let primeFactors = calculatePrimeFactors(primeFactorsVal);
    document.getElementById("primeFactorsOutput").innerHTML = primeFactors;
    console.log("Prime factors are " + primeFactors);
});