/*
IVAN METTA
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
	var continua ;
	var marca;
	var precio;
	var peso;
	var tipo;
	var sumPesos;
	var esPrimerLiqIngresado;
	var esPrimerSolidoIngresado;
	var pesoMenorSolido;
	var precioLiquidoMayor;
	var marcaLiquidoMasCaro;
	var marcapesoMenorSolido;

	esPrimerLiqIngresado = true;
	sumPesos =0 ;
	continua = true;
	while(continua)
	{
		marca = prompt("ingrese marca producto");
		marca = marca.toUpperCase();

		precio = prompt("ingrese precio");
		precio = parseFloat(precio);
		// no debe permitir el ingreso de 0 x eso el <=
		while(isNaN(precio) || precio <= 0)
		{
			alert("Precio invalido. Reingrese");
			precio = prompt("ingrese precio");
			precio = parseFloat(precio);
		}
		peso = prompt("ingrese peso");
		peso = parseFloat(peso);
		// no debe permitir el ingreso de 0 x eso el <=
		while(isNaN(peso) || peso <= 0)
		{
			alert("Peso invalido. Reingrese");
			peso = prompt("ingrese precio");
			peso = parseFloat(precio);
		}
		tipo = prompt("ingrese tipo de producto");
		tipo = tipo.toUpperCase();
		while(tipo != "SOLIDO" && tipo != "LIQUIDO")
		{
			alert("tipo invalido. Reingrese");
			tipo = prompt("ingrese tipo de producto");
			tipo = tipo.toUpperCase();
		}
		sumPesos += peso;

		if(tipo == "LIQUIDO")
		{
			if(esPrimerLiqIngresado || precio > precioLiquidoMayor )
			{
				precioLiquidoMayor = precio;
				marcaLiquidoMasCaro = marca;
			}
			esPrimerLiqIngresado = false;
		}
		else
		{
			if(esPrimerSolidoIngresado || peso < pesoMenorSolido )
			{
				pesoMenorSolido = peso;
				marcapesoMenorSolido = marca;
			}
			esPrimerSolidoIngresado = false;
		}
		continua = confirm("Desea continuar ingresando datos?");
	} // end while
	document.write("Peso total compra :"+ sumPesos);
	//si la bandera esta en true, significa que nunca ingreso ningun liquido
	if(!esPrimerLiqIngresado)
	{
		document.write("Marca liquido mas caro :"+ marcaLiquidoMasCaro);
	}
	//si la bandera esta en true, significa que nunca ingreso ningun solido
	if(!esPrimerSolidoIngresado)
	{
	document.write("Marca del mas liviano de los solidos :"+ marcapesoMenorSolido);
	}
}
