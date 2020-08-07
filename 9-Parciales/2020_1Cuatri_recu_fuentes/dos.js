/*
  <h2>Enunciado:</h2>
			  <h2></br>Realizar el algoritmo que permita ingresar los datos de una compra de productos 
			  de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
				<br>f)
				El tipo mas caro
			*/
function mostrar()
{
	var continua;
	var tipoProducto;
	var cantidadBolsas;
	var precio ;
	var cantBolsasTotales;
	var subTotalBruto;
	var descuento;
	var subTotalNeto;
	var cantBolsasArena;
	var cantBolsasCal;
	var cantBolsasCemento;
	var tipoProductoMasCaro;
	var precioMaximoProducto;
	var esPrimerProductoMasCaro;
 	var tipoProductoConMasBolsas;

	subTotalBruto = 0;
	descuento = 0;
	cantBolsasTotales = 0;
	continua = true;
	cantBolsasCal =0 ;
	cantBolsasArena = 0;
	cantBolsasCemento = 0;
	esPrimerProductoMasCaro = true;

	while(continua)
	{
		tipoProducto = prompt("Ingrese tipo de producto ARENA - CAL - CEMENTO");
		tipoProducto.toUpperCase();
		while(tipoProducto != "ARENA" && tipoProducto != "CAL" && tipoProducto != "CEMENTO")
		{
			alert("Tipo de producto invalido. Reingrese");
			tipoProducto = prompt("Ingrese tipo de producto ARENA - CAL - CEMENTO");
			tipoProducto.toUpperCase();
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseFloat(precio);
		while(precio < 0 || isNaN(precio))
		{
			alert("Precio de producto invalido. Reingrese");
			precio = prompt("Ingrese el precio del producto");
			precio = parseInt(precio);
		}

		cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas = parseInt(cantidadBolsas);
		while(cantidadBolsas < 0 || isNaN(cantidadBolsas))
		{
			alert("Cantidad de bolsas invalida. Reingrese");
			cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
			cantidadBolsas = parseInt(cantidadBolsas);
		}
		cantBolsasTotales += cantidadBolsas;

		if(esPrimerProductoMasCaro || precio >precioMaximoProducto)
		{
			precioMaximoProducto = precio;
			tipoProductoMasCaro = tipoProducto;
		}
		precioMaximoProducto = false;
		switch(tipoProducto)
		{
			case "ARENA":
				cantBolsasArena ++;
				break;
			case "CAL":
				cantBolsasCal ++;
				break;
			case "CEMENTO":
				cantBolsasCemento ++;
				break;
		}
		continua = confirm("Desea continuar?");
		subTotalBruto += cantidad * precio;
	} //fin while

	if(cantBolsasTotales > 10 && cantBolsasTotales < 30)
	{
		descuento = 0.15;
	}
	else
	{
		descuento = 0.25;
	}
	subTotalNeto = subTotalBruto - (subTotalBruto * descuento);

	if( cantBolsasArena > cantBolsasCemento && cantBolsasArena > cantBolsasCal)
	{
		tipoProductoConMasBolsas = "ARENA";
	}
	else
	{
		if(cantBolsasCemento > cantBolsasCal)
		{
			tipoProductoConMasBolsas = "CEMENTO";
		}
		else
		{
			tipoProductoConMasBolsas = "CAL";
		}

	}
	if( descuento > 0)
	{
		alert("El subtotal a pagar con descuento es :" + subTotalNeto) ;
	}
	alert("El subtotal a pagar sin descuento es: " + subTotalBruto);
	alert("El tipo de producto con mas bolsas es: " + tipoProductoConMasBolsas);
	alert("El tipo de precto mas caro es:" +tipoProductoMasCaro);
}
