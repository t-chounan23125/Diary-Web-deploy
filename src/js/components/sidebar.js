


'use strict';


class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside class="side-bar">
            
            <div class="close-btn">
                <img src="/src/img/chevron (1).png" alt="">
            </div>
            <div class="profile">
                <div class="circle">
                    <img src="/src/img/cat home cat jewelry cats anime cat ideas cat tree cat furniture cat funny cat design cat pattern ca.jpeg" alt="cat">
                </div>
            </div>  
            <div class="side-content">
                <button id="switch-button">change theme</button> 
                
                <img id="flower" src="/src/img/flower.svg" alt="">
                <div class="list-note-title"><p id="list-note-title">All List Note</p></div>
                <div class="all-task-container">  
                    
                </div>
                <div class="line"></div>
                <div class="menu-bar">
                    <div class="home">
                        <div class="name-option" id="name-home">
                            <p>Home</p>
                        </div>
                        <div class="icon">
                            <img id="house" src="/src/img/home.png" alt="icon">
                        </div>
                        
                    </div>
                    <div class="account">
                        <div class="name-option" id="name-profile">
                            <p>account</p>
                        </div>
                        <div class="icon">
                            <img id="profile" src="/src/img/profile.svg" alt="icon">
                        </div>
                      
                    </div>
                    <div class="setting">
                        <div class="name-option" id="name-setting">
                            <p>setting</p>
                        </div>
                        <div class="icon">
                            <img id="setting" src="/src/img/cogwheel.png" alt="icon">
                        </div>
                    </div>
                    <div class="how">
                        <div class="name-option" id="name-quest">
                            <p>help</p>
                        </div>
                        <div class="icon">
                            <img id="question" src="/src/img/question-mark.png" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
            
        </aside>
        `;
        
    }
}
customElements.define('diary-sidebar', Sidebar);




// function to opent side bar
const burgerBtn = document.querySelector(".burger-nav")
const sideBar = document.querySelector(".side-bar")
const mainSect = document.querySelector(".main-section")
const closeBtn = document.querySelector(".close-btn")


burgerBtn.addEventListener("click", () => {
    sideBar.classList.toggle("open-nav");
    mainSect.classList.toggle("blur");

})

closeBtn.addEventListener("click", () =>{
    sideBar.classList.toggle('open-nav');
    mainSect.classList.toggle("blur");
})