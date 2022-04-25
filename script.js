const hamburger = document.querySelector(".nav-toggle");
const navContent = document.querySelector(".nav-content");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
    navContent.classList.toggle("nav-content--visible");
})

closeBtn.addEventListener("click", () => {
    navContent.classList.toggle("nav-content--visible");
})
