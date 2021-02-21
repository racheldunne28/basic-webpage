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
    var inputVal = document.getElementById("myInput").value;
    console.log("New list value is " + inputVal);
}