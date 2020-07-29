/*
ivn metta  

eje 2:

al seleccionar un mes  informar.
						</br>si estamos en Invierno: "Abrigate que hace frio."
						</br>si aun no llego el Invierno: "Falta para el invierno."
						</br>si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
					</br>ACLARACóN: tomamos a Julio y Agosto como los meses de Invierno.


*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje ;
	switch(mesDelAño) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
			break;
		case "Julio":	
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;	
		default
			mensaje = "Ya paso el invierno.";
			break;		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN