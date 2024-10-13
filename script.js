//class active

const navbarNav = document.querySelector('.navbar-nav');

//saat di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


//luar sidebar agar hilang 
const menu = document.querySelector('#menu');


document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});