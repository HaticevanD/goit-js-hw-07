const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, (event) => {
  const rawValue = event.target.value;
  const trimmed = rawValue.trim();

  nameOutput.textContent = trimmed === `` ? `Anonymous` : trimmed;
});
