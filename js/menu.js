// =================================
// NORTE BRAVO - DATOS DEL MENÚ
// =================================

const menuData = [

    {
        category: "Entradas",
        description: "Para comenzar y compartir.",
        dishes: [
            {
                name: "Queso fundido",
                description: "Queso gratinado acompañado de tortillas.",
                price: 150
            },
            {
                name: "Guacamole",
                description: "Preparado al momento.",
                price: 95
            }
        ]
    },

    {
        category: "Cortes de carne",
        description: "El protagonista de nuestra parrilla.",
        dishes: [
            {
                name: "Ribeye",
                description: "Corte de res a la parrilla.",
                price: 380
            },
            {
                name: "New York",
                description: "Corte de sabor intenso y textura firme.",
                price: 350
            }
        ]
    },

    {
        category: "Parrilladas",
        description: "El fuego sabe mejor cuando se comparte.",
        dishes: [
            {
                name: "Parrillada Norte Bravo",
                description: "Selección de carnes para compartir.",
                price: 650
            }
        ]
    }

];


// =================================
// CONSTRUIR EL MENÚ EN HTML
// =================================

function renderMenu() {

    const container = document.getElementById("menu-container");

    let menuHTML = "";

    menuData.forEach(category => {

        menuHTML += `
            <section class="menu-category">

                <div class="menu-category-heading">
                    <h2>${category.category}</h2>
                    <p>${category.description}</p>
                </div>

                <div class="menu-dishes">
        `;

        category.dishes.forEach(dish => {

            menuHTML += `
                <article class="menu-dish">

                    <div class="dish-details">
                        <h3>${dish.name}</h3>
                        <p>${dish.description}</p>
                    </div>

                    <span class="menu-item-price">
                        $${dish.price.toFixed(2)}
                    </span>

                </article>
            `;

        });

        menuHTML += `
                </div>
            </section>
        `;

    });

    container.innerHTML = menuHTML;
}


// Mostrar el menú al cargar la página

renderMenu();