const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
nameInputEl.addEventListener("input", () => {
    nameOutputEl.textContent = nameInputEl.value.trim();
    if (nameOutputEl.textContent.length === 0) {
        nameOutputEl.textContent = "Anonymous"
    };
});