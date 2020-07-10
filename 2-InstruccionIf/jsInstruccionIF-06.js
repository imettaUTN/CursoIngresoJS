function mostrar()
{
	if(txtIdEdad.value >= 13 && txtIdEdad.value <=17 ) {
		alert("soy adolescente");
	}
	if(txtIdEdad.value >= 18) {
		alert("soy mayor de edad");
	}
	if(txtIdEdad.value < 13) {
		alert("soy menor de edad");
	}

}//FIN DE LA FUNCIÓN