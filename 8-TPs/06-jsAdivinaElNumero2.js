/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: "usted es un Psíquico".
2° intento: "excelente percepción".
3° intento: "Esto es suerte".
4° intento: "Excelente técnica".
5° intento: "usted está en la media".
Desde  6 Intentos hasta 10:"falta técnica"
Más de 10 intentos: "afortunado en el amor!!".*/

var numeroSecreto = 0; 
var contadorIntentos = 0;

function comenzar()
{
	var max = 100;
	var min = 1;
	//ver si funciona asi con math.int
	numeroSecreto = parseInt(Math.floor(Math.random() * (max - min + 1) ) + min); 
   	txtIdIntentos.value = 0;
}

function verificar()
{
	var nroIngresado ;
	var mensaje = "";
	nroIngresado = txtIdNumero.value;
	nroIngresado = parseInt(nroIngresado);
	
	if(nroIngresado != numeroSecreto)
	{
		contadorIntentos ++;
	}
	else
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje = "usted es un Psíquico";
			case 2:
				mensaje = "excelente percepción";
			case 3:
				mensaje = "Esto es suerte";
			case 4:
				mensaje = "Excelente técnica";
			case 5:	
				mensaje = "usted está en la media";
			default:
			 if(contadorIntentos < 10)
			 {
			 	mensaje = "falta técnica";
			 }	
			 else
			 {
			 	mensaje = "afortunado en el amor!!";
			 }	
		}

	}
	txtIdIntentos.value = contadorIntentos;
}