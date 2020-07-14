/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var sTemperatura ;
	var sResultado;
	sTemperatura = txtIdTemperatura.value;
	sTemperatura = parseInt(sTemperatura);
	sResultado = (sTemperatura -32) * 5/9 ;
	alert(sTemperatura + " grados Fahrenheit equivalen a " + sResultado + " grados centígrados");
	
}
/* Test
12 grados Fahrenheit equivalen a -11.11111111111111 grados centígrados
33 grados Fahrenheit equivalen a 0.5555555555555556 grados centígrados*/

function CentigradosFahrenheit () 
{
	var sTemperatura ;
	var sResultado;
	sTemperatura = txtIdTemperatura.value;
	sTemperatura = parseInt(sTemperatura);
	sResultado = (sTemperatura * 9/5) + 32 ;
	alert(sTemperatura + " grados centígrados equivalen a " + sResultado + " grados Fahrenheit");

}

/* Test
20 grados centígrados equivalen a 68 grados Fahrenheit
33 grados centígrados equivalen a 91.4 grados Fahrenheit*/