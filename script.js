// Función que gestiona la visualización del menú
const Mostrarmenu = (headerToggle, navbarId) => {
  // Selecciona el botón que alterna el menú usando su ID
  const toggleBtn = document.getElementById(headerToggle);
  // Selecciona el elemento del menú usando su ID
  const nav = document.getElementById(navbarId);

  // Verifica que ambos parámetros estén definidos
  if (toggleBtn && nav) {
    // Cambié headerToggle y navbarId por toggleBtn y nav
    // Añade un evento de clic al botón de alternancia
    toggleBtn.addEventListener("click", () => {
      // Alterna la clase 'show-menu' en el menú para mostrar/ocultar
      nav.classList.toggle("show-menu");
      // Alterna la clase 'bx-x' en el botón para cambiar su apariencia
      toggleBtn.classList.toggle("bx-x");
    });
  }
};

// Llama a la función Mostrarmenu con los IDs específicos
Mostrarmenu("header-toggle", "navbar");

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces de navegación que tienen la clase 'nav__link'
  const linkcolor = document.querySelectorAll(".nav__link");

  // Función que gestiona el cambio de color del enlace activo
  function colorLink() {
    // Elimina la clase 'active' de todos los enlaces
    linkcolor.forEach((item) => item.classList.remove("active"));
    // Añade la clase 'active' al enlace que se ha clicado
    this.classList.add("active");
  }

  // Asigna un evento de clic a cada enlace de navegación
  linkcolor.forEach((item) => item.addEventListener("click", colorLink));

  // Selecciona el contenido principal usando su ID
  const mainContent = document.getElementById("main-content");
  // Selecciona el contenido de la biblioteca usando su ID
  const libraryContent = document.getElementById("library-content");
  // Selecciona el contenido de la biblioteca usando su ID
  const librarytadContent = document.getElementById("librarytad-content");

  // Función para mostrar la sección objetivo
  function showSection(targetSection) {
    // Ocultar ambas secciones
    mainContent.style.display = "none";
    libraryContent.style.display = "none";
    librarytadContent.style.display = "none";

    // Mostrar la sección objetivo
    targetSection.style.display = "block";
  }

  // Eventos de clic para los enlaces del menú
  const navLinks = document.querySelectorAll(".nav__dropdown-item, .nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      const sectionId = this.getAttribute("href");

      let targetSection;
      if (sectionId === "#section2") {
        targetSection = libraryContent;
      } else if (sectionId === "#section3") {
        targetSection = librarytadContent; // Mostrar la sección de LibraryTAD
      } else {
        targetSection = mainContent; // Por defecto, muestra el contenido principal
      }

      // Mostrar la sección objetivo
      showSection(targetSection);
    });
  });
});
