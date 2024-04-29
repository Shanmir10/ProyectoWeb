document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // funcion para manejar el desplazamiento
    function handleScroll() {
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >= 100);
    }

    //funcion para manejar el cick del boton menu
    function handleMenuButtonClick() {
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');
    }

    //funcion para manejar el anchor de los links
    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // funcion para cerrar el menu cuando clickeas y se muestra el menu pequeño
    function handleCloseOutside(event) {
        if (!menuButton.contains(event.target)) {
            // verifiar si el click fue fuera del boton del menu
            container.classList.remove('menuopen');
            header.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    //cualquier click en el documento
    document.addEventListener('click', handleCloseOutside);
});