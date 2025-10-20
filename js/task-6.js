const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls input"),
  boxesContainer: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  refs.boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    refs.boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.input.value = "";
}

refs.createBtn.addEventListener("click", () => {
  const amount = Number(refs.input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

refs.destroyBtn.addEventListener("click", destroyBoxes);

// styles
controls.classList.add(`controls-style`);
input.classList.add(`input`);
createBtn.classList.add(`create-btn`);
destroyBtn.classList.add(`destroy-btn`);
