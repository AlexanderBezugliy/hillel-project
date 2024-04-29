const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');

btn.addEventListener('click', function(){
    btn.classList.toggle('home-btn-close');
    menu.classList.toggle('active_btn');
})