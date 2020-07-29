/*
IVAN METTA
EJE 10
una agencia de viajes nos piden informar si hacemos viajes a lugares según 
					la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar


				</br> </br>en Invierno:
				 	Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
				</br></br> en Verano:
				 	Se viaja a Mar del plata y Cataratas solamente
				</br></br> en Otoño:
				 	Se viaja a todos los destinos.
				</br></br> primavera:
				 	solo no se viaja a Bariloche
*/
function mostrar()
{
	var estacionIngresada;
	var destino ;
	estacionIngresada =txtIdEstacion.value;
	destino =txtIdDestino.value;
	alert(estacionIngresada);

	switch(estacionIngresada)
	{
		case "Invierno":
			 switch(destino)
			 {
			 	case "Bariloche":
			 		alert("No se viaja");
			 		break;
			 	default:
			 		alert("Se viaja");
			 		break;
			 }		
		case "Primavera":
			switch(destino)
			 {
			 	case "Bariloche":
			 		alert("Se viaja");
			 		break;
			 	default:
			 		alert("No se viaja");
			 		break;
			 }
		case "Verano":
			switch(destino)
			 {
			 	case "Bariloche":
			 		alert("Se viaja");
			 		break;
			 	default:
			 		alert("No se viaja");
			 		break;
			 }
		case "Otoño":
			alert("Se viaja");
	}

}//FIN DE LA FUNCIÓN