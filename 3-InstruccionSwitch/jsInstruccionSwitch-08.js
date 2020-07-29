/*
IVAN METTA
EJE 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;
	switch(horaDelDia) 
	{
		case "Cataratas":
			alert("Hace Calor");
			break;
		default:
			alert("Hace Frio");
			break;
		
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN