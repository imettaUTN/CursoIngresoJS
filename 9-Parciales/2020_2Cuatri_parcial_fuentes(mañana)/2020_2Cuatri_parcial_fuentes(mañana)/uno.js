/*
IVAN METTA 
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo (genero).
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo ;
	var temperatura;
	var cantidadMasculino;
	var cantidadFemenino;
	var cantidadOtrosSexos;
	var sumEdades;
	var nroPersonaIngresada;
	var tempMayorMujer;
	var nombreTmpMayorMujer;
	var promedioEdades;
	cantidadMasculino = 0;
	cantidadFemenino = 0;
	cantidadOtrosSexos = 0;
	sumEdades =0;

	for(nroPersonaIngresada = 0; nroPersonaIngresada < 5 ; nroPersonaIngresada++)
	{
		nombre = prompt("Ingrese nombre");
		temperatura = prompt("ingrese temperatura corporal");
		temperatura = parseFloat(temperatura);
		while(isNaN(temperatura) || temperatura <34 || temperatura > 40)
		{
			alert("temperatura invalida. Reingrese");
			temperatura = prompt("ingrese temperatura corporal");
			temperatura = parseFloat(temperatura);
		}
		sexo = prompt("ingrese sexo f-m-o (otro)");
		sexo = sexo.toUpperCase();
		while(sexo != "F" && sexo != "M" && sexo != "O")
		{
			alert("Sexo invalido. Reingrese");
			sexo = prompt("ingrese sexo f-m-o (otro)");
			sexo = sexo.toUpperCase();
		}
		edad = prompt("ingrese edad");
		// en caso que ingrese un bebe de <1 , se ingresa como 0.meses ej: 0.5 para 5 meses
		edad = parseFloat(edad);
		while(isNaN(edad) || edad > -1)
		{
			alert("edad invalida. Reingrese");
			edad = prompt("ingrese edad");
			edad = parseFloat(edad);
		}

		switch(sexo)
		{
			case "M":
				cantidadMasculino ++;
				break;
			case  "F":				
				cantidadFemenino ++;
				if(nroPersonaIngresada ==0 || temperatura > tempMayorMujer)
				{
					tempMayorMujer = temperatura;
					nombreTmpMayorMujer = nombre;
				}
				break;
			default:
				cantidadOtrosSexos ++;
				break;
		}
		sumEdades += edad;
	} // end for
	//nroPersonaIngresada contiene 5 , dadas las 5 "vueltas" del for
	promedioEdades = sumEdades / nroPersonaIngresada ;
	//solo si hay algun fememino ingresado se muestra(enunciado dice :" si corresponde")
	if(cantidadFemenino > 0)
	{
		document.write("La mujere con mayor temperatura es  :"+ nombreTmpMayorMujer);
	}
	document.write("La cantidad de masculinos es :"+ cantidadMasculino);
	document.write("La cantidad de femeninos es :"+ cantidadFemenino);
	document.write("La cantidad de otros sexo es :"+ cantidadOtrosSexos);
	document.write("El promedio de edades es  :"+ promedioEdades);

}
