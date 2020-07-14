/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var sAncho ;
	var sLargo;
	var sPerimetro;
	sLargo =txtIdLargo.value;
	sLargo = parseInt(sLargo);
	sAncho =txtIdAncho.value;
	sAncho = parseInt(sAncho);
	sPerimetro = 3*(2*sLargo + 2*sAncho);
	alert("La cantidad de alambre necesaria es: "+ sPerimetro);

}

/*
largo : 10 , ancho : 10  resultado : La cantidad de alambre necesaria es: 188
largo : 20 , ancho : 20  resultado : La cantidad de alambre necesaria es: 300
largo : 41 , ancho : 41  resultado : La cantidad de alambre necesaria es: 492
*/

function Circulo () 
{
	var sRadio ;
	var sPerimetro;
	sRadio =txtIdRadio.value;
	sRadio = parseInt(sRadio);
	sPerimetro = 3* (2 * Math.PI * sRadio);
	sPerimetro = parseInt(sPerimetro);
	alert("La cantidad de alambre necesaria es: " + sPerimetro);
}


/*
radio : 10  resultado : La cantidad de alambre necesaria es: 188
radio : 20  resultado :  La cantidad de alambre necesaria es: 471
radio : 41  resultado : La cantidad de alambre necesaria es: 772
*/

function Materiales () 
{
	var sAncho ;
	var sLargo;
	var sBaseCuadradoMenor;
	var sAlturaCuadradoMenor;
	var sPerimetro;
	var sAreaCuadradoMenor ;
	var sAreaCuadradoMayor;
	var sCoeficiente;
	var sCantBolsasCemento;
	var sCantBolsasCal;
	// calculo el area menor
    sBaseCuadradoMenor = 1;
    sAlturaCuadradoMenor = sBaseCuadradoMenor;
    sAreaCuadradoMenor = sBaseCuadradoMenor * sAlturaCuadradoMenor;

// calculo el area mayor
	sLargo =txtIdLargo.value;
	sLargo = parseInt(sLargo);
	sAncho =txtIdAncho.value;
	sAncho = parseInt(sAncho);
    sAreaCuadradoMayor = sLargo * sAncho ;
   sCoeficiente = sAreaCuadradoMayor / sAlturaCuadradoMenor;
   // Lo paso a entero para que redonde el resultado
   sCoeficiente = parseInt(sCoeficiente);
   
   // Calculo las bolsas necesarias
   sCantBolsasCemento = sCoeficiente * 3 ;
   sCantBolsasCal = sCoeficiente * 2;
   alert("Se necesitan " + sCantBolsasCal +  " bolsas de cal y " + sCantBolsasCemento + " bolsas de cemento");
	
}


/*
largo : 10 , ancho : 10  resultado : Se necesitan 200 bolsas de cal y 300 bolsas de cemento
largo : 20 , ancho : 20  resultado : Se necesitan 1250 bolsas de cal y 1875 bolsas de cemento
largo : 41 , ancho : 41  resultado : Se necesitan 3362 bolsas de cal y 5043 bolsas de cemento
*/

