const controlPanelEl = document.querySelector("#controls");
const divBoxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls button[data-create]");
const destroyBtnEl = document.querySelector("#controls button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

createBtnEl.addEventListener("click", validation);
destroyBtnEl.addEventListener("click", destroyBoxes);

// Trial #7
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


// Trial #6 Also works but not perfect
// function validation(event) {
//   if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {
//     createBoxes(Number.parseInt(inputEl.value));
//     inputEl.value = "";
//   }
// }
// function createBoxes(amount) {
//   let boxesArray = [];
//   for (let i = 0; i < amount; i++) {
//     let box = document.createElement("div");
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.width = (30 + (i * 10)) + "px";
//     box.style.height = (30 + (i * 10)) + "px";
//     console.log(box);
//     boxesArray.push(box);
//   };
//   divBoxesEl.append(...boxesArray);
// }

// createBtnEl.addEventListener("click", validation);


// Trial #5 Works the best so far but not exactly what I need

// function validation(event) {
//   if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {
//     // const num = Number.parseInt(inputEl.value);
//     createBoxes(Number.parseInt(inputEl.value));
//     inputEl.value = "";
//   }
// }
// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.style.backgroundColor = getRandomHexColor();
//     newDiv.style.width = (30 + (i * 10)) + "px";
//     newDiv.style.height = (30 + (i * 10)) + "px";
//     divBoxesEl.appendChild(newDiv);
//   }
// }

// createBtnEl.addEventListener("click", validation);


// Trial #4 - Works!!
// const amount = 5; // Set the amount of elements you want

// for (let i = 0; i < amount; i++) {
//     let newDiv = document.createElement("div");
//   newDiv.style.backgroundColor = getRandomHexColor();
//   newDiv.style.width = (30 + (i * 10)) + "px";
//   newDiv.style.height = (30 + (i * 10)) + "px";
//     divBoxesEl.appendChild(newDiv);
// }


// Trial #3

// function createBoxes(amount){
//   for (let i = 0; i < amount; i++) {
//     let boxEl = document.createElement("div");
//     boxEl.style.width = getBoxSize(i);
//   boxEl.style.height = getBoxSize(i);
//   boxEl.style.backgroundColor = getRandomHexColor();
//   divBoxesEl.append(boxEl);
//   };
// };

// const amount = Number.parseInt(inputEl.value);
// console.log(createBoxes(4));


// createBtnEl.addEventListener("click", setAmount);
// function setAmount(event) {
//   if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {

//     return createBoxes(Number.parseInt(inputEl.value));
// };
// };

// Trial #2
// createBtnEl.addEventListener("click",setAmount);
// function setAmount(event) {
//   let amount = 0;
//   step = "10px";
//   if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {
//     amount = Number.parseInt(inputEl.value);
//   }
//   return console.log("amount: ", amount);
// };
// createBtnEl.addEventListener("click", createBoxes);
// function createBoxes(amount) {
//   console.log("create boxes is working");
//   for (let i = 0; i < amount; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.style.width = "30 + (i * 10)" + "px";
//     newDiv.style.height = "30 + (i * 10)" + "px";
//     newDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//     divBoxesEl.appendChild(newDiv);
//   }
// }



// Trial #1
// inputEl.addEventListener("change", setAmount);

// function setAmount(event) {
//   let amount = 0;
//   if (Number.parseInt(inputEl.value) >= 1 && Number.parseInt(inputEl.value) <= 100) {
//     amount = Number.parseInt(inputEl.value);
//   }
//   return console.log("amount: ", amount);
// };

// createBtnEl.addEventListener("click", testFunc);
// function testFunc(event) {
//   console.log("still working");
// }

// function createBoxes(amount) {
//     for (let i = 0; i < amount; i++) {
//       let newDiv = document.createElement("div");
//       newDiv.style.width = 30 + (i * 10);
//       newDiv.style.height = 30 + (i * 10);
//       newDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
//       divBoxesEl.appendChild(newDiv);
//     }
// }

// Trash
// const container = document.getElementById("container");
// const numberOfElements = 5; // Set the amount of elements you want



// some loop x amount times - each adds div? to what??? string or array
// can I set the amount of the same elements when I want to create ones in JS?


// console.log("text cont: ", inputEl.textContent); - doesnt work
// console.log("value: ", inputEl.value);
// console.log(typeof (inputEl.value));

// console.log(controlsBtnEl);
// console.log(document.querySelector("#controls button[data-create]").hasAttribute("data-create"));
// console.log(document.querySelector("#controls button[data-destroy]").hasAttribute("data-destroy"));

// createBtnEl.addEventListener("click",)
// let amount = 0;
// if (inputEl.) {
  
// }

  
// }
// destroyBtnEl.addEventListener("click",)
// function destroyBoxes(event) {
  
// }