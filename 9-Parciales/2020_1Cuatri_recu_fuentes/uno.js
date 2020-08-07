/*
		Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, 
		de cada una debo obtener los siguientes datos: 
		el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , 
		el precio (validar entre 100 y 300),
		la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
		la Marca y el fabricante. 
		Se debe Informar al usuario lo siguiente:

		a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		b) Del tipo de producto con más unidades en total de la compra, el promedio por compra 
		c) Cuántas unidades de Barbijos se compraron en total 
*/
function mostrar()
{
	var i;
	var tipoProducto;
	var precio;
	var cantUnd;
	var marca;
	var fabricante;
	var precioMaximoJabon;
	var cantUnidadesPrecioMaxJabon;
	var fabricantePrecioMaxJabon;
	var cantUndCompraMaxima;
	var promedioCompraMaxima;
	var tipoProductoCompraMaxima;
	var cantBarbijos;

	cantUnidadesPrecioMaxJabon = 0;
	cantBarbijos = 0;

	for(i=0; i<5 ; i++)
	{
		tipoProducto = prompt("Ingrese tipo de producto barbijo - jabón - alcohol");
		tipoProducto.toUpperCase();
		while(tipoProducto != "BARBIJO" && tipoProducto != "JABÓN" && tipoProducto != "ALCOHOL")
		{
			alert("Tipo de producto invalido. Reingrese");
			tipoProducto = prompt("Ingrese tipo de producto barbijo - jabón - alcohol");
			tipoProducto.toUpperCase();
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseFloat(precio);
		while(precio < 100 || precio >300 || isNaN(precio))
		{
			alert("Precio de producto invalido. Reingrese");
			precio = prompt("Ingrese el precio del producto");
			precio = parseFloat(precio);
		}

		cantUnd = prompt("Ingrese la cantidad de productos");
		cantUnd = parseInt(cantUnd);
		while(cantUnd < 0 || cantUnd >1000 || isNaN(cantUnd))
		{
			alert("Cantidad de producto invalida. Reingrese");
			cantUnd = prompt("Ingrese la cantidad de productos");
			cantUnd = parseInt(cantUnd);
		}
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		if(i==0 || precio > precioMaximoJabon)
		{
			precioMaximoJabon = precio;
			cantUnidadesPrecioMaxJabon =unidades;
			fabricantePrecioMaxJabon = fabricante;
		}

		if(tipoProducto == "JABÓN")
		{
			if(i==0 || cantidad > cantUndCompraMaxima)
			{
				cantUndCompraMaxima = cantidad;
				promedioCompraMaxima = precio / cantUndCompraMaxima;
				tipoProductoCompraMaxima = tipoProducto;
			}
		}

		if(tipoProducto == "BARBIJO")
		{
			cantBarbijos += Cantidad;
		}
	}
	alert("La cantidad de unidades del jabon mas caro es :" + cantUnidadesPrecioMaxJabon + " y su fabricante es: " + fabricantePrecioMaxJabon);
	alert("Del producto :" + tipoProductoCompraMaxima + " cuyo compra es la de mas unidades el promedio es :" + promedioCompraMaxima);
	alert("Cantidad total Barbijos :" + cantBarbijos);
}
