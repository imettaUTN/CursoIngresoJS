/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

  	var sSueldo = parseInt(txtIdSueldo.value);
  	var sResultado = sSueldo + (sSueldo/100 * 10);
	txtIdResultado.value = sResultado;
}

/* Test
sueldo : 100 resultado :110
sueldo : 980 resultado :882
sueldo : 525 resultado :472.5
*/