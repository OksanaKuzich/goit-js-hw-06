function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

const boxesEl = document.querySelector("#boxes");
const arrayBox = [];

let amount = 0;

const onInputChangeHandler = (event) => {
  amount = Number(event.currentTarget.value);
};

btnCreate.addEventListener("click", createBoxes);
inputEl.addEventListener("input", onInputChangeHandler);

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    const hexColor = getRandomHexColor();
    const divEl = document.createElement("div");
    arrayBox.push(divEl);
    divEl.style.display = "inline-block";
    divEl.style.backgroundColor = hexColor;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
  }
  boxesEl.append(...arrayBox);
  inputEl.value = "";
  amount = 0;
  arrayBox.length = 0;
}

function destroyBoxes() {
  const boxes = boxesEl.querySelectorAll("div");
  boxes.forEach((el) => el.remove());
  arrayBox.length = 0;
}
