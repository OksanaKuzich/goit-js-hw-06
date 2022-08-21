const formEl = document.querySelector(".login-form");
const formRezult = {};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = event.currentTarget.elements;

  if (formData.email.value === "" || formData.password.value === "") {
    return alert("Please fill in all the fields!");
  }

  formRezult.email = event.currentTarget.elements.email.value;
  formRezult.password = event.currentTarget.elements.password.value;

  console.log(formRezult);

  event.currentTarget.reset();
});
