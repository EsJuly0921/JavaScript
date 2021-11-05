/*let animales = { /*Variable de tipo objeto 
    color: 'gris', /*Propiedades
    edad: 5,
    nombre: 'Dream',
    raza: 'Gran Danes',
    tipo: 'Perro',
};*/

/*function animales(/*Parametro tipo, raza, nombre, edad, color){

    let container = document.getElementsByTagName('body')[0];
    let element = document.createElement('div');
    element.innerHTML = `
        <p>Color: ${color} </p>
        <p>Tipo: ${tipo} </p>
        <p>Raza: ${raza} </p>
        <p>Nombre: ${nombre} </p>
        <p>Edad: ${edad} </p>
    `;

    container.appendChild(element);
}*/

function animales (tipo, raza, nombre, edad, color){
    
    this.Tipo = tipo;
    this.Raza = raza;
    this.Nombre = nombre;
    this.Edad = edad;
    this.Color = color;

    this.cambiarNombre = function(nuevoNombre){ /*Método*/
        this.Nombre = nuevoNombre;
    }
}

var animal1 = new animales('Perro', 'Gran Danes', 'Dream', 5, 'Gris');
var animal2 = new animales('Perro', 'Gran Danes', 'Death', 5, 'Arlequín');

console.log(animal1);
console.log(animal2);