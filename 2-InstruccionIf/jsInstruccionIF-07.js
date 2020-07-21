/*
ejercicio 7
Ivan Metta
Al ingresar una edad menor a 18 años y 
					un estado civil distinto a "Soltero", 
					mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 
*/

function mostrar()
{   var estadoCivilIngresado ;
	var edad;
	estadoCivilIngresado = estadoCivil.value;
	edad = parseInt(edad);
	edad = txtIdEdad.value;
	if(!(edad >17|| estadoCivilIngresado == "Soltero"))
	{
	  alert('Es muy pequeño para NO ser soltero.');	 
	}


}//FIN DE LA FUNCIÓN