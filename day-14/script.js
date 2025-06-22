// Combine DOM 

const intro = document.querySelector("#intro"),
    agin = document.querySelector("#agin");

agin.innerHTML = localStorage.getItem("value")

intro.addEventListener("keyup", display); 
function display() {
    localStorage.setItem('value', intro.value);
    agin.innerHTML = localStorage.getItem("value")
}


// Events

// first 

document.getElementById('btn-1').onclick = function() {
    document.getElementById('text-h4').innerText = 'The text has been change! ';
    document.getElementById('text-p').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
};

// scound

 document.getElementById('btn2').onclick = function() {
    const divstyle = document.getElementById('divstyle');
    divstyle.style.backgroundColor = '#0084ff';
    const iconstyle = document.getElementById('iconstyle');
    iconstyle.style.color = '#fff';
    const titlestyle = document.getElementById('titlestyle');
    titlestyle.style.color = '#fff';
    const pstyle = document.getElementById('pstyle');
    pstyle.style.color = '#fff';
    const btn2 = document.getElementById('btn2');
    btn2.style.backgroundColor = '#fff';
    btn2.style.color = 'darkblue';
};

// tirth 

document.getElementById('btn-3').onclick = function() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.innerText = 'Item ' + (itemList.children.length + 1);
    itemList.appendChild(newItem);
};


// Storage 


document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task) {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = '';
    }
}

function addTaskToDOM(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        removeTaskFromLocalStorage(task);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Form 

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;


    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('message', message);

    
    alert('Data stored successfully!');
});