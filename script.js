// Función que gestiona la visualización del menú
const Mostrarmenu = (headerToggle, navbarId) => {
  // Obtiene el botón de toggle y la barra de navegación mediante sus IDs
  const toggleBtn = document.getElementById(headerToggle);
  const nav = document.getElementById(navbarId);

  // Verifica si ambos elementos existen
  if (toggleBtn && nav) {
    // Añade un evento 'click' al botón de toggle
    toggleBtn.addEventListener("click", () => {
      // Cambia la clase del menú para mostrar u ocultar el menú
      nav.classList.toggle("show-menu");
      // Cambia la clase del botón para mostrar un ícono diferente
      toggleBtn.classList.toggle("bx-x");
    });
  }
};

// Inicializa el menú pasando los IDs del botón y la barra de navegación
Mostrarmenu("header-toggle", "navbar");

// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces de navegación
  const linkcolor = document.querySelectorAll(".nav__link");

  // Función que cambia el color del enlace activo
  function colorLink() {
    // Remueve la clase 'active' de todos los enlaces
    linkcolor.forEach((item) => item.classList.remove("active"));
    // Añade la clase 'active' al enlace que fue clicado
    this.classList.add("active");
  }

  // Añade el evento 'click' a cada enlace para ejecutar colorLink
  linkcolor.forEach((item) => item.addEventListener("click", colorLink));

  // Obtiene las secciones del contenido principal y de la biblioteca
  const mainContent = document.getElementById("main-content");
  const librarytadContent = document.getElementById("librarytad-content");
  // Crea un array con las subsecciones
  const subsections = [
    document.getElementById("subsection1"),
    document.getElementById("subsection2"),
    document.getElementById("subsection3"),
    document.getElementById("subsection4"),
    document.getElementById("subsection5"),
  ];

  // Función que oculta todas las secciones y muestra la sección seleccionada
  function showSection(targetSection) {
    // Oculta el contenido principal y de la biblioteca
    mainContent.style.display = "none";
    librarytadContent.style.display = "none";
    // Oculta todas las subsecciones
    subsections.forEach((subsection) => {
      subsection.style.display = "none";
    });

    // Muestra la sección objetivo si está definida
    if (targetSection) {
      targetSection.style.display = "block";
    }
  }

  // Selecciona todos los enlaces de dropdown y de navegación
  const navLinks = document.querySelectorAll(".nav__dropdown-item, .nav__link");
  navLinks.forEach((link) => {
    // Añade un evento 'click' a cada enlace
    link.addEventListener("click", function (event) {
      // Previene la acción por defecto del enlace
      event.preventDefault();
      // Obtiene el ID de la sección objetivo desde el atributo href
      const sectionId = this.getAttribute("href");

      let targetSection;
      // Determina cuál sección mostrar según el ID
      if (sectionId === "#main-content") {
        targetSection = mainContent;
      } else if (sectionId === "#librarytad-content") {
        targetSection = librarytadContent;
      } else {
        targetSection = document.getElementById(sectionId.substring(1));
      }

      // Llama a la función para mostrar la sección objetivo
      showSection(targetSection);
    });
  });

  // Selecciona todos los dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    // Obtiene el submenu dentro de cada dropdown
    const submenu = dropdown.querySelector(".sub-menu");

    // Añade un evento 'mouseenter' para mostrar el submenu
    dropdown.addEventListener("mouseenter", () => {
      submenu.classList.add("show-submenu");
    });

    // Añade un evento 'mouseleave' para ocultar el submenu
    dropdown.addEventListener("mouseleave", () => {
      submenu.classList.remove("show-submenu");
    });
  });
});
