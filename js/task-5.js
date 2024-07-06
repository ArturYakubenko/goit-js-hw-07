

const clickMe = document.querySelector('.change-color');
const body = document.querySelector('body');
let colorName = document.querySelector('.color');

clickMe.addEventListener('click', () => hendlerClick(body, colorName));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hendlerClick(element, text) {
  const color = getRandomHexColor();
  element.style.backgroundColor = color;
  text.textContent = color;
}