const bar = document.getElementById("bars");
const hide = document.getElementById("close");
const nav = document.querySelector(".nav-links");


bar.addEventListener('click', () => {
    nav.style.right = "0";
});

hide.addEventListener('click', () => {
    nav.style.right = "-300px"
});