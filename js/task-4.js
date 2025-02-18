const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", event => {
    eventPreventDefault();
    if (event.target.email.length === 0 || event.target.password.length === 0) {
        alert("All form fields must be filled in");
    }
});
