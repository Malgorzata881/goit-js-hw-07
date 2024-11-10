//Zadanie 1
//Liczba kategorii:
const categories = document.querySelector('#categories');

const categ = categories.querySelectorAll(".item");

console.log(categ);  

console.log("Number of categories: " + categ.length);  // ilość kategorii:

//Tytuły, liczby elementów:
categ.forEach(category => {
   
    const nazwa = category.querySelector('h2').textContent
    console.log("Category: " + nazwa)
   
    const lista_li = category.querySelectorAll('li')
    console.log("Elements: "  + lista_li.length)
});
