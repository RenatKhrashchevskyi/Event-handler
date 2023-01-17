"use strict";

window.onload = function() {
    let count = 0;
    let message = 'You clicked me ';
    let div = document.getElementById('message');

    let button = document.getElementById('clickme');
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + ' times!';
    };
};


function someFood(food) {
    if (food === 'cookies') {
        console.log('More please');
    } else if (food === 'cake') {
        console.log('Yum yum')
}
return someFood;
}
let outFood = someFood();
outFood('cake');


//anonymous function

(function(food) {
    if (food === 'cookies') {
        console.log('More please');
    } else if (food === 'cake') {
        console.log('Yum yum')
}
}) ('cookies');