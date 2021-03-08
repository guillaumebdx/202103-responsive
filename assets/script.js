const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');
//querySelector : Ajouter le # ou le .
burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('display-block')
})
