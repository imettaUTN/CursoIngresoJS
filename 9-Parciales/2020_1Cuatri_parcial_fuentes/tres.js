/*
 </br>En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
				 </br>a)
				El nombre de la persona con mas temperatura.
				 </br>b)
				Cuantos mayores de edad estan viudos
				 </br>c)
				La cantidad de hombres que hay solteros  o viudos.
				 </br>d)
				cuantas personas de la tercera edad( mas de 60 años) , 
				tienen mas de 38 de temperatura

				 </br>e)
				El promedio de edad entre los hombres solteros.
				</h2>
*/
function mostrar()
{
	var nombre;
	var continua;	
	var edad;
	var sexo ;
	var estadoCivil ;
	var tmpMayor;
	var nombrePersonaMayTemp;
	var esPrimerTmp;	
	var cantMayoresViudos;
	var cantHombresViudos;
	var cantHomSolteros;
	var cantAdultosEnRiesgo;
	var sumEdadesSolteros;

	continua =true;
	esPrimerTmp = true;
	cantMayoresViudos =0;	
	cantHombresViudos =0;	
	cantHomSolteros = 0;	
	cantAdultosEnRiesgo = 0;	
	sumEdadesSolteros= 0;

	while(continua)
	{
		sexo = prompt("ingrese sexo f-m");
		sexo = sexo.toUpperCase();
		while(sexo != "F" && sexo != "M")
		{
			alert("Sexo invalido. Reingrese");
			sexo = prompt("ingrese sexo f-m");
			sexo = sexo.toUpperCase();
		}
		estadoCivil = prompt("ingrese estado civil");
		estadoCivil = estadoCivil.toUpperCase();
		while(estadoCivil != "VIUDO" && estadoCivil != "CASADO" && estadoCivil != "SOLTERO")
		{
			alert("Estado civil invalido. Reingrese");
			estadoCivil = prompt("ingrese estado civil");
			estadoCivil = estadoCivil.toUpperCase();
		}
		edad = prompt("ingrese edad");
		edad = parseInt(edad);
		while(edad > 0)
		{
			alert("edad invalida. Reingrese");
			edad = prompt("ingrese edad");
			edad = parseInt(edad);
		}
		temperatura = prompt("ingrese temperatura corporal");
		temperatura = parseFloat(temperatura);
		while(temperatura > 0)
		{
			alert("temperatura invalida. Reingrese");
			temperatura = prompt("ingrese temperatura corporal");
			temperatura = parseFloat(temperatura);
		}

		if(esPrimerTmp || temperatura > tmpMayor)
		{
			tmpMayor = temperatura;
			nombrePersonaMayTemp = nombre;
		}
		esPrimerTmp = false;

		switch(estadoCivil)
		{
			case "SOLTERO":
				if(sexo == "M")
				{
					cantHomSolteros ++;
					sumEdadesSolteros += edad;
				}				
				break;
			case "VIUDO":
				if(edad > 18)
				{
					cantMayoresViudos++;
				}
				if(sexo == "M")
				{
				cantMayoresViudos ++;
				}
				break;
		}

		if( edad > 60 && temperatura > 38)
		{
			cantAdultosEnRiesgo ++;
		}

		continua = confirm("continua ingresando?");
	}

	alert("El nombre de la personas con mas temperatura es:" + nombrePersonaMayTemp);
	alert("Cantidad de mayores viudos" + cantMayoresViudos);
	alert("La cantidad de hombres solteros o viudos es :" + cantHomSolteros + cantMayoresViudos);
	alert("La cantidad de personas de la tercera edad( mas de 60 años) tienen mas de 38 de temperatura" + cantAdultosEnRiesgo)
	alert("Promedio edad hombres solteros :" + sumEdadesSolteros / cantHomSolteros);
}
