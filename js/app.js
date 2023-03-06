const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const favicon = document.getElementById("favicon");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

document.querySelector("#sign-up-btn").addEventListener("click", () => {
    document.title = "Sign-Up Page";
    favicon.setAttribute("href", "images/signup.ico");
});

document.querySelector("#sign-in-btn").addEventListener("click", () => {
    document.title = "Login Page";
    favicon.setAttribute("href", "images/login.ico");
});
