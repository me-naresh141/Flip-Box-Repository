let body = document.querySelector('body')
let parentDiv = document.createElement('div')
let h1 = document.querySelector('h1')
parentDiv.classList.add('parentDiv')
body.append(parentDiv)

for (let i = 1; i <= 12; i++) {
  let childBox = document.createElement('div')
  childBox.className = 'childBox'
  let numdiv = document.createElement('div')
  numdiv.classList.add('numdiv')
  numdiv.innerText = i
  childBox.append(numdiv)
  parentDiv.append(childBox)

  function fill() {
    numdiv.style.display = 'block'
    numdiv.style.color = 'pink'
    childBox.style.border = '5px dashed pink'
  }
  setInterval(function () {
    numdiv.style.display = 'none'
    childBox.style.border = '6px double black'
  }, 5000)
  childBox.addEventListener('click', fill)
}
