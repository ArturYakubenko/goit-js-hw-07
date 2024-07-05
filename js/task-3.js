

const inputUserName = document.querySelector('#name-input')
inputUserName.addEventListener('input', handlerInput)
const outputUserName = document.querySelector('#name-output')

function handlerInput(event) {
  const name = inputUserName.value.trim()
  if (name) {
    outputUserName.textContent = name
  }
  else {
    outputUserName.textContent = "anonumus"
  }
}
