function openSidebar() {
    document.querySelector('body').classList.add('no-overflow');
    document.getElementById('aside').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}

function closeSidebar() {
    document.querySelector('body').classList.remove('no-overflow');
    document.getElementById('aside').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}

function gotoContact() {
    window.location.href = '/test/contact.html';
}

function toggleMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");    
}

function toggleDropdown(element) {
    element.classList.toggle('open');
}