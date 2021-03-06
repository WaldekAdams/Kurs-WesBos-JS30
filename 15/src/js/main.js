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
const items = JSON.parse(localStorage.getItem('items')) || [];




function addItem(e){
 e.preventDefault();
let text = this.querySelector('[name=item]').value;
const item = {
  text: text ,
  done: false
}
items.push(item);
console.table(items);
populateList(items, ulList);
localStorage.setItem('items',JSON.stringify(items))
this.reset()
}


function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate,i)=>{
    return `
   <li>
   <input type="checkbox" id="item${i}" data-index="${i}" ${plate.done ? `checked`: ''}/>
   <lable for="item${i}">${plate.text}</lable>
   
   </li>
  `
  }).join('')
}
function toggleDone (e){
  
  if(!e.target.matches('input')) return;
  console.log(e.target);
  let li = e.target;
  let liIndex = li.dataset.index;
  console.log(liIndex);
  items[liIndex].done = !items[liIndex].done;
  localStorage.setItem('items',JSON.stringify(items));
  populateList(items, ulList);
  
  // console.table(items)

}

form.addEventListener('submit', addItem);
ulList.addEventListener('click', toggleDone)
populateList(items, ulList)