/*
mayor de edad (mas de 18 años) o 
    5           adolescente (entre 13 y 17 años) o 
    6:          niño (menor a 13 años).

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 2:
cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 
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
  var cantidadHombres;
  var cantidadMujeres;
  var cantidadEdadesPares;
  var cantidadAdolescenteMujeres;
  var cantidadNiñosHombres;
  var sumEdadMujeres;
  var sumEdadHombres;

  cantidadMujeres = 0;
  cantidadHombres = 0;
  cantidadIngresada =0;
  cantidadEdadesPares= 0;
  cantidadAdolescenteMujeres = 0;
  cantidadNiñosHombres = 0;
  sumEdadMujeres =0;
  sumEdadHombres = 0;

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
    
    switch(sexo)
    {
      case "M":
        cantidadHombres ++;
        if(edad <13)
        {
          cantidadNiñosHombres ++;
        }
        sumEdadHombres += edad;
        break;

      case "F":
        cantidadMujeres ++;
        if(edad < 18 && edad > 12)
        {
          cantidadAdolescenteMujeres++;
        }
        sumEdadMujeres += edad;
        break;
    }

    if(edad % 2 ==0)
    {
      cantidadEdadesPares++;
    }
    continua = confirm("Continua?");
  }//fin del while

  alert("La cantidad de hombres es :" + cantidadHombres);
  alert("La cantidad de mujeres es :" + cantidadMujeres);
  alert("La cantidad de adolescentes mujeres es :" + cantidadAdolescenteMujeres);
  alert("La cantidad de niños hombres es: " + cantidadNiñosHombres);
  alert("El promedio de edad es :"+ (sumEdadMujeres + sumEdadHombres) / cantidadIngresada);
  alert("El promedio de edad de hombre es :" + sumEdadHombres / cantidadHombres);
  alert("El promedio de edad de mujeres es :" + sumEdadMujeres / cantidadMujeres);
  alert("La cantiad de edades pares es: " + cantidadEdadesPares);

}//FIN DE LA FUNCIÓN

