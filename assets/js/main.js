const pizzas = [ 
    { id: 1, name: "Calabrese", precio: 900, imagen: "../assets/img/1.jpg" }, 
    { id: 2, name: "Cebollada", precio: 800, imagen: "../assets/img/2.jpg" },
    { id: 3, name: "Albaca", precio: 750, imagen: "../assets/img/3.jpg" },
    { id: 4, name: "Especial", precio: 700, imagen: "../assets/img/4.jpg" },
    { id: 5, name: "Muzza", precio: 650, imagen: "../assets/img/5.jpg" },
    { id: 6, name: "Napolitana", precio: 700, imagen: "../assets/img/6.jpg" }
];

const taskForm = document.querySelector ('.add-form');
const createCard = document.querySelector('#container-pizzas')



const createProductCard = (pizza) => {
    const { imagen, precio, name } = pizza;
    return `
        <div class="product-card">
            <h2>${name}</h2>
            <img src="${imagen}" width="150"/>
            <p>Precio: $${precio}</p>
        </div>
    `
};


const renderProductCard = (pizza) => {
    createCard.innerHTML = createProductCard(pizza);
};


// Funcion submit del product 
const handleFormSubmit = (e) => {
    e.preventDefault();


    // Obtener el valor ingresado del id
    const pizzaId = parseInt(document.getElementById ('pizza-id').value);

    // Buscar la pizza por id
    const pizzaEncontrada = pizzas.find((pizza) => pizza.id === pizzaId);


    // Si se encuentra la pizza la renderizamos, si no mostramos un mensaje

    if (pizzaEncontrada) {
        renderProductCard(pizzaEncontrada);

    // localStorage 
    localStorage.setItem('ultimaPizza', JSON.stringify(pizzaEncontrada));


    } else {
        createCard.innerHTML = `<h3>No se encontro ninguna pizza con ese ID</h3>`;
    }



    // Limpiador de busquedas 
    
    document.getElementById ('pizza-id').value = '';
}




// Ultima pizza 
    const renderUltPizza = () => {
        const ultimaPizza = localStorage.getItem('ultimaPizza');
        if (ultimaPizza) {
            const pizza = JSON.parse(ultimaPizza);
            renderProductCard(pizza);
        }
    }

// funcion iniciadora
const init = () => {
    taskForm.addEventListener('submit', handleFormSubmit);
}


init ()
