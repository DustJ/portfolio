const menuButton = document.querySelector('#menu-button')
const slider = document.querySelector('#menu-wrapper')
const menuProjects = slider.querySelectorAll('.menu-item')
const article = document.querySelector('article')
const articleImages = article.querySelectorAll('img')
const lightbox = document.querySelector('#lightbox')
let isDown = false
let startX
let scrollLeft



// 📃 Menu button
const menuToggle = ()=> {
  document.body.dataset.menu = document.body.dataset.menu === "true" ? "false" : "true"
}

menuButton.addEventListener('click', () => {
  menuToggle()
})

// 👆 Click/Tap and drag
slider.addEventListener('mousedown', (e) => {
  isDown = true
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
})

slider.addEventListener('mouseup', () => {
  isDown = false
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const distanceDrug = (x - startX) * 1.5
  slider.scrollLeft = scrollLeft - distanceDrug
})

// 😲 menu projects interaction
menuProjects.forEach((menuProject) => {
  menuProject.addEventListener('click', () => {
    menuToggle()
    articleSwap(menuProject.dataset.project)
  })
})

const articleSwap = (projectName)=> {
  article.insertAdjacentHTML('beforebegin', `<h3>${projectName}</h3>`)
}


// 🎨 Zoomable images
lightbox.addEventListener('click', () => {
  lightbox.classList.toggle('show')
})

articleImages.forEach((articleImage) => {
  articleImage.addEventListener('click', () => {
    let clone = articleImage.cloneNode()
    clone.className = ''
    lightbox.innerHTML = ''
    lightbox.appendChild(clone)
    lightbox.classList.toggle('show')
  })
})