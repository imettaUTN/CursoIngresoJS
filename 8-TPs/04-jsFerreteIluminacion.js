/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marcaElegida;
 	var precioBase;
 	var precioFinal;
 	var importeDescuento;
 	importeDescuento=0;
 	precioFinal = 0;
 	precioBase = 35;
 	cantidad = txtIdCantidad.value;
 	cantidad = parseInt(cantidad);
    marcaElegida = Marca.value;
    precioFinal = precioBase * precioBase;

	if(cantidad >5)
	{    
     precioFinal = precioFinal - (precioFinal * 50 /100);
	}
    
    else
    {
		if(cantidad == 5)
		{
		     if(marcaElegida == "ArgentinaLuz"){
		        precioFinal = precioFinal - (precioFinal * 40 /100);
		     }
		     else{
		        precioFinal = precioFinal - (precioFinal * 30 /100);
		     }
		}
		else
		{
			
			if(cantidad == 4)
			{
			     if(marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas"){
			        precioFinal = precioFinal - (precioFinal * 25 /100);
			     }
			     else{
			        precioFinal = precioFinal - (precioFinal * 20 /100);
			     }
			}
			else
			{

				if(cantidad == 3)
				{
					 if (marcaElegida == "ArgentinaLuz")
				     {
				        precioFinal = precioFinal - (precioFinal * 15 /100);

				     }
				     else
				     {
				     	if(marcaElegida == "FelipeLamparas")
				     	{
				     	  precioFinal = precioFinal - (precioFinal * 10 /100);
				        }
				        else
				        {
				           precioFinal = precioFinal - (precioFinal * 5 /100);
				        }  

					 }
				}
			}		

	    }
    }
    
	if(precioFinal > 120)
	{
     importeDescuento = precioFinal * 10 /100;
     precioFinal = precioFinal + importeDescuento;
     alert("Usted pago " + importeDescuento + " de IIBB.")
	}

	txtIdprecioDescuento.value = precioFinal;
}
