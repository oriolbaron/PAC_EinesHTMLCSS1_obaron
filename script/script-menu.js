function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    var menuIcon = document.getElementById('menuIcon');

    if (navMenu.style.left === '0px' || navMenu.style.left === '') {
        navMenu.style.left = '-250px';
        menuIcon.src = 'menu-icon.png';
    } else {
        navMenu.style.left = '0';
        menuIcon.src = 'close-icon.png';
    }
}