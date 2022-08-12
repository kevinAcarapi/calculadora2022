//Navegando el DOM
/*
var tituloId = document.getElementById('titulo');
console.log(tituloId);

var titulo = document.getElementsByTagName('h1');
console.log(titulo);
console.log(titulo[0]);

var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);

var hola = document.getElementsByName('hola');
console.log(hola);

var kase = document.getElementsByName('kase');
console.log(kase);

var parrafosQ = document.querySelector('.parrafo');
console.log(parrafosQ);

var parrafosQ2 = document.querySelectorAll('.parrafo');
console.log(parrafosQ2);

var titulosQ = document.querySelectorAll('#titulo');
console.log(titulosQ);

var botonHola = document.querySelectorAll('[name="hola"]');
console.log(botonHola);*/

//Modificando elementos en el DOM
/*
var tituloId = document.getElementById('titulo');
tituloId.textContent += ' Agregado con JS';

var parrafos = document.getElementsByClassName('parrafo');
for (var i = 0; i <= parrafos.length - 1; i++) {
    parrafos[i].textContent += ' Agregado con JS';
}

var botonHola = document.querySelectorAll('[name="hola"]');
botonHola[0].textContent += ' JS';*/

//Insertando elementos en el DOM
/*
const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";

document.body.appendChild(img);

const div = document.createElement("div");
div.textContent = "Ejemplo";
document.body.appendChild(div);

const app = document.createElement("div");
app.id = 'app';
app.textContent = 'app';
div.appendChild(app);
*/

//Eliminar elementos
/*
const h1 = document.querySelector("h1");
h1.remove();*/

//Modificar estilo
/*
const titulo = document.getElementById('titulo');
titulo.style.color = 'red';
*/

//Manejador de eventos
const botHola = document.getElementsByName('hola');
botHola[0].addEventListener('click', function() {
    alert('Holaaaaaaaa');
});