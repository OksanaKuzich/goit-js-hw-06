const inputEl = document.querySelector("#validation-input");
const value = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === value) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
