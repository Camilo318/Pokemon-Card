document.addEventListener('DOMContentLoaded',
swal('🙀', 'Go ahead and catch em all'))

const cards = document.querySelectorAll('.game__card')

cards.forEach(card => card.addEventListener('click', flip))

function flip() {
    this.classList.toggle('visible')
}