const openPopUp = document.getElementById('pop_up_open')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', () => {
    popUp.classList.add('active')
})
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})
const nav = document.getElementById('nav')
const red =document.getElementById('red')
const navbar_nav = document.getElementById('navbar-nav')

red.addEventListener('click', () =>{
    nav.classList.add('color')
    navbar_nav.classList.add('color')
})

const size = document.getElementById('size')
const navbar = document.getElementById('navbar-nav')
size.addEventListener('input', () => {
    navbar.style.fontSize = size.value + 'px'
})

