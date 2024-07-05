

const lists = document.querySelector("#boxes")
const createButton = document.querySelector("[data-create]")
const deleteButton = document.querySelector("[data-destroy]")
const divControls = document.querySelector("#controls")
const inputValue = divControls.querySelector("input")
let boxValue 
let acc = 30

inputValue.addEventListener('blur', handlerInput)

function handlerInput(event) {
 return boxValue = event.currentTarget.value 
}

createButton.addEventListener('click', createElements) 
  
function createElements() {
  lists.innerHTML = ""
  if (boxValue >= 1 && boxValue <= 100 && !isNaN(boxValue)) {
    for (let i = 0; i < boxValue; i++) {
      const divBoxes = `<div style="width: ${acc}px; height:  ${acc}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px;"></div>`
      lists.insertAdjacentHTML('beforeend', divBoxes)
      acc += 10
    }
    inputValue.value = ""
    acc = 30
  }
}

deleteButton.addEventListener('click', deleteAll)

function deleteAll() {
  lists.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}