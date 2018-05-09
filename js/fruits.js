/*exported fruits */
'use strict';

var fruits = [

    {
        name: 'Mango',
        taste: 'sweet',
        color: 'orange',
        insideColor: 'yellow',
        price: 3,
        image: 'images/mango.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + this.color;
            return li;
        }
    },

    {
        name: 'Avocado',
        taste: 'neutral',
        color: 'green',
        insideColor: 'yellow',
        price: 2,
        image: 'images/avocado.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + this.color;
            return li;
        }
    },

    {
        name: 'Pepper',
        taste: 'savory-spicy',
        color: 'red',
        insideColor: 'red',
        price: 1,
        image: 'images/pepper.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + this.color;
            return li;
        }
    },

    {
        name: 'Guanabana',
        taste: 'sour-sweet',
        color: 'green',
        insideColor: 'white',
        price: 5,
        image: 'images/guanabana.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + this.color;
            return li;
        }
    }
];
