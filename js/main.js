// =================================
// NORTE BRAVO - FUNCIONES GENERALES
// =================================


// Cargar componentes HTML
async function loadComponent(id, file) {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`No se pudo cargar: ${file}`);
    }

    const content = await response.text();

    document.getElementById(id).innerHTML = content;
}


// Inicializar página
async function initializePage() {

    await loadComponent(
        "site-header",
        "components/header.html"
    );

    await loadComponent(
        "site-footer",
        "components/footer.html"
    );

    initializeNavigation();
    setActiveNavigation();
}


// Menú móvil
function initializeNavigation() {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    toggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("show");

        toggle.setAttribute("aria-expanded", isOpen);

        toggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
    });
}


// Identificar la página actual
function setActiveNavigation() {

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });
}


// Ejecutar inicialización
initializePage().catch(console.error);