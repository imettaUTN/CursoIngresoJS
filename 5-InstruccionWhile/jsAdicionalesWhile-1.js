/*
mayor de edad (mas de 18 años) o 
    5           adolescente (entre 13 y 17 años) o 
    6:          niño (menor a 13 años).

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;
*/
function mostrar()
{
  //declarar contadores y variables 
  var continua;
  continua = true;
  var nombre;
  var sexo;
  var edad;
  var cantidadIngresada;
  var cantidadMenores;
  var cantidadAdolescente;
  var cantidadMayores;
  var edadMenor ;
  var primerMayor;
  var edadMayor ;
  var primerMenor;

  cantidadIngresada = 0;  
  cantidadMenores = 0;  
  cantidadAdolescente = 0; 
  cantidadMayores = 0;  
  primerMayor= true;  
  primerMenor =true ;

  while(continua)
  {   
    cantidadIngresada ++;
    nombre =prompt("Ingrese nombre");
    edad = prompt("Ingrese edad");
    edad =parseInt(edad);

    while(edad < 0 || edad > 120 || isNaN(edad))
    {
      alert("Edad invalidad: la misma debe ser de 0 a 120");
      edad = prompt("Ingrese edad");
      edad =parseInt(edad);
    }
    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();
    while(sexo != "F" && sexo != "M")
    {
      alert("Sexo invalido: el mismo debe ser f o m");
      sexo = prompt("Ingrese sexo");
      sexo = sexo.toUpperCase();

    }
    
    if(edad > 18)
    {
      cantidadMayores ++;
    }
    else
    {     
      if(edad > 12)
      {
        cantidadAdolescente ++;
      }
      else
      {
        cantidadMenores++;
      }
    }
    
    if(primerMayor ||edad > edadMayor)
    {
        edadMayor = edad;     
    }
    primerMayor = false;

    if(primerMenor ||edad < edadMenor)
    {
        edadMenor = edad;
    }
    primerMenor = false;
      
    continua = confirm("Continua?");
  }//fin del while

  alert("La cantidad de menores es :" + cantidadMenores);
  alert("La cantidad de mayores es :" + cantidadMayores);
  alert("La cantidad de adolescentes es :" + cantidadAdolescente);
  alert("La edad mas vieja es :" + edadMayor);
  alert("La edad mas joven es :" + edadMenor);
//FIN DE LA FUNCIÓN
}