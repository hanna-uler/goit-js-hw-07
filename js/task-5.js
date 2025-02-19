
const bodyEl = document.querySelector("body");
const colorBtnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

colorBtnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  spanEl.textContent =`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
