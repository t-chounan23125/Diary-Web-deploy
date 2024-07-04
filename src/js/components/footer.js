'use strict';

// Footer Component
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="copy-right">
                <div class="credit">
                    <p>Background image by :<a href="https://www.artstation.com/artwork/KrZr34">Kou (寇)</a></p>
                </div>
                <div class="email">
                    <p>Artist email: email-250197343@qq.com </p>
                </div>
                <div class="developer"></div>
                <p><span><img src="/src/img/right.png" alt="icon"></span> 2024Chounan</p>
            </div>
            <div class="social-media">
                <div class="close-footer-btn"><img src="/src/img/chevron (3).png" alt="icon"></div>
                <h4>Let's connect</h4>
                <div class="media">
                    <img src="/src/img/instagram (2).png" alt="">
                    <img src="/src/img/email.png" alt="">
                    <img src="/src/img/pinterest (1).png" alt="">
                </div>
            </div>
       </footer>  `;
    }
}
customElements.define('diary-footer', Footer)


const footerBtn = document.querySelector(".footer-btn");
const footer = document.querySelector("footer");
const closeFooterBtn = document.querySelector(".close-footer-btn")

// add eventlistener to open footer
footerBtn.addEventListener("click", () => {
    footer.classList.toggle("open-footer");
})


// add eventlistener to close footer
closeFooterBtn.addEventListener("click", () => {
    footer.classList.toggle("open-footer");
})
