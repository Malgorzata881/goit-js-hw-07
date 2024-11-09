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

//Zadanie 2

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients')

const ingredientsLi=[]

ingredients.forEach(ingredient => {
 
  const li=document.createElement('li')
   li.textContent= ingredient ;
   li.classList.add('item')
   ingredientsLi.push(li)
  })
 
ulIngredients.append(...ingredientsLi)

//Zadanie 3

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('ul.gallery')

const imagesHTML= images.map(image =>
  `<li>
       <img src="${image.url}" alt="${image.alt}">
       </li>`
).join("")


console.log(imagesHTML)

gallery.insertAdjacentHTML('beforeend', imagesHTML)