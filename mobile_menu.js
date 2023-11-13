const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.links ul');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon')

closeBtn.addEventListener('click', () => {
    closeBtn.classList.remove('show-close-btn');
    mobileMenu.style.display = 'none';
    mobileMenuIcon.classList.add('show-close-btn');
});

mobileMenuIcon.addEventListener('click', () => {
    mobileMenuIcon.classList.remove('show-close-btn');
    closeBtn.classList.add('show-close-btn');
    mobileMenu.style.display = 'flex';
});