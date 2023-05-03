let lastScrollTop = 0;

const fadeInAndOut = (elem) => {
  if (lastScrollTop < document.documentElement.scrollTop) {
    elem.classList.remove('show')
    elem.classList.add('hide')
  } else {
    elem.classList.remove('hide')
    elem.classList.add('show')
  }
  
  lastScrollTop = document.documentElement.scrollTop
}

const SimpleFadeIn = (...elems) => {
  let distanceFromRect = 400
  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i]
    let rect = elem.getBoundingClientRect()
    if (rect.top < distanceFromRect) {
      elem.classList.remove('hidden')
      elem.classList.add('fadein')
    }
  } 
}

//header
let header = document.getElementById('header')

//articles
let policy = document.querySelector('.policy')
let _history = document.querySelector('.history')
let contact = document.querySelector('.contact')




//call animation

addEventListener('scroll', () => {
  fadeInAndOut(header)
  SimpleFadeIn(policy, _history, contact)
})

