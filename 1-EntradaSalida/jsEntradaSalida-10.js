/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var n1 = parseInt(txtIdImporte.value);
	txtIdResultado.value = n1 - (n1/100 * 25);
}
