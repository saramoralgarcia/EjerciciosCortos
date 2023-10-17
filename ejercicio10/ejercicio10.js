//Apartado A del ejercicio 10

function EjercicioA()
{
var numero = prompt("Introduzca un número del 1 al 12");
var indice = numero - 1;
var diasDelMes = [31 ,28 ,31 ,30 ,31 ,30 ,31 ,31 ,30 ,31 ,30 ,31 ];
if(indice >= 0 && indice < diasDelMes.length)
{
    
    var dias = diasDelMes[indice];
    document.write("El mes " + numero + " tiene " + dias);
}else if(indice <= 0 || indice > diasDelMes.length)
{
    document.write("El número introducido no esta en el rango del 1 al 12");
}else
{
    document.write("no ha introducido numero");
}

// función que redirije a la calculadora

}
function redirigirACalculador()
{
    window.location.href = 'calculadoraE10.html';
}

//Apartado B del ejercicio 10

function EjercicioB(opcion)
{
    // var numero1 = prompt("Introduzca un número");
    //         var numero = prompt("Introduzca el segundo número");
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado;
    switch(opcion)
    {
        case 1:
        {
            resultado = numero1 + numero2;
            break;
        }
        case 2:
        {
            resultado = numero1 - numero2;
            break;
        }
        case 3:
        {
            resultado = numero1 * numero2;
            break;
        }
        case 4:
        {
            resultado = numero1 / numero2;
            break;
        }
        case 5:
        {
            resultado = Math.pow(numero1, numero2);
            break;
        }
    }
    document.getElementById("resultado").textContent = "El resultado de la operación es: " + resultado;
}


function redirigirABotonesDeColores()
{
    window.location.href = 'botonesDeColores.html';
}
//Apartado B del ejercicio 10

function EjercicioC(opcion)
{
    var color;
    switch(opcion)
    {
        case 1:
        {
            color = "blue";
            break;
        }
        case 2:
        {
            color = "green";
            break;
        }
        case 3:
        {
            color = "red";
            break;
        }
    }
    var cambiarColor = document.getElementById("parrafo").style.color = color;

}