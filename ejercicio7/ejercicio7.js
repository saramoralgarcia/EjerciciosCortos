var numeroDeNotas = 4;
var notas = [];
var suma = 0;
var notaMayor = 0;
var notaMenor = 10;
for (var i = 0; i < numeroDeNotas; i++)
{
    var insertar = prompt("Inserte calificaciones");
    notas.push(parseFloat(insertar));
}
for (var i = 0; i < notas.length; i++)
{
    suma += notas[i];
}
var promedio = suma/numeroDeNotas;
document.write("El promedio de las notas aportada es: " + promedio);
document.write((promedio >=5) ? " Has Aprobado " + "<br>" : " Has suspendido " + "<br>");
for (var i = 0; i < notas.length; i++)
{
    if(notas[i] > notaMayor)
    {
        notaMayor = notas[i];

    }
}
for (var i = 0; i < notas.length; i++)
{
    if(notas[i] < notaMenor)
    {
        notaMenor = notas[i];

    }
}
document.write("la nota mayor es: " + notaMayor + "<br>");
document.write("la nota menor es: " + notaMenor + "<br>");