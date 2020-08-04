/*
mayor de edad (mas de 18 años) o 
    5           adolescente (entre 13 y 17 años) o 
    6:          niño (menor a 13 años).

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 3:
el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven
*/
function mostrar()
{
  //declarar contadores y variables 
  var continua;
  var nombre;
  var sexo;
  var edad;
  var edadMinima;
  var esPrimeraEdadMinima;
  var nombreMinima;
  var sexoMinima;
  var edadMayor;
  var esPrimeraEdadMayor;
  var nombreMayor;
  var sexoMayor;
  
  esPrimeraEdadMinima= true;
  continua = true;
  esPrimeraEdadMayor = true;

  while(continua)
  {   
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

    if(esPrimeraEdadMinima || edad < edadMinima)
    {
        edadMinima = edad;
        sexoMinima = sexo;
        nombreMinima = nombre;
    }

    if(esPrimeraEdadMayor || edad > edadMayor)
    {
        edadMayor = edad;
        sexoMayor = sexo;
        nombreMayor = nombre;    
    }
    esPrimeraEdadMayor = false;
    esPrimeraEdadMinima = false;

    continua = confirm("Continua?");
  }//fin del while

  alert("El nombre de la persona mayor es :" + nombreMayor);
  alert("El sexo de la persona mayor es :" + sexoMayor);
  alert("El nombre de la persona menor es :" + nombreMinima);
  alert("El sexo de la persona menor es :" + sexoMinima);
  
}//FIN DE LA FUNCIÓN

