/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var sNumero1 = parseInt(txtIdNumeroDividendo.value);
	var sNumero2 = parseInt(txtIdNumeroDivisor.value);
	var sResultado = sNumero1 % sNumero2;
		alert("El resto es: " + sResultado);
}

/* Test
Numero 1: 100, numero 2: 50 resultado : El resto es: 0
Numero 1: 888, numero 2: 50 resultado : El resto es: 38
*/