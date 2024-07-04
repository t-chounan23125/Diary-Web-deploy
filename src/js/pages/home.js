'use strict';


let titleInput = document.getElementById("modal-title");
let dateInput = document.getElementById("time");
let textInput = document.getElementById("modal-text");
let saveBtn = document.getElementById('save-btn');
let message = document.getElementById('message')
let display = document.querySelector('.tasks-container')
let trash = document.getElementById('trash');
let allTasksContainer = document.querySelector('.all-task-container');


// add event listener to save input data
saveBtn.addEventListener("click", (e) => {
    console.log("got it ")
    e.preventDefault();
    formValidation();
    
});

let formValidation = () => {
    if (textInput.value === '') {
        console.log("failure");
        message.innerHTML = "There's no text.. !!"
    }
    else {
        console.log("sucess");
        message.innerHTML = " ";
        takeData();
        closeModal();
        resetForm(); 

    }
}





//empty array to store obj
let data = [{}];


//function to get and store data
let takeData = () => {
    data.unshift({
        text: textInput.value,
        date: dateInput.value,
        title: titleInput.value,
    })
    localStorage.setItem("data", JSON.stringify(data));
    
    createTasks();
    
}


// function to display data as cards task
let createTasks = () => {
    display.innerHTML = "";
    let allTasksContainer = document.querySelector('.all-task-container');
    allTasksContainer.innerHTML = ""; // Clear the previous titles

    data.map((x, y) => {
        // Add task cards
        display.innerHTML += `
            <div class="task" id=${y}>
                <p id="dt">${x.date}</p>
                <div class="title-box">
                <div class="text-title"><p>${x.title}</p></div>
                </div>
                <p id="text">${x.text} </p>
            
                <span class="option">
                    <img onClick="editTask(this)" src="/src/img/edit (2).png" alt="">
                    <img onClick="deleteTask(this)" src="/src/img/recycle-bin.png" alt="">
                </span>
            </div>
        `;

        // Add task titles to the all-task-container
        allTasksContainer.innerHTML += `
            <div class="task-contain-title">
                <h4>${x.title || "Untitled"}</h4>
            </div>
        `;
    });

    resetForm();
};

// Call createTasks function to display the tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    createTasks();
});


//functin to delete card task
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
}

//function to edit card task 
let editTask = (e) => {
    let selected = e.parentElement.parentElement;
    titleInput.value = selected.querySelector('.title-box p').innerHTML;
    dateInput.value = selected.querySelector('#dt').innerHTML;
    textInput.value = selected.querySelector('#text').innerHTML;
    deleteTask(e);
    openModal();
}





//function to reset form
let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    titleInput.value = "";
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
})();
(() => {
    createTasks();
})();






// function to switch background image
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const switchButton = document.getElementById('switch-button');

    const backgrounds = [
        'url("/src/img/kou-11-1.jpg")',
        'url("/src/img/kou-11.jpg")',  
        'url("/src/img/kou-kou-11-2.jpg")',
        'url("/src/img/kou-11.jpg")'
    ];

    let currentBackgroundIndex = 0;

    const updateBackground = () => {
        
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    };

    
    body.style.backgroundImage = backgrounds[currentBackgroundIndex];

    switchButton.addEventListener('click', updateBackground);
});