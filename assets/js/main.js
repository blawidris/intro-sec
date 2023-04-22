// dropdown

const showMenu = document.querySelectorAll('.dropdown .nav-link');

showMenu.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        let itemDropdownIcon = this.firstElementChild;

        if (itemDropdownIcon.getAttribute('src') === './assets/images/icon-arrow-down.svg') {
            itemDropdownIcon.setAttribute('src', './assets/images/icon-arrow-up.svg')
        } else {
            itemDropdownIcon.setAttribute('src', './assets/images/icon-arrow-down.svg')
        }

        let dropdownMenu = this.nextElementSibling;

        //    add add show class
        dropdownMenu.classList.toggle('show')
    });
})

// hamburger
const showMenuBtn = document.querySelector('.btn-menu');
const closeMenuBtn = document.querySelector('.btn-icon-x');
const bodyDOM = document.querySelector('body');
const navMenu = document.querySelector('.navbar-container');

showMenuBtn.addEventListener('click', (e) => {

    let navItems = document.querySelectorAll('.navbar-nav .nav-item');

    navItems.forEach((item, key) => {
        key++;
        item.classList.add('animate-1')
        item.style.animationDelay = `${key * 150}ms`
    })

    bodyDOM.classList.add('overlay')
    navMenu.classList.add('show', 'animate-3')
    // navMenu.classList.add('')

})

closeMenuBtn.addEventListener('click', (e) => {

    bodyDOM.classList.remove('overlay')
    navMenu.classList.remove('show')
})