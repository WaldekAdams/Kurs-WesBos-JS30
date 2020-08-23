"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const btn = document.querySelector('.box--btn');
const inputTxt = document.querySelector('.box--text');
const form = document.querySelector('.box--form')
const ulList = document.querySelector('.box--items');
const items = [];
let item = "";


inputTxt.addEventListener('keyup',(e) => {
 item = e.target.value;
})

function addItem(e){
 e.preventDefault();
let text = this.querySelector('[name=item]').value;
const item = {
  text: text ,
  done: false
}
items.push(item);
console.table(items)
this.reset()

}

form.addEventListener('submit', addItem)