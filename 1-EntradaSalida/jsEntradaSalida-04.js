/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var sNombreIngresado = prompt("Nombre","Ingrese Nombre");
	txtIdNombre.value = sNombreIngresado;
	
}

/* Test
Nombre ingresado : Juan  resultado : muestra Juan
Nombre ingresado : Pedro  resultado : muestra Pedro
*/