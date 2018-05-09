/* globals fruits */
'use strict';

function insertFruits() {
    var fruitDisplay = document.getElementById('fruit-list');
    for(var i = 0; i < fruits.length; i++) {
        console.log(fruits[i].createLi());
        var fruitList = fruits[i].createLi();
        console.log(fruitList);
        fruitDisplay.appendChild(fruitList);
    }

}

function insertImage() {
    
}
insertFruits();