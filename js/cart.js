const cart = function() {
    const cartBtn = document.querySelector('.button-cart')
const cartModal = document.getElementById('modal-cart')
const closeBtn = cartModal.querySelector('.modal-close')

function openCart() {
//cart.style.display = 'flex'
cartModal.classList.add('show')
}

function closeCart() {
    cartModal.classList.remove('show')
}

cartBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
}

cart()

