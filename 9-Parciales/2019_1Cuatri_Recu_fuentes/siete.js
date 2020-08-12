
/*
			</br>Realizar el algoritmo que permita el ingreso de 10
			 bolsas de alimento por prompt,con  los kilos (validar entre 0 y 500)
			  , sabor validar(carne vegetales pollo) e informar por alert:
			</br>a)
			El promedio de los kilos totales.
			</br>b)
			El mas liviano y su sabor
			</br>c)
			La cantidad de sabor carne y el promedio de kilos de sabor carne
			</h3>
     */
function mostrar()
{

	var nroBolsas ;
	var kg;
	var sabor;
	var kgTotales;
	var kgMasLiviano;
	var saborMasLiviano;
	var PrimerMinimoKg
	var kgTotalCarne;
	var cantSaborCarne;

	PrimerMinimoKg = true;
	cantSaborCarne = 0;
	kgTotales = 0;
	kgTotalCarne = 0;
	for(nroBolsas= 0; nroBolsas < 10; nroBolsas++)
	{
		kg = prompt("Ingrese kg");
		kg = parseFloat(kg);
		while(isNaN(kg) || kg < 0 || kg > 500 )
		{
			alert("Kg invalidos. Deben estar entre 0 y 500");
			kg = prompt("Ingrese kg");
			kg = parseFloat(kg);
		}
		kgTotales += kg;
		sabor = prompt("Ingrese el sabor");
		sabor = sabor.toUpperCase();
		while(sabor != "CARNE" & sabor != "POLLO" && sabor != "VEGETALES")
		{
			alert("sabor invalido : Deber ser carne, pollo o vegetales");
			sabor = prompt("Ingrese el sabor");
			sabor = sabor.toUpperCase();
		}

		if(PrimerMinimoKg || Kg < kgMasLiviano)
		{
			kgMasLiviano = kg;
			saborMasLiviano = sabor;
		}

		if(sabor == "CARNE")
		{
			cantSaborCarne++;
			kgTotalCarne += kg;
		}
	}

	alert("El promedio de kilos totales es: " + kgTotales / nroBolsas );
	alert("El sabor mas liviano es :" + saborMasLiviano);
	alert("La cantidad de bolsas sabor carne es :" + cantSaborCarne);
	alert("El promedio de bolsas sabor carne es :" + kgTotalCarne / cantSaborCarne);
}
