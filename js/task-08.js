const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault;

  const formDate = event.currentTarget.elements;
  console.log(formDate);

  if (formDate.email.value === "" || formDate.password.value === "") {
    return alert("Please fill in all the fields!");
  }

  event.currentTarget.reset();
});
