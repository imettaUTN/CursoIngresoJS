/*
IVAN METTA
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var continua = true;
	var cantidadPositivo = 0;
	var cantidadNegativo = 0;
	var cantidadPares = 0;
	var cantidadCeros = 0;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;

	while(continua)
	{
		numeroIngresado = prompt("Numero ingresado");
		numeroIngresado =parseInt(numeroIngresado);
		if(numeroIngresado % 2 == 0)
		{
			cantidadPares ++;
		}
		
		if(numeroIngresado >0)
		{
			sumaPositivos += numeroIngresado;
			cantidadPositivo ++;
		}
		else
		{
			if( numeroIngresado == 0)
			{
				cantidadCeros ++;
			}
			else
			{
				sumaNegativos += numeroIngresado;
				cantidadNegativo ++;
			}	
		}
		continua = confirm("Continua ingresando valores?");

	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("el promedio de positivos es :"+sumaPositivos / cantidadPositivo);
	document.write("la suma de positivos es :"+sumaPositivos);
	document.write("el promedio de negativos es :"+sumaNegativos / cantidadNegativo);
	document.write("la cantidad de positivos es :"+cantidadPositivo);
	document.write("la cantidad de negativos es :"+cantidadNegativo);
	document.write("la cantidad de pares es :"+cantidadPares);
	document.write("la cantidad de ceros es :"+cantidadCeros);
	document.write("El promedio de positivos es :"+ sumaPositivos/ cantidadPositivo);
	document.write("El promedio de positivos es :"+ sumaNegativos/ cantidadNegativo);
	document.write("La diferencia entre positivos y negativos es :"+ sumaPositivos + sumaNegativos);

}//FIN DE LA FUNCIÓN