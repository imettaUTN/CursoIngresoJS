/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var sPrecio1;
	var sPrecio2;
	var sPrecio3;
	var sResultado ;
	sPrecio1 = txtIdPrecioUno.value;
	sPrecio1 = parseInt(sPrecio1);
    sPrecio2 = txtIdPrecioDos.value;
    sPrecio2 = parseInt(sPrecio2);
    sPrecio3 = txtIdPrecioTres.value;
    sPrecio3 = parseInt(sPrecio3);
    sResultado = sPrecio3 + sPrecio2 +sPrecio1;
    alert("La suma de los 3 precios es: " + sResultado);
}
function Promedio () 
{
	var sPrecio1;
	var sPrecio2;
	var sPrecio3;
	var sResultado ;
	sPrecio1 = txtIdPrecioUno.value;
	sPrecio1 = parseInt(sPrecio1);
    sPrecio2 = txtIdPrecioDos.value;
    sPrecio2 = parseInt(sPrecio2);
    sPrecio3 = txtIdPrecioTres.value;
    sPrecio3 = parseInt(sPrecio3);
    sResultado = sPrecio3 + sPrecio2 +sPrecio1;
    sResultado = sResultado / 3;
    alert("El promedio de los 3 precios es: " + sResultado);
	
}
function PrecioFinal () 
{
	var sPrecio1;
	var sPrecio2;
	var sPrecio3;
	var sResultado ;
	sPrecio1 = txtIdPrecioUno.value;
	sPrecio1 = parseInt(sPrecio1);
    sPrecio2 = txtIdPrecioDos.value;
    sPrecio2 = parseInt(sPrecio2);
    sPrecio3 = txtIdPrecioTres.value;
    sPrecio3 = parseInt(sPrecio3);
    sResultado = sPrecio3 + sPrecio2 +sPrecio1;
    //sResultado = sResultado + (sResultado * 25/100);
    sResultado = sResultado * 1.25;
    alert("El Precio final de los 3 precios es: " + sResultado);
}