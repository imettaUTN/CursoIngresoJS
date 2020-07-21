/*
ejercicio 9
Ivan Metta

Al presionar el Bot&oacute;n, mostrar un n&uacute;mero Random del 1 al 10 inclusive 
*/
function mostrar()
{
 var max ;
 max= 10;
 var min;
 min = 1;

 alert(Math.floor(Math.random() * (max - min) ) + min);

}//FIN DE LA FUNCIÓN