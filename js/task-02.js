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