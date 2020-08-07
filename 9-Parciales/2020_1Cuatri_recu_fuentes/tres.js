/*
		<h2>Bienvenidos.
        </br>En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, 
        sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
				 </br>a)
				la Nacionalidad de la persona con mas temperatura.
				 </br>b)
				Cuantos mayores de edad( más  de 17) estan solteros
				 </br>c)
				La cantidad de Mujeres que hay solteras  o viudas.
				 </br>d)
				cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

				 </br>e)
				El promedio de edad entre las mujeres casadas.
				</h2>
*/
function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var tempMaxima;
	var nacionalidadTempMaxima;
	var esPrimerTmpMaxima;
	var cantMayoresSolteros;
	var cantMujeresSoltViudas;
	var cantMujeresCasadas;
	var sumEdadesMujeresCasadas;
	var cantPersonasMayEdadTmpAlta;
	var continua;

	continua = true;
	esPrimerTmpMaxima = true;
	cantMayoresSolteros = 0;
	cantMujeresSoltViudas = 0;
	cantMujeresCasadas = 0;
	sumEdadesMujeresCasadas = 0;
	cantPersonasMayEdadTmpAlta = 0;

	while(continua)
	{
		nombre = prompt("Ingrese nombre", "nombre");
		nombre = nombre.toUpperCase();
		nacionalidad = prompt("Ingrese nacionalidad");
		nacionalidad = nacionalidad.toUpperCase();
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(edad <0 || isNaN(edad))
		{
			alert("Edad invalida. Reingrese");
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese sexo F o M");
		sexo = sexo.toUpperCase();
		while(sexo!= "F" && sexo != "M")
		{
			alert("sexo invalido. Reingrese");
			sexo = prompt("Ingrese sexo F o M");
			sexo = sexo.toUpperCase();
		}
		estadoCivil = prompt("Ingrese estado civil");
		estadoCivil = estadoCivil.toUpperCase();
		while(estadoCivil != "SOLTERO" && estadoCivil != "CASADO" && estadoCivil != "VIUDO")
		{
			alert("estado civil invalido. Reingrese");
			estadoCivil = prompt("Ingrese estado civil");
			estadoCivil = estadoCivil.toUpperCase();
		}
		temperatura = prompt("Ingrese temperatura");
		temperatura = parseFloat(temperatura);
		while(temperatura < 0 || isNaN(temperatura))
		{
			alert("temperatura invalida, Reingrese");
			temperatura = prompt("Ingrese temperatura");
			temperatura = parseFloat(temperatura);
		}
	 	
	 	if(esPrimerTmpMaxima || temperatura > tempMaxima)
	 	{
	 		tempMaxima = temperatura;
	 		nacionalidadTempMaxima = nacionalidad;
	 	}
	 	esPrimerTmpMaxima = false;

	 	switch(estadoCivil)
	 	{
	 		case "SOLTERO":
	 			if(edad > 16)
			 	{
			 		cantMayoresSolteros ++;
			 	}
			 	if(sexo == "F")
			 	{
			 		cantMujeresSoltViudas ++;
			 	}
	 		case "CASADO":
	 			sumEdadesMujeresCasadas += edad;
	 			cantMujeresCasadas++;
	 		case "VIUDO":
	 			if(sexo == "F")
			 	{
			 		cantMujeresSoltViudas ++;
			 	}
	 	}

	 	if(edad > 60 && temperatura > 38)
	 	{
	 		cantPersonasMayEdadTmpAlta++;
	 	} 	
	 	continua = confirm("Desea continua?");
	}

 	alert("Nacionalidad de persona con temperatura alta :" +nacionalidadTempMaxima);
 	alert("Cantidad mayores de edad solteros :" +  cantMayoresSolteros);
 	alert("Cantidad de Mujeres que hay solteras o viudas:" +cantMujeresSoltViudas);
 	alert("La cantidad de personas mayores que tienen mas de 38 de temperatura" + cantPersonasMayEdadTmpAlta);
 	alert("El promedio de edad entre las mujeres casadas es :" + sumEdadesMujeresCasadas / cantMujeresCasadas);
}
