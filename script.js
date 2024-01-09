const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.onclick = function() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    }

    body.classList.add('dark-theme');
});
