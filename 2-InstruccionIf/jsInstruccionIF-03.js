function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	var mensaje = "";
	if(edad < 18){
	 mensaje = "Soy menor de edad";
	}
	else{
		 mensaje = "Soy mayor de edad";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN