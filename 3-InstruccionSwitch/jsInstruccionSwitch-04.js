/*
IVAN METTA
EJE 4

al seleccionar un mes  informar.
						</br>si tiene 28 días.
						</br>si tiene 30 días.
						</br>si tiene 31 días.

*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
    var mensaje;
	mesDelAño =txtIdMes.value;
	switch(mesDelAño) 
	{
		case "Enero":
		case "Marzo":
		case "Mayo":    	  
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje ="Tiene 31 dias.";
			break;
		case "Febrero":
			mensaje ="Tiene 28 dias.";
		    break;
		default:
		  	mensaje ="Tiene 30 dias.";
		    break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN