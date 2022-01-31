const BG_ARR = [
  'link',
  'primary',
  'info',
  'danger',
  'warning',
  'success',
  'dark'
]

function handleMobileNav(obj) {
  if (obj.className.indexOf('is-active') > 0) {
    obj.removeAttribute('class')
    obj.setAttribute('class', 'navbar-burger burger')
    let navBar = document.getElementById('adilHeroNavBar')
    navBar.removeAttribute('class')
    navBar.setAttribute('class', 'navbar-menu')
  } else {
    obj.removeAttribute('class')
    obj.setAttribute('class', 'navbar-burger burger is-active')
    let navBar = document.getElementById('adilHeroNavBar')
    navBar.removeAttribute('class')
    navBar.setAttribute('class', 'navbar-menu is-active')
  }
}

setInterval(() => {
  let doc = document.getElementById('app')
  let hiBtn = document.getElementById('hiBtn')
  let background = BG_ARR[Math.floor(Math.random() * BG_ARR.length)]
  doc.classList.remove(doc.classList[2])
  doc.classList.add(`is-${background}`)

  hiBtn.classList.remove(hiBtn.classList[2])
  hiBtn.classList.add(`is-${background}`)
}, 5000)
