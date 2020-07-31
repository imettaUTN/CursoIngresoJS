/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo =0;
	var numeroMinimo =0;
	var continua;
	while(continua)
	{		
		continua = window.confirm("Continua ingresando valores?");
		numeroIngresado = prompt("Numero ingresado");
		numeroIngresado =parseInt(numeroIngresado);
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN