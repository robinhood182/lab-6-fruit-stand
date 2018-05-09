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
            li.textContent = this.name + 's are ' + this.taste + ' and ' + this.color;
            li.style.color = 'orange';
            return li;
        },
        insertImage: function() {
            var fruitPic = document.createElement('img');
            fruitPic.setAttribute('src', this.image);
            return fruitPic;
        }
    },

    {
        name: 'Avocado',
        taste: 'buttery',
        color: 'green',
        insideColor: 'yellow',
        price: 2,
        image: 'images/avocado.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + 's are ' + this.taste + ' and ' + this.color;
            li.style.color = 'green';
            return li;
        },
        insertImage: function() {
            var fruitPic = document.createElement('img');
            fruitPic.setAttribute('src', this.image);
            return fruitPic;
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
            li.textContent = this.name + 's are ' + this.taste + ' and ' + this.color;
            li.style.color = 'red';
            return li;
        },
        insertImage: function() {
            var fruitPic = document.createElement('img');
            fruitPic.setAttribute('src', this.image);
            return fruitPic;
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
            li.textContent = this.name + 's are ' + this.taste + ' and ' + this.color;
            li.style.color = 'green';
            return li;
        },
        insertImage: function() {
            var fruitPic = document.createElement('img');
            fruitPic.setAttribute('src', this.image);
            return fruitPic;
        }
    }
];
