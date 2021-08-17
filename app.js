// const checker = document.links;
// console.log(checker);


// const task = document.querySelector('li');


// console.log(task);

// console.log(document.querySelector('li'))
// document.querySelector('li:nth-child(3)').style.background='red';
// document.querySelector('li:nth-child(2)').innerHTML = 'GLORY!!!';
// document.getElementById('task-title').style.background = 'blue';
// document.getElementById('task-title').style.padding = '10px';
// document.getElementById('task-title').style.color = 'white';

// document.getElementsByClassName()
// const content = document.getElementsByClassName('collection-item');
// console.log(content);
// console.log(content[0]);
// content[3].style.background = 'red';
// content[4].textContent = 'good';

// making it for a particular element
// let listContent = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listContent);

//Converting HTML collection to an array

// listContent = Array.from(listContent);
// console.log(listContent);

// listContent.reverse();

// listContent.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
  
// })
// console.log(listContent)
// for(let i=0; i<listContent.length;i++){
//   console.log(listContent);

// }

// Traversing the DOM

// const magic = 42;
// const theAnswer = magic;

// const everything = new Set([magic, theAnswer]);
// console.log(everything.size);

// Creating an element

// const newEl = document.createElement('li');
// newEl.className = 'collection-item';
// newEl.id = 'collection';
// newEl.setAttribute('title', 'New Item')
// // creating a text Node
// const textNode = document.createTextNode('Hello World');
// newEl.appendChild(textNode);

// // creating an link
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// newEl.appendChild(link);

// document.querySelector('ul.collection').appendChild(newEl);

// console.log(newEl);

// REPLACING AN ELEMENT
// const newHeader = document.createElement('h2');
// newHeader.id = 'task-title';
// newHeader.appendChild(document.createTextNode('Task title'));

// const oldHeader = document.getElementById('task-title');

// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeader, oldHeader)

//console.log(newHeader);

//REMOVING AN ELEMENT
// const lis = document.querySelectorAll('li');
// const lists = document.querySelector('ul');

// lis[2].remove();
// //OR
// lists.removeChild(lis[1]);

// CLASSES AND ATTRIBUTES

// CLASSES
// const lis = document.querySelector('li:first-child');
// const link = lis.children[0];

// let val;
// val = link.className;
// val = link.classList;
// val= link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');


// ATTRIBUTES

// link.setAttribute('title', 'google');
// link.removeAttribute('title');
// link.setAttribute('href', 'http//:google.com');
// link.setAttribute('title', 'Google');
// link.getAttribute('href');

// val = link



// console.log(val);

// ABOUT EVENTLISTENERS
// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
// console.log('hello world');

// let val;

// val = e;

// val = e.target;
// val = e.target.className;
// val = e.target.classList;
// val = e.target.classList[0];

// console.log(val);
// }

// const card = document.querySelector('.card-action');
// const clearButton = document.querySelector('.clear-tasks');
// const task = document.querySelector('h5');

// card.addEventListener('mousemove',runCode);



// function runCode(e){
  

//   task.textContent = `Position of X: ${e.offsetX} Position of Y: ${e.offsetY}`;

// document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;

// console.log(`EVENT TYPE ${e.type}`);

// }

// const check = document.querySelector('.delete-item');
// check.addEventListener('click', deleteItem);

// function deleteItem(){
//   console.log('delete Item');
// }

// EVENT BUBBLING
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELEGATION
// document.body.addEventListener('click', runCode);

// function runCode(e){
//   if(e.target.parentElement.classList.contains('delete-item')){
//   console.log('delete item')
//   e.target.parentElement.parentElement.remove();
// }}

// SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'Maxwell');
localStorage.removeItem('name');



// USER INTERFACE FOR TASK LIST APPLICATION

// Definie UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all Event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  // remove Task Event
taskList.addEventListener('click', removeTask );
// Clear Task event
  clearBtn.addEventListener('click', clearTask);
// Filter task event
filter.addEventListener('keyup', filterTask)
}

//  Get Task from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
     // Create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create Text Node and append to the li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);
  });
}

// Add Task function
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create Text Node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Store in Local storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = '';

  e.preventDefault();
}
//  Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

//Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you Sure?')){
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

  //Removw from LS
  function removeTaskFromLocalStorage(taskItem) {
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

 //Clear Task
 function clearTask() {
  //  taskList.innerHTML = '';
   
  //  Faster
   while(taskList.firstChild) {
     taskList.removeChild(taskList.firstChild);
   }


  //Clear from LS
  clearTasksFromLocalStorage();
  }

  // Clear Tasks from LS
  function clearTasksFromLocalStorage(){
    localStorage.clear();
  }


 //Filter task
  function filterTask(e){
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(function(task){
  const item = task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
  } else{
    task.style.display = 'none';
  }
  });
}
