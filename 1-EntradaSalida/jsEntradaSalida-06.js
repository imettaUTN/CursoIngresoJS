/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var sNumeroUno = txtIdNumeroUno.value;
	var sNumeroDos = txtIdNumeroDos.value;
	sNumeroUno = parseInt(sNumeroUno);
	sNumeroDos = parseInt(sNumeroDos);
	var sSuma = sNumeroUno + sNumeroDos;
	alert("la suma es : " +sSuma);
}

