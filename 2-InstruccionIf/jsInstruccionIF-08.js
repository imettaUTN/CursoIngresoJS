/*ejercicio 8
ivan metta
Al ingresar una edad menor a 18 años y 
					un estado civil distinto a "Soltero", NO HACER NADA,
					</br>pero si no es asi, y es soltero y no es menor, 
					mostrar el siguiente mensaje: 'Es soltero y no es menor.' */
function mostrar()
{
	var estadoCivilIngresado ;
	var edad;
	estadoCivilIngresado = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(!(edad < 18 || estadoCivilIngresado != "Soltero")){
      alert('Es soltero y no es menor.');
	}
	
}//FIN DE LA FUNCIÓN