var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
const igual = document.getElementsByName("igual");
const borrar = document.getElementsByName("borrar");

var operandoActual = "";
var operador = "";
var operandoAnterior = "";

resultado = 0


teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        operandoActual += tecla.innerText;
        pantalla[0].textContent = operandoActual;

        console.log("actual " + operandoActual, typeof(operandoActual))

        //operandoAnterior = operandoActual;

        //operandoActual = "";

        console.log("anterior " + operandoAnterior, typeof(operandoAnterior))

        console.log(operandoActual, typeof(operandoActual))


    });
});

console.log(operandoActual);

operadores.forEach(function(operando){
    operando.addEventListener("click", function() {

        operador = operando.innerText;

        operandoAnterior = operandoActual;

        operandoActual = "";

    })
});

console.log(operandoAnterior);

igual.forEach(function (resultado) {
    resultado.addEventListener("click", function () {

        //resultado =  parseFloat(operandoAnterior) + parseFloat( operandoActual);
        // console.log(resultado);

        switch (operador) {
            case "+":
                resultado =  parseFloat(operandoAnterior) + parseFloat( operandoActual);
                console.log(resultado)
                break;

            case "-":
                resultado =  parseFloat(operandoAnterior) - parseFloat(operandoActual);
                console.log(resultado)
                break;
            
            case "*":
                resultado =  parseFloat(operandoAnterior) * parseFloat(operandoActual);
                console.log(resultado)
                break;

            case "/":
                resultado =  parseFloat(operandoAnterior) / parseFloat(operandoActual);
                console.log(resultado)
                break;

            default:
                break;
        }

        if (resultado == Infinity) {
            console.log("asd")
        }

        pantalla[0].textContent = resultado;
    });
});

borrar.forEach(function (eliminar) {
    eliminar.addEventListener("click", function () {
        pantalla[0].textContent = "";
        // resultado = "";

        operandoActual = "";

        operandoAnterior = "";
    });
});


