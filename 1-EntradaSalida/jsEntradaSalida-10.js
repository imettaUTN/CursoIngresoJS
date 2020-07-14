/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sImporte;
	var sResultado
	sImporte = txtIdImporte.value;
	sImporte = parseInt(sImporte);
	//sResultado = sImporte *0.75;
	sResultado= sImporte - (sImporte* 25 /100);
	txtIdResultado.value = sResultado;
}

/* Test
importe ingresado : 100 resultado : 75
importe ingresado : 1000 resultado : 750
importe ingresado : 980 resultado : 735
*/

