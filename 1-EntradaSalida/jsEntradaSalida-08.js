/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var sNumero1 ;
	var sNumero2 ;
	var sResultado ;
	sNumero1 = txtIdNumeroDividendo.value;
	sNumero2 = txtIdNumeroDivisor.value;
	sNumero1= parseInt(sNumero1);
	sNumero2= parseInt(sNumero2);
	sResultado= sNumero1 % sNumero2;
	alert("El resto es: " + sResultado);
}

/* Test
Numero 1: 100, numero 2: 50 resultado : El resto es: 0
Numero 1: 888, numero 2: 50 resultado : El resto es: 38
*/