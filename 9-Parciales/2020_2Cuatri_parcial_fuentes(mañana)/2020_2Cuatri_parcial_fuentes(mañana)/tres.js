/*
IVAN METTA
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var continua ;
	var nombreTitular;
	var lugar;
	var temporada;
	var cantPersonas;
	var cantidadPersonasBariloche;
	var cantidadPersonasCataratas;
	var cantidadPersonasSalta;
	var esPrimerTitularIngresado;
	var nombreTitularMaximo;
	var cantPasajerosMaxima;
	var cantidadViajesInvierno;
	var sumPersonasInvierno;
	var lugarMasElegido;
	var promedioInvierno;
	esPrimerTitularIngresado = true;
	continua = true;
	cantidadViajesInvierno = 0;
	sumPersonasInvierno = 0;

	while(continua)
	{
		nombreTitular = prompt("ingrese nombre titular");
		nombreTitular = nombreTitular.toUpperCase();
		lugar = prompt("Ingrese lugar  bariloche - salta - cataratas");
		lugar = lugar.toUpperCase();
		while(lugar != "CATARATAS" && lugar != "SALTA"  && lugar != "BARILOCHE")
		{
			alert("lugar invalido. reingrese");
			lugar = prompt("Ingrese lugar  bariloche - salta - cataratas");
			lugar = lugar.toUpperCase();
		}
		temporada = prompt("Ingrese temporada otoño - invierno - primavera - verano");
		temporada = temporada.toUpperCase();
		while(temporada != "OTOÑO" && temporada != "INVIERNO"  && temporada != "VERANO" && temporada != "PRIMAVERA")
		{
			alert("temporada invalido. reingrese");
			temporada = prompt("Ingrese temporada otoño - invierno - primavera - verano");
			temporada = temporada.toUpperCase();
		}
		cantPersonas = prompt("Ingrese cantidad de personas que viajan");
		cantPersonas = parseInt(cantPersonas);
		while(isNaN(cantPersonas) || cantPersonas <1)
		{
			alert("cantidad de personas invalida. reingrese");
			cantPersonas = prompt("Ingrese cantidad de personas que viajan");
			cantPersonas = parseInt(cantPersonas);	
		}

		switch(lugar)
		{
			case "BARILOCHE":
				cantidadPersonasBariloche ++;
				break;
			case "CATARATAS":
				cantidadPersonasCataratas ++;
				break;
			case "SALTA":
				cantidadPersonasSalta ++;
				break;
		}

		if(esPrimerTitularIngresado || cantPersonas > cantPasajerosMaxima )
		{
			cantPasajerosMaxima = cantPersonas;
			nombreTitularMaximo = nombreTitular;
		}
		if(temporada == "INVIERNO")
		{
			sumPersonasInvierno += cantPersonas;
			cantidadViajesInvierno ++;
		}
		continua = confirm("Desea continuar?");
	}
	if(cantidadPersonasBariloche > cantidadPersonasSalta && cantidadPersonasBariloche > cantidadPersonasCataratas)
	{
		lugarMasElegido = "BARILOCHE";
	}
	else
	{
		if(cantidadPersonasCataratas > cantidadPersonasSalta)
		{
			lugarMasElegido = "CATARATAS";
		}
		else
		{
			lugarMasElegido = "SALTA";
		}
	}

	if(cantidadViajesInvierno > 0)
	{
		promedioInvierno = sumPersonasInvierno / cantidadViajesInvierno;
		document.write("Promedio personas que viajan en invierno "+  promedioInvierno);

	}
	document.write("El lugar mas elegido es "+  lugarMasElegido);
	document.write("Titular con mas pasajeros "+  nombreTitularMaximo);
}
