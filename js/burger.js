document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function() {
        if (menu.style.display === "none") {
            menu.style.display = "block";
            burger.classList.add('active');
        } else {
            menu.style.display = "none";
            burger.classList.remove('active') 
        }
    });
});
