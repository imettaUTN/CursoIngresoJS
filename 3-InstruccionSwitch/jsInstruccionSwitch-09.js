/*
IVAN METTA
EJE 9
h3>
					una agencia de viajes debe sacar las tarifas de los viajes
					, se cobra $15.000 por cada estadia como base,
					 se pide el ingreso de una estacion del año y localidad para vacacionar para
					poder  calcular el precio final


				</br> </br>en Invierno:
				 	bariloche tiene un aumento del 20% 
					cataratas y Cordoba tiene un descuento del 10%
					Mar del plata  tiene un descuento del 20%
				</br></br> en Verano:
				 	bariloche tiene un descuento del 20% 
					cataratas y Cordoba tiene un aumento del 10%
					Mar del plata  tiene un aumento del 20%
				</br></br> en Otoño y Primavera:
				 	bariloche tiene un aumento del 10% 
					cataratas tiene un aumento del 10%
					Mar del plata  tiene un aumento del 10%
					y Cordoba tiene el precio sin descuento

*/
function mostrar()
{
	var estacionIngresada;
	var destino;
	var descuento = 0;
	var precioBase = 15000;
	destino = txtIdDestino.value;
	estacionIngresada =txtIdEstacion.value;
	switch(estacionIngresada)
	{
	    case "Invierno":
	    	switch(destino)
	    	{
	    		case "Bariloche":
	    			descuento = 0.2;
	    			break;
	    		case "Mar del plata":
	    			descuento =-0.2;
	    			break;
	    		default:
	    			descuento =-0.1;
	    			break;
	    	}
	    case "Verano":
	    	switch(destino)
	    	{
	    		case "Bariloche":
	    			descuento = -0.2;
	    			break;
	    		case "Mar del plata":
	    			descuento = 0.2;
	    			break;
	    		default:
	    			descuento =-0.1;
	    			break;
	    	}
	    case "Otoño":
	    case "Primavera":
	    	switch(destino)
	    	{
	    		case "Cordoba":
	    			descuento = 0;
	    			break;
	    		default:
	    			descuento =0.1;
	    			break;
	    	}
	}
	alert("El precio final es :" + precioBase + (precioBase * descuento));

}//FIN DE LA FUNCIÓN