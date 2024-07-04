
'use strict';


const modal = document.querySelector('.modal');
const addNote = document.querySelector('.add-wrap');
const closeform = document.querySelector('.closebtn');
const mainBackground = document.querySelector('.content-wrapper')



// funtion to open modal
const openModal = function () {
    modal.classList.remove("hidden");
    if (!modal.classList.contains("hidden")) {
        //  trigger the animation for modal
        modal.style.display = "flex";
        modal.style.animation = "modal-open 0.3s ease-in forwards";
        mainBackground.style.filter = "blur(15px)";
        
        

    } else {
        // hide the modal
        modal.style.display = "none";
    }
}

// function to close modal
const closeModal = function () {
    modal.classList.add("hidden");
    modal.style.display = "none";
    mainBackground.style.filter = "none";
    
}

// add event lisener to open and close modal
addNote.addEventListener('click', openModal);
closeform.addEventListener('click', closeModal);