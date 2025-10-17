//ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.

const categoriesList = document.querySelector(`#categories`);
const categoryItems = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoryItems.length}`);

//ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.
categoryItems.forEach((item) => {
  const title = item.querySelector(`h2`).textContent;
  const elementsCount = item.querySelectorAll(`ul li`).length;
  //item styles
  const innerList = item.querySelector(`ul`);
  innerList.classList.add(`inner-list`);

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
