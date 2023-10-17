function DobleDeUnNumero()
{
    var numero = prompt("Introduce el número que quieras doblar");
    if(numero > 0)
    {
        var doble = numero * 2;
        document.write("El doble de: " + numero + " es " + doble);
        
    }else
    {
        document.write("No puedes utilizar numero igual o menor a 0");
    }
    document.write( '<br><a href="./ejercicio9.html">Volver al botón</a>');
    document.write('<br><a href="../index.html">Volver al menu</a>');
}
