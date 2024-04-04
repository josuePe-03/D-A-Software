document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón del menú y el navbar
    var menuButton = document.querySelector('.tootle-navbar');
    var navbar = document.getElementById('navbar');

    // Función para mostrar u ocultar el navbar
    function toggleNavbar() {
      // Verificar si el navbar está oculto
      if (navbar.classList.contains('hidden')) {
        // Mostrar el navbar
        navbar.classList.remove('hidden');
      } else {
        // Ocultar el navbar
        navbar.classList.add('hidden');
      }
    }

    // Agregar un evento de escucha al botón del menú
    menuButton.addEventListener('click', toggleNavbar);

    // Función para manejar el cambio de tamaño de la ventana
    function handleResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // Si el ancho de la ventana es 768px o más, remover la clase 'hidden'
        navbar.classList.remove('hidden');
      } else {
        // Si el ancho de la ventana es menos de 768px, agregar la clase 'hidden'
        navbar.classList.add('hidden');
      }
    }

    // Llamar a la función handleResize al cargar la página
    handleResize();

    // Agregar un evento de escucha para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
});
