const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const selection = document.getElementById('selection')
const error = document.getElementById('error')
const select = document.getElementById('select')
const render =document.querySelector('.render')

const hasError = (variableAVerificar) => {
  isValid = true

  if (!variableAVerificar.length) {
    error.innerHTML = "El campo se encuentra vacio"
    return
  } else if (variableAVerificar > pizzas.length || variableAVerificar < 1) {
    error.innerHTML = "No existe la pizza que ha seleccionado"
    return
  }
  return isValid
}

const pizzaRenderizada = (selection) => {
  const {nombre, ingredientes, precio, imagen} = selection 
  return render.innerHTML = 
  `
  <div class="card">
    <h2>${nombre.toUpperCase()}</h2>
    <p>${ingredientes.join(' , ')}</p>
    <p>Valor: $ ${precio}</p>
    <img src="${imagen}" alt="" srcset="">
  `
}

const save = (election) => {
  localStorage.setItem('savedpizza', JSON.stringify(election))
}

const filter = (pizzasArray, pizzaSelected) => {
  const seleccionada = pizzasArray.filter((pizza) => {return pizza.id == pizzaSelected})
  return pizzaSelected[0]
}

const selectionPizza = () => {
    const valorPizza = selection.value
  contenedorRender.innerHTML = ""
  if (hasError(valorPizza)) {
    error.innerHTML = ""
    saveLS(valorPizza)
    const pizzaFiltrada = filterPizza(pizzas,valorPizza)
    renderizarPizza(pizzaFiltrada)
  }
}

const pizzaSaved = () => {
  const defaultPizza = JSON.parse(localStorage.getItem('pizzaSaved'))
  if (defaultPizza) {
    const filtrarPizza = filter(pizzas, defaultPizza)
    return pizzaRenderizada(filtrarPizza)
  }
}

const init = () => {
  selection.addEventListener('submit', (e) => {e.preventDefault})
  document.addEventListener("DOMContentLoaded", pizzaSaved)
  select.addEventListener('click', select)
}

init()