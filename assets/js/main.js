const pizzas = [ 
{
    id: 1,
    name: "Calabrese",
    precio: 900,
    imagen: `<img src="/assets/img/1.jpg">`

}, 

{
    id: 2,
    name: "cebollada",
    precio: 800,
    imagen: `<img src="/assets/img/2.jpg">`

},

{
    id: 3,
    name: "albaca",
    precio: 750,
    imagen: `<img src="/assets/img/3.jpg">`

},

{
    id: 4,
    name: "Especial",
    precio: 700,
    imagen: `<img src="/assets/img/4.jpg">`

},

{
    id: 5,
    name: "Muzza",
    precio: 650,
    imagen: `<img src="/assets/img/5.jpg">`

},

{
    id: 6,
    name: "napolitana",
    precio: 700,
    imagen: `<img src="/assets/img/6.jpg">`

},
]; 


const form = document.getElementById("Formulario");
const resultado = document.getElementById("container-pizzas");


// Renderizar la pizzas
const renderPizzas = (pizzas) => {
    resultado.innerHTML = `
    <div class="card-pizza">
        <h2> ${pizzas.name}</h2>
        <img src="${pizzas.imagen}">
        <p>Precio: $${pizzas.precio}</p>
    </div>
    `;
};

// Renderizar un mensaje de  error
const renderError = (message) => {
    resultado.innerHTML = `<div class="error">${message}</div>`;
};



// Obtener id por  pizzas
const pizza = pizzasId(inputValue);


// Evento submit del formulario

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = parseInt(document.getElementById("inputnumber").value);


    // Validar si esta vacio el input 
    if (!inputValue) {
        renderError("Por favor ingrese un número");
        return;
    }

    // Si se encuentra el id de la pizza se renderiza
    const pizza = getElementById (pizzas);
    
    if (pizza) {
        renderPizzas(pizza  );
    } else {
        renderError("No hay ninguna pizza con ese número");
    }

});
