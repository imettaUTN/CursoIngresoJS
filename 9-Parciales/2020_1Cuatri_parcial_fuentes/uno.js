/*</br>	Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo (validar "BARBIJO" , "JABON" o "ALCOHOL") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 
			unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
			b) Del tipo con mas unidades, el promedio por compra <br>
			c) Cuántas unidades de jabones hay en total <br><br>*/

function mostrar()
{
	var cantUnidadesJabon;
	var cantUnidadesAlcohol;
	var cantUnidadesBarbijo;	
	var sumPreciosJabon;
	var sumPreciosBarbijo;
	var sumPreciosAlcohol;
	var precioAlcoholMasBarato;
	var cantAlcoholMasBarato;
	var fabricateAlcoholMaBarato;
	var primerAlchol;
	var mensaje;
	var i ;
	var EsElMasBarato 
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	cantUnidadesJabon= 0;
	cantUnidadesAlcohol = 0;
	cantUnidadesBarbijo = 0;
	sumPreciosJabon = 0;
	sumPreciosBarbijo = 0;
	sumPreciosAlcohol =0;	
	primerAlchol = true;
	EsElMasBarato = false;
		
	for(i =0; i <5 ; i++)
	{
		tipo = prompt("ingrese el tipo de producto.");
		tipo = tipo.toUpperCase();
		while(tipo != "BARBIJO" && tipo != "JABON" && tipo != "ALCOHOL")
		{
			alert("tipo de product invalido. Debe ser barbijo,  jabon o alcohol. Reintente");
			tipo = prompt("ingrese el tipo de producto.");
			tipo = tipo.toUpperCase();
		}

		precio = prompt("ingrese el precio.");
		precio = parseFloat(precio);
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			alert("precio invalido. Debe ser entre 100 y 300.Reintente");
			precio = prompt("ingrese el precio.");	
			precio = parseInt(precio);			
		}
		
		cantidad = prompt(" ingrese cantidad.");
		cantidad = parseInt(cantidad);
		while(cantidad < 0 || cantidad > 1000 || isNaN(cantidad))
		{
			alert("cantidad invalidad debe ser entre 0 y 1000. Reintente");
			cantidad = prompt(" ingrese cantidad.");
			cantidad = parseInt(cantidad);
		}		
		
		marca = prompt("Marca.");
		fabricante = prompt("Fabrica.");

		switch(marca)
		{
			case "ALCOHOL":
				cantUnidadesAlcohol ++;
				sumPreciosAlcohol += precio;
				if(i==0 || precio < precioAlcoholMasBarato)
				{
					precioAlcoholMasBarato = precio;
					cantAlcoholMasBarato = cantidad;
					fabricateAlcoholMaBarato = fabricante;					
				}
				break;
			case "BARBIJO":
				cantUnidadesBarbijo ++;
				sumPreciosBarbijo += precio;
				break;
			default:
				cantUnidadesJabon ++;
				sumPreciosJabon +=precio;
				break;
		}
	}
	if(cantUnidadesJabon > cantUnidadesBarbijo )
	{
		if(cantUnidadesJabon > cantUnidadesAlcohol)
		{
			mensaje ="EL promedio de compras del jabon es :" + sumPreciosJabon / cantUnidadesJabon;
		}
		else
		{
			mensaje ="EL promedio de compras del alcohol es :" + sumPreciosAlcohol / cantUnidadesAlcohol;
		}
	}
	else
	{
		if(cantUnidadesBarbijo > cantUnidadesAlcohol)
		{
			mensaje ="EL promedio de compras del barbijo es :" + sumPreciosBarbijo / cantUnidadesBarbijo;
		}
		else
		{
			mensaje ="EL promedio de compras del alcohol es :" + sumPreciosAlcohol / cantUnidadesAlcohol;
		}
	}

	alert("La cantidad de unidades del alcohol mas barato:" + cantAlcoholMasBarato + " el fabricante es:" + fabricateAlcoholMaBarato);
	alert(mensaje);
	alert("cantdad total de barbijo" + cantUnidadesBarbijo);
}
