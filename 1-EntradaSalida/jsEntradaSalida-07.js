/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
var sNumero1
var sNumero2
sNumero1 = txtIdNumeroUno.value;
sNumero1= parseInt(sNumero1);
sNumero2 = txtIdNumeroDos.value;
sNumero2= parseInt(sNumero2);
var sSuma = sNumero1 + sNumero2;
alert(sSuma);	
}

/*Test sumar
Numero 1: 100 Numero 2: 80 resultado : 180
Numero 1: 500 Numero 2: 80 resultado : 580
Numero 1: 333 Numero 2: 77 resultado : 410
*/
function restar()
{
var sNumero1
var sNumero2
sNumero1 = txtIdNumeroUno.value;
sNumero1= parseInt(sNumero1);
sNumero2 = txtIdNumeroDos.value;
sNumero2= parseInt(sNumero2);
var sResta = sNumero1 - sNumero2;
alert(sResta);	
}


/*Test sumar
Numero 1: 100 Numero 2: 80 resultado : 20
Numero 1: 500 Numero 2: 80 resultado : 420
Numero 1: 333 Numero 2: 33 resultado : 300
*/

function multiplicar()
{ 
var sNumero1
var sNumero2
sNumero1 = txtIdNumeroUno.value;
sNumero1= parseInt(sNumero1);
sNumero2 = txtIdNumeroDos.value;
sNumero2= parseInt(sNumero2);
var sResultado = sNumero1 * sNumero2;
alert(sResultado);		
}


/*Test sumar
Numero 1: 100 Numero 2: 80 resultado : 8800
Numero 1: 500 Numero 2: 80 resultado : 40000
Numero 1: 333 Numero 2: 77 resultado : 25641
*/
function dividir()
{
var sNumero1
var sNumero2
sNumero1 = txtIdNumeroUno.value;
sNumero1= parseInt(sNumero1);
sNumero2 = txtIdNumeroDos.value;
sNumero2= parseInt(sNumero2);
var sResultado = sNumero1 /sNumero2;
alert(sResultado);			
}


/*Test sumar
Numero 1: 100 Numero 2: 80 resultado : 1.25
Numero 1: 500 Numero 2: 80 resultado : 6.25
Numero 1: 333 Numero 2: 77 resultado : 4.32
*/