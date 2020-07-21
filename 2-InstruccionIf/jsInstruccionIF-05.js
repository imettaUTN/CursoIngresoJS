
/* ejercicio 5
ivan metta 
enunciado: Al ingresar una edad solo debemos informar si la persona
					NO es adolescente.*/
function mostrar()
{	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad < 13 ){
		alert("no soy adolescente");
	}
	if(edad > 17 ){
		alert("no soy adolescente");
	}
}//FIN DE LA FUNCIÓN