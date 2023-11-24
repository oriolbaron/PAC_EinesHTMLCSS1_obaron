document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const overlay = document.getElementById('overlay');
    const menuClose = document.getElementById('menuClose');

    menuIcon.addEventListener('click', function() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', function() {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});