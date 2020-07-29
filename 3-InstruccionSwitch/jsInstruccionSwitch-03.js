/*
IVAN METTA
EJ:3
al seleccionar un mes  informar.
						</br>si es Febrero: " Este mes no tiene mós de 29 diás."
						</br>si NO es Febrero: "Este mes tiene 30 o mós diás"
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño =txtIdMes.value;
	var mensaje;
	switch(mesDelAño) 
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días."
			break;
	    default:
	    	mensaje = "Este mes tiene más de 30 días."
	    	break;
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN