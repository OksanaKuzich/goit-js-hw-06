const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liItems = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  liItems.push(item);
});

const list = document.querySelector("ul");
list.append(...liItems);
