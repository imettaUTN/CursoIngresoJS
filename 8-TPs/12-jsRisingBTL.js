/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	//	var sNombreIngresado = prompt("Nombre","Ingrese Nombre");
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var nroLegajoIngresado;
 	var NacionalidadIngresada;
 	var edadInValida = true;
 	var sexoInValido = true;
 	var estadoCivilInValido = true;
 	var sueldoBrutoInValido = true;
 	var NacionalidadInValida = true;
 	var legajoInValido = true;
 	//edad
	do
	{
		edadIngresada = prompt("Ingrese Edad");
		edadIngresada = parseInt(edadIngresada);
		edadInValida =(edadIngresada < 18 || edadIngresada >90);
		if(edadInValida)
		{ 
			alert("La edad debe estar entre 18 y 90 años");
		}
	}
	while(edadInValida);
	txtIdEdad.value = edadIngresada;

	//sexo
	do
	{
		sexoIngresado = prompt("Ingrese Sexo. M para masculino, F para femenino");
		sexoInValido =(sexoIngresado != "M" && sexoIngresado != "F");
		if(sexoInValido)
		{ 
			alert("El sexo ingresado es invalido");
		}
	}
	while(sexoInValido);
	txtIdSexo.value = sexoIngresado;

	//estado civil
	do
	{
		estadoCivilIngresado = prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"); 
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
		estadoCivilInValido =(estadoCivilIngresado <0 || estadoCivilIngresado > 4);		
		if(estadoCivilInValido)
		{ 
			alert("El estado civil ingresado es invalido");
		}
	}
	while(estadoCivilInValido);
	txtIdEstadoCivil.value = estadoCivilIngresado;

	//sueldo bruto
	do
	{
		sueldoBrutoIngresado = prompt("Ingrese sueldo bruto"); 
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
		sueldoBrutoInValido =(sueldoBrutoIngresado <8000);
		if(sueldoBrutoInValido)
		{ 
			alert("El sueldo bruto ingresado es invalido");
		}
	}
	while(sueldoBrutoInValido);
	txtIdSueldo.value = estadoCivilIngresado;

	//legajo
	do
	{
		nroLegajoIngresado = prompt("Ingrese nro legajo"); 
		nroLegajoIngresado = parseInt(nroLegajoIngresado);
		legajoInValido = (nroLegajoIngresado <1000 || nroLegajoIngresado > 9999);
		if(legajoInValido)
		{ 
			alert("Nro de legajo ingresado es invalido");
			legajoInValido = false;
		}
	}
	while(legajoInValido);
	txtIdLegajo.value = nroLegajoIngresado;

	//nacionalidad A E N
	do
	{
		NacionalidadIngresada = prompt("Ingrese Nacionalidad", "E"); 
		NacionalidadInValida = (NacionalidadIngresada != "N" && NacionalidadIngresada != "A" && NacionalidadIngresada != "E");
		if(NacionalidadInValida)
		{ 
			alert("Nacionalidad ingresada es invalida");
		}
	}
	while(NacionalidadInValida);
	txtIdNacionalidad.value = NacionalidadIngresada;

}
