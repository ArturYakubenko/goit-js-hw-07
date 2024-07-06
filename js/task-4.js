
const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const data = {};
  const formData = new FormData(event.currentTarget);
  let allFieldsFilled = true;

  formData.forEach((value, key) => {
    if (!value.trim()) {
      allFieldsFilled = false;
    }
    data[key] = value.trim();
  });

  if (!allFieldsFilled) {
    return;
  }

  form.reset();
  console.log(data);
}
