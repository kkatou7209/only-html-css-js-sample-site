let lastScrollTop = 0;

const fadeInAndOut = (...elems) => {
  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i]

    if (lastScrollTop < document.documentElement.scrollTop) {
      elem.classList.remove('show')
      elem.classList.add('hide')
    } else {
      elem.classList.remove('hide')
      elem.classList.add('show')
    }
  }
  
  lastScrollTop = document.documentElement.scrollTop
}

// const footerNavFadeInAndOut = (nav) => {
//   if (lastScrollTop < document.documentElement.scrollTop) {
//     elem.classList.remove('show')
//     elem.classList.add('hide')
//   } else {
//     elem.classList.remove('hide')
//     elem.classList.add('show')
//   }

// }

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
let footerNav = document.querySelector('.footer-nav')

//articles
let policy = document.querySelector('.article-policy')
let _history = document.querySelector('.article-history')
let contact = document.querySelector('.article-contact')




//call animation

addEventListener('scroll', () => {
  fadeInAndOut(header, footerNav)
  SimpleFadeIn(policy, _history, contact)
})

