let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
    cartItem.classList.remove('active')
}
let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
}
let searchbox = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchbox.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
    cartItem.classList.remove('active')
}