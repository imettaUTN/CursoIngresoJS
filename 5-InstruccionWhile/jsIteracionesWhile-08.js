/*
IVAN METTA
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var continua = true;
	var numeroIngresado;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	while(continua)
	{
		contador ++;
		continua = confirm("Continua ingresando valores?");
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado =parseInt(numeroIngresado);
		if(numeroIngresado >0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			if( numeroIngresado < 0)
			{
				multiplicacionNegativos *= numeroIngresado;
			}
		}
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN