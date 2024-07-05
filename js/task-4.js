
const form = document.querySelector('.login-form')
form.addEventListener('submit', handlerSubmit)


function handlerSubmit(event) {
  event.preventDefault()
  const data = {}
  const formData = new FormData(event.currentTarget)
  formData.forEach((value, key) => {
    if (!value) {
      alert('All form fields must be filled in')
    return
  } data[key] = value.trim()})
  form.reset()
  console.log(data)
}

