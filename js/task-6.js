const divBoxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls button[data-create]");
const destroyBtnEl = document.querySelector("#controls button[data-destroy]");

createBtnEl.addEventListener("click", validation);
destroyBtnEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function validation(event) {
  if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {
    createBoxes(Number.parseInt(inputEl.value));
    inputEl.value = "";
  }
};

function createBoxes(amount) {
  divBoxesEl.innerHTML = "";
  let boxesArray = [];
  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = (30 + (i * 10)) + "px";
    box.style.height = (30 + (i * 10)) + "px";
    boxesArray.push(box);
  };
  divBoxesEl.append(...boxesArray);
};

function destroyBoxes(event) {
    divBoxesEl.innerHTML = "";
};
