/*ejercicio 10 
ivan metta
Al presionar el Bot&oacute;n, 
					asignar una nota RANDOM al examen y mostrar:<br>
					"EXCELENTE" para notas igual a 9 o 10,<br>
					"APROB&Oacute;" para notas mayores a 4,<br>
					"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{	
	var nota ;
	var mensaje = "";
	nota= Math.floor(Math.random() * 10  ) + 1;
	if(nota > 8)
	{
	  mensaje = "EXCELENTE";
	}
	else
	{
		if(nota <4)
		{
		  mensaje = "vamos, la proxima se puede";
		}
		else
		{
		  mensaje = "Aprobado";
		}
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN
