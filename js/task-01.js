// Подсчитывает количество li с классом item

const allCategories = document.querySelectorAll("li.item");
const summCategories = allCategories.length;

console.log(`Number of categories: ${summCategories}`);

// Выводит заголовок и подсчитывает количество элементов с этим подзаголовком

allCategories.forEach((categorie) => {
  console.log(`Category: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.lastElementChild.children.length}`);
});
