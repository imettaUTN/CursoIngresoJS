/*
Agregado while

IVAN METTA nivel dios
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

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/
function mostrar()
{
  //declarar contadores y variables 
  var continua = true;
  var nombre;
  var sexo;
  var edad;
  var edadMinima;
  var esPrimerEdadMinima;
  esPrimerEdadMinima = true;
  var nombreEdadMinima;
  var cantidadEdadMinima;
  //siempre voy a tener al menos 1
  cantidadEdadMinima = 1;
  var edadMayor;
  var esPrimerEdadMayor;
  esPrimerEdadMayor = true;
  var nombreEdadMayor;
  var cantidadEdadMayor;
  //siempre voy a tener al menos 1
  cantidadEdadMayor = 1;

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

    while(sexo != "f" && sexo != "m")
    {
      alert("Sexo invalido: el mismo debe ser f o m");
      sexo = prompt("Ingrese sexo");
    }

    if(esPrimerEdadMinima)
    {
      edadMinima = edad; 
    }
    else
    {
      if(edad < edadMinima)
      {
        edadMinima = edad;  
        // cuando cambio de edad minima reinicio el contador
        cantidadEdadMinima = 1; 
        //guardo el nombre del que ingreso la edad minima por si hay una sola persona con esas edad
        nombreEdadMinima = nombre;
      }
      else
      {
        if(edad == edadMinima)
        {
          cantidadEdadMinima ++;
          //vuelvo a pisar el nombre de la persona que ingreso edad minima, 
          //de manera que siempre me quede el ultimo ingresado
          nombreEdadMinima = nombre;
        }
      }
    }
   
    if(esPrimerEdadMayor)
    {
      edadMayor = edad;
    }
    else
    {
      if(edad > edadMayor)
      {
        edadMayor = edad;
        // cuando cambio de edad maxima reinicio el contador
        cantidadEdadMayor = 1;  
        //guardo el nombre del que ingreso la edad mayor por si hay una sola persona con esas edad
        nombreEdadMayor = nombre;
      }
      else
      {
        if(edad == edadMayor)
        {
          cantidadEdadMayor ++:
          //vuelvo a pisar el nombre de la persona que ingreso edad maxima, 
          //de manera que siempre me quede el ultimo ingresado
          nombreEdadMayor = nombre;
        }
      }
    }
    }
    continua = confirm("Continua?");
  }//fin del while

  alert("el nombre de la ultima persona con la mayor edad encontrada :" + nombreEdadMayor);
  alert("el nombre de la ultima persona con la menor edad encontrada :" + nombreEdadMinima);
  alert("cantidad personas hay con la edad minima :" + cantidadEdadMinima);
  alert("cantidad personas hay con la edad mayor :" + cantidadEdadMayor);
  
}//FIN DE LA FUNCIÓN
