/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

  	var sSueldo;
  	var sResultado ;
  	sSueldo = txtIdSueldo.value;
  	sSueldo= parseInt(sSueldo);
  	//sResultado = sSueldo * 1.1;
  	sResultado= sSueldo + (sSueldo*10 /100);
	txtIdResultado.value = sResultado;
}

/* Test
sueldo : 100 resultado :110
sueldo : 980 resultado :882
sueldo : 525 resultado :472.5
*/