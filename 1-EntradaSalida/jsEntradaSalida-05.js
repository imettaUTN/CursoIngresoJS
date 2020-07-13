/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var sNombre = txtIdNombre.value;
	var sApellido = txtIdEdad.value;
	var sNombreYEdad = "Usted se llama " + sNombre+ " y tiene "+ sApellido +" años";
	alert(sNombreYEdad);
}

/*
Test:

Nombre: ivan edad: 34  resultado Usted se llama ivan y tiene 34 años
Nombre: juan edad: 40 resultado Usted se llama juan y tiene 40 años
Nombre: pedro edad: 50  resultado Usted se llama pedro y tiene 50 años
Nombre: naty edad: 20  resultado Usted se llama naty y tiene 20 años
*/