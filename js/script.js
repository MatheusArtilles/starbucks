const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const ativo = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', 'true')
})
btnMobile.addEventListener('touchstart', toggleMenu)

function fechaMenu() {
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
}

function modeDark(){
    let body = document.getElementById('bd')
    body.classList.add('moon')
    let btnDark = document.getElementById('dark')
    btnDark.classList.add('active')
    let btnLight = document.getElementById('light')
    btnLight.classList.remove('active')
}
function modeLight(){
    let body = document.getElementById('bd')
    body.classList.remove('moon')
    let btnLight = document.getElementById('light')
    btnLight.classList.add('active')
    let btnDark = document.getElementById('dark')
    btnDark.classList.remove('active')
}