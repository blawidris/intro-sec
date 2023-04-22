let dropdownMenu = document.querySelectorAll(".dropdown");

dropdownMenu.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    let dropdown = document.querySelector(".dropdown-menu");
    let dropdownIcon = document.querySelector(".dropdown img");

    if (
      dropdownIcon.getAttribute("src") ===
      "./assets/images/icon-arrow-down.svg"
    ) {
      dropdownIcon.setAttribute(
        "src",
        "./assets/images/icon-arrow-up.svg"
      );
    } else {
      dropdownIcon.setAttribute(
        "src",
        "./assets/images/icon-arrow-down.svg"
      );
    }

    dropdown.classList.toggle("show");
    // console.log(this.firstElementChild())
  });
});

const showMenuBtn = document.querySelector('.btn-menu');
const closeMenuBtn = document.querySelector('.btn-icon-x');
const bodyDOM = document.querySelector('body');
    const navMenu = document.querySelector('.navbar-container'); 

showMenuBtn.addEventListener('click', (e)=>{
   
    let navItems = document.querySelectorAll('.navbar-nav .nav-item');

    navItems.forEach((item, key)=>{
      key++;
      item.classList.add('animate-1')
      item.style.animationDelay = `${key * 150}ms`
    })

    bodyDOM.classList.add('overlay')
    navMenu.classList.add('show', 'animate-3')
    // navMenu.classList.add('')
    
})

closeMenuBtn.addEventListener('click', (e)=>{
  
    bodyDOM.classList.remove('overlay')
    navMenu.classList.remove('show')
})