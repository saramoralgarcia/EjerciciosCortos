var numero = prompt("Introcuzca un numero del 1 al 10");
var tabla = 0;
if(numero <= 0 && numero > 10)
{
    document.write("El numero está fuera de rango")
}else
{
    for(var i = 1; i < 10; i++)
    {
        tabla = numero * [i];
        document.write("<h2>" + i + " x " + numero + " = " + tabla + "<br></h2>");
    }
}