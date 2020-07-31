function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	while(contador < 6)
	{ 
		contador ++;
		numeroIngresado = prompt("Numero ingresado");
		numeroIngresado =parseInt(numeroIngresado);
		acumulador += numeroIngresado;
	}	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN