//seccion del logo
let root2=document.getElementById('root2');

let logo=document.createElement('div');
logo.classList.add('container','logo')
root2.appendChild(logo);

let row2=document.createElement('div')
row2.classList.add('row')
logo.appendChild(row2)

let col2=document.createElement("div")
    col2.classList.add("col-md-12")
    row2.appendChild(col2)

let img=document.createElement("img")
img.classList.add("img-fluid")
img.setAttribute("src",'images/logo2.jpg')
col2.appendChild(img)
//hasta aqui seccion logo

//seccion de idioma y tema
let root3=document.getElementById('root3');

let container3=document.createElement('div')
container3.classList.add('container')
root3.appendChild(container3)

let row3=document.createElement('div')
row3.classList.add('row')
container3.appendChild(row3)


let root=document.getElementById('root');



//secion de cambio de idioma y tema


let container=document.createElement('div');
container.classList.add('container');
root.appendChild(container);

//row
let row=document.createElement('div')
row.classList.add('row','mt-5')
container.appendChild(row)

//col
let col3=document.createElement('div')
col3.classList.add('col-md-6')
col3.style.marginBottom="20px";
row.appendChild(col3)

// Crear el elemento select
let selectElement = document.createElement("select");
selectElement.classList.add("form-select");
selectElement.setAttribute("aria-label", "Default select example");
col3.appendChild(selectElement)
//selectElement.addEventListener("change", cambiarIdioma);

// Crear la opción predeterminada
let optionDefault = document.createElement("option");
optionDefault.textContent = "Seleccione el idioma";
optionDefault.setAttribute("selected", "selected");
selectElement.appendChild(optionDefault);
// Crear las opciones de idioma
let optionEn = document.createElement("option");
optionEn.value = "en";
optionEn.textContent = "Inglés";
selectElement.appendChild(optionEn);

let optionEs = document.createElement("option");
optionEs.value = "es";
optionEs.textContent = "Español";
selectElement.appendChild(optionEs);

//tema

let col4=document.createElement('div')
col4.classList.add('col-md-6')
row.appendChild(col4)

// Crear el elemento select
let selectTheme = document.createElement("select");
selectTheme.id = "theme";
selectTheme.classList.add("form-select");
selectTheme.setAttribute("aria-label", "Default select example");
col4.appendChild(selectTheme)


// Crear la opción predeterminada
let optionDefaultTheme = document.createElement("option");
optionDefaultTheme.textContent = "Seleccione el tema";
optionDefaultTheme.setAttribute("selected", "selected");
selectTheme.appendChild(optionDefaultTheme);

// Crear las opciones de tema
let optionTheme1 = document.createElement("option");
optionTheme1.value = "1";
optionTheme1.textContent = "Claro";
selectTheme.appendChild(optionTheme1);

let optionTheme2 = document.createElement("option");
optionTheme2.value = "2";
optionTheme2.textContent = "Oscuro";
selectTheme.appendChild(optionTheme2);

let optionTheme3 = document.createElement("option");
optionTheme3.value = "3";
optionTheme3.textContent = "Amarillo";
selectTheme.appendChild(optionTheme3);

selectTheme.addEventListener("change", cambiartema);

function cambiartema() {
    // Obtener el valor seleccionado del select
    let selectedTheme = document.getElementById("theme").value;
    localStorage.setItem("selectedTheme", selectedTheme);

    // Aplicar estilos según el tema seleccionado
    switch (selectedTheme) {
        case "1": // Claro
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            break;
        case "2": // Oscuro
            document.body.style.backgroundColor = "#333333";
            document.body.style.color = "#ffffff";
            break;
        case "3": // Amarillo
            document.body.style.backgroundColor = "#ffffcc";
            document.body.style.color = "#333333";
            break;
        default:
            // Restaurar estilos predeterminados si no se selecciona un tema válido
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
            break;
    }
    
}
// Verificar si hay un tema almacenado en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    let storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
        // Aplicar el tema almacenado
        document.getElementById("theme").value = storedTheme;
        cambiartema();
    }
});





//container
let array=[
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-1.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-2.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-3.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-4.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-5.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-6.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-7.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    },
    {
        titulo:"Hamburguesa Clásica con Queso Cheddar",
        precio:"$21.500",
        imagen:"images/hamburguesa-8.webp",
        titulo2: 'Classic Burger with Cheddar Cheese',
        descrip1: 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
        descripcion:"Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido."
    }
]

document.addEventListener('DOMContentLoaded', function() {
    var storedIdioma = localStorage.getItem('idiomaSeleccionado');
    var selector = document.querySelector('.form-select');
    
    if (storedIdioma) {
        selector.value = storedIdioma;
        cambiarIdioma();
    }

    // Agregar un evento de cambio de idioma para actualizar y almacenar automáticamente
    selector.addEventListener('change', function() {
        cambiarIdioma();
    });
});




function cambiarIdioma() {
    let idioma = document.querySelector('.form-select').value;
    localStorage.setItem('idiomaSeleccionado', idioma);

    let textos = {
        'en': {

            'comprar': 'Buy',
            
            // ... Otros textos en inglés ...
        },
        'es': {
            'comprar': 'Comprar',
            // ... Otros textos en español ...
        }
        // Puedes agregar más idiomas según sea necesario
    };

    array.forEach((elemento, index) => {
        let card = document.querySelectorAll('.card')[index];
        let button = card.querySelector('.btn');
        let h2 = card.querySelector('h2');
        let h3 = card.querySelector('h3');
        let p = card.querySelector('p');

        h2.innerText = elemento.titulo;
        h3.innerText = elemento.precio;
        if(idioma=='en'){
            h2.innerText=elemento.titulo2;
            p.innerText = elemento.descrip1;
        }
        else{
            h2.innerText=elemento.titulo
            p.innerText=elemento.descripcion
        }
       
        button.innerText = textos[idioma]['comprar'];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let storedIdioma = localStorage.getItem('idiomaSeleccionado');
    let selector = document.querySelector('.form-select');

    if (storedIdioma) {
        selector.value = storedIdioma;
        cambiarIdioma();
    }

    selector.addEventListener('change', cambiarIdioma);
});

array.forEach(function (elemento) {
    let col = document.createElement("div");
    col.classList.add("col-md-3");
    row.appendChild(col);

    let card = document.createElement("div");
    card.classList.add('card', 'mb-4');
    col.appendChild(card);

    let img = document.createElement("img");
    img.classList.add("img-fluid");
    img.setAttribute("src", elemento.imagen);
    card.appendChild(img);

    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    card.appendChild(cardbody);

    let h2 = document.createElement("h2");
    h2.innerText = elemento.titulo;
    cardbody.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.innerText = elemento.precio;
    cardbody.appendChild(h3);

    let p = document.createElement("p");
    p.innerText = elemento.descripcion;
    cardbody.appendChild(p);

    let button = document.createElement("button");
    button.classList.add('btn', 'btn-danger', 'w-100', 'mt-4');
    button.style.backgroundColor = "red";
    button.style.border = "none";
    button.innerText = "comprar";
    cardbody.appendChild(button);
});



