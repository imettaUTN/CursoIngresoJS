/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
var n1 = parseInt(txtIdNumeroUno.value);
var n2 = parseInt(txtIdNumeroDos.value);
	alert(n1+n2);	
}

function restar()
{
	var n1 = parseInt(txtIdNumeroUno.value);
var n2 = parseInt(txtIdNumeroDos.value);
	alert(n1-n2);	
}

function multiplicar()
{ 
	var n1 = parseInt(txtIdNumeroUno.value);
var n2 = parseInt(txtIdNumeroDos.value);
	alert(n1*n2);	
}

function dividir()
{
	var n1 = parseInt(txtIdNumeroUno.value);
var n2 = parseInt(txtIdNumeroDos.value);
	alert(n1/n2);	
}

