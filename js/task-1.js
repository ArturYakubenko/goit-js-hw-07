const ctList = document.querySelector('#categories')

const items = ctList.querySelectorAll('.item')

console.log(`number of catigories ${items.length}`)

items.forEach(item => {
  const title = item.querySelector("h2").textContent
  const elements = item.querySelectorAll("li").length


console.log(`category ${title}`)
console.log(`elements ${elements}`)
  })

