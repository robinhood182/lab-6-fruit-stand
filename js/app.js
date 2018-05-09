/* globals fruits */
'use strict';

function insertFruits() {
    var fruitDisplay = document.getElementById('fruit-list');
    for(var i = 0; i < fruits.length; i++) {
        var fruitImage = fruits[i].insertImage();
        var fruitList = fruits[i].createLi();
        fruitDisplay.appendChild(fruitList);
        fruitDisplay.appendChild(fruitImage);
        
    }

}

insertFruits();