/*
Ivan Metta

parcial 2020 - 2
<h2></br>Realizar el algoritmo que permita ingresar los datos de una 
compra productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> 
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre 
	        el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre 
			el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo con mas cantidad de bolsas.		
				<br>f)
				El tipo mas caro
			</h2>

*/
function mostrar()
{
	var continua;
	var tipoProducto;
	var cantidadProducto;
	var precioProducto;
	var cantBolsas;
	var subtotalArena;	
	var subtotalCal;	
	var subtotalCemento;	
	var precioMaximo;
	var cantidadProductoMaxima;
	var EsPrimerPrecioMaximo ;	
	var EsCantMaxima;
	var tipoProductoMasCaro;
	var tipoProductoMasBolsas;
	var precioBruto;
	var productoConMasCantidad;
	var descuento;

	continua = true;
	subtotalArena = 0;
	subtotalCal =0;
	subtotalCemento = 0;
	cantBolsas = 0;
	EsCantMaxima = true;
	EsPrimerPrecioMaximo = true;
	descuento = 0;

	while(continua)
	{
		tipoProducto = prompt("Ingrese el tipo de producto cemento, arena o cal");
		while(tipoProducto!= "cemento" && tipoProducto != "arena" && tipoProducto != "cemento") 
		{
			alert("tipo de producto invalido. Debe ser cemento, arena o cal.Reingrese");
			tipoProducto = prompt("Ingrese el tipo de producto cemento, arena o cal");

		}

		cantidadProducto = prompt("Ingrese la cantidad de productos");
		cantidadProducto = parseInt(cantidadProducto);
		while(cantidadProducto < 0 ||  isNaN(cantidadProducto))
		{
			alert("Cantidad de producto invalida. Reingrese");
			cantidadProducto = prompt("Ingrese la cantidad de productos");
			cantidadProducto = parseInt(cantidadProducto);
		}
		
		precioProducto = prompt("Ingrese el precio de productos");
		precioProducto = parseFloat(precioProducto);
		while(precioProducto < 0 || isNaN(precioProducto))
		{
			alert("Precio de producto invalido. Reingrese");
			precioProducto = prompt("Ingrese el precio de productos");
			precioProducto = parseFloat(precioProducto);
		}

		switch(tipoProducto)
		{
			cantBolsas ++;
			case "cemento":				
				subtotalCemento += precioProducto * cantidadProducto;
				break;
			case "arena":
				subtotalArena += precioProducto * cantidadProducto;
				break;
			case "cal":
				subtotalCal += precioProducto * cantidadProducto;
				break;
		}
		
		if(EsCantMaxima || Cantidad > cantidadProductoMaxima )
		{
			cantidadProductoMaxima = cantidad;
			tipoProductoMasBolsas = tipoProducto;
		}
		if(EsPrimerPrecioMaximo || precio > precioMaximo)
		{
			precioMaximo = precio;
			tipoProductoMasCaro = tipoProducto;
		}
		EsPrimerPrecioMaximo = false;
		
		continua = confirm("Desea continuar ingresando?");
	}
	precioBruto = subtotalCemento + subtotalCal + subtotalArena;
	// cant bolsas total es la sum de cant bolsas cemento + arema + cal
	if(cantBolsas > 30)
	{
		descuento = precioBruto * 0.25;
	}
	else
	{
		if(cantBolsas > 10)
		{
			descuento = precioBruto * 0.15;
		}
	}	
	
	alert("El importe total bruto total es :" + precioBruto);
	alert("El importe total Neto total es :" + precioBruto - descuento);
	alert("El producto con mas cantidad de bolsas es:" + tipoProductoMasBolsas);
	alert("El tipo de producto mas caro es: " + tipoProductoMasCaro);
}
