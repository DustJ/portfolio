const docBody = document.querySelector('body')
const docRoot = document.querySelector(':root')
const gallery = document.querySelector('.gallery__container')
const galleryImages = gallery.querySelectorAll('.gallery__image')
const lightbox = document.querySelector('#lightbox')

// Clip-path origin point based on location clicked 
// const clipPathOrigin = (e)=> {
//   docRoot.style.setProperty('--clip-path-origin-x', `${e.pageX}px`)
//   docRoot.style.setProperty('--clip-path-origin-y', `${e.pageY}px`)
// }

// Lightbox
galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener('click', (e) => {

    // Clone image into lightbox
    let clonedImage = galleryImage.querySelector('img').cloneNode()
    clonedImage.className = 'pinch-zoom'
    lightbox.innerHTML = ''
    lightbox.appendChild(clonedImage)
    
    // Reveal image and prevent page from scrolling
    lightbox.classList.toggle('lightbox--show')
    // docBody.style.overflowY = 'hidden'

    // clipPathOrigin(e)
    // setTimeout(() => {
    //   lightbox.classList.toggle('lightbox--show')
    //   docBody.style.overflow-y = 'hidden'
    // }, 200);

  })
})

// Hide image and allow page to scroll again
lightbox.addEventListener('click', (e) => {
  // clipPathOrigin(e)
  lightbox.classList.toggle('lightbox--show')
  // docBody.style.overflowY = 'scroll'
})