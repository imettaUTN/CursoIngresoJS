/*
IVAN METTA
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
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
 	var strEstadoCivil;
 	var strNacionalidad;
 	var strSexo;

 	//edad
 	edadIngresada = prompt("Ingrese Edad");
	edadIngresada = parseInt(edadIngresada);
	while(edadIngresada < 18 || edadIngresada >90 || isNaN(edadIngresada))
	{
		alert("La edad debe estar entre 18 y 90 años");
		edadIngresada = prompt("Ingrese Edad");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;

	//sexo
	sexoIngresado = prompt("Ingrese Sexo. M para masculino, F para femenino");
	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		alert("El sexo ingresado es invalido");
		sexoIngresado = prompt("Ingrese Sexo. M para masculino, F para femenino");
	}
	if(sexoIngresado == "M"){
		strSexo = "masculino";
	}
	else
	{
		strSexo = "femenino";
	}
	txtIdSexo.value = strSexo;

	//estado civil
	estadoCivilIngresado = prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"); 
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado <0 || estadoCivilIngresado > 4 || isNaN(estadoCivilIngresado))
	{
		alert("El estado civil ingresado es invalido");
		estadoCivilIngresado = prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"); 
		estadoCivilIngresado = parseInt(estadoCivilIngresado);		
	}
   	switch(estadoCivilIngresado)
   	{
   		case 1 :
   			strEstadoCivil = "soltero";
   		case 2:
   			strEstadoCivil = "casado";
   		case 3:
   			strEstadoCivil = "divorciado";
   		case 4:
   			strEstadoCivil = "viudo";
   	}
   	txtIdEstadoCivil.value = strEstadoCivil;

   	//sueldo bruto
   	sueldoBrutoIngresado = prompt("Ingrese sueldo bruto"); 
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	while(sueldoBrutoIngresado <8000)
	{	
		alert("El sueldo bruto ingresado es invalido");
		sueldoBrutoIngresado = prompt("Ingrese sueldo bruto"); 
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);		
	}
	txtIdSueldo.value = estadoCivilIngresado;

	//legajo
	nroLegajoIngresado = prompt("Ingrese nro legajo"); 
	nroLegajoIngresado = parseInt(nroLegajoIngresado);	
	while(nroLegajoIngresado <1000 || nroLegajoIngresado > 9999 || isNaN(nroLegajoIngresado))
	{
		alert("Nro de legajo ingresado es invalido");
		nroLegajoIngresado = prompt("Ingrese nro legajo"); 
		nroLegajoIngresado = parseInt(nroLegajoIngresado);		
	}	
	txtIdLegajo.value = nroLegajoIngresado;

	//nacionalidad A E N

	NacionalidadIngresada = prompt("Ingrese Nacionalidad", "E"); 
	while(NacionalidadIngresada != "N" && NacionalidadIngresada != "A" && NacionalidadIngresada != "E")
	{
		alert("Nacionalidad ingresada es invalida");
		NacionalidadIngresada = prompt("Ingrese Nacionalidad", "E"); 
	}
	switch(NacionalidadIngresada)
	{
		case "N":
			strEstadoCivil = estadoCivilIngresado;
		case "A"
			strEstadoCivil = estadoCivilIngresado;
		default :
			strEstadoCivil = estadoCivilIngresado;

	}
	txtIdNacionalidad.value = strEstadoCivil;

}
