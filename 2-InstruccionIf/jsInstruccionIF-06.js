/* Ejercicio 6
Ivan Metta
Al ingresar una edad debemos informar si la persona es 
					mayor de edad (mas de 18 años) o 
					adolescente (entre 13 y 17 años) o 
					niño (menor a 13 años).*/
function mostrar()
{	var edad;
	var mensaje = '';
	edad = txtIdEdad.value;
	edad = parseInt(edad);

    if(edad <12  ) 
	{
	 alert("soy un niño");
	}
	else
	{
	 if(edad >18  ) 
	 {
	 alert("soy mayor");
	 }
	 else
	 {
	 alert("soy adolescente");
	 }

    }

}//FIN DE LA FUNCIÓN