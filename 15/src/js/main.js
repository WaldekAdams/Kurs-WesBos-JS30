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
const ulList = document.querySelector('.box--items');
let item = "";

inputTxt.addEventListener('keyup',(e) => {
 item = e.target.value;
})
btn.addEventListener('click', ()=>{

let li = document.createElement('li');
li.textContent =item;
ulList.appendChild(li);

})