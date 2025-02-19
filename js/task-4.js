const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", loginSubmit);
function loginSubmit(event) {
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.password.value === "") {
        return alert("All form fields must be filled in");
    };

    const loginData = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim(),
    };
    console.log(loginData);
    loginFormEl.reset();
};
