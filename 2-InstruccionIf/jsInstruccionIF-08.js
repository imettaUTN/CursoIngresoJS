/*
ivan metta
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	+a todos los mayores de edad ( > 18), mostrar el mensaje "se responsable"
	+a todos los menores de edad (< 18), mostrar el mensaje "respeta a tus mayores"
	+a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	+a los niños (<13) tambien informar "hagan la tarea" 
	+ a los adolescentes( >13 <18) casado o Divorciado " sos muy joven para no ser soltero"
	+a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	+ a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
function mostrar()
{
	var estadoCivilIngresado ;
	var edad;
	var mensajes = "";
	estadoCivilIngresado = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 18)
	{
      mensajes = "respeta a tus mayores";
	      if( edad < 13)
	      {
	      	mensajes = mensajes + " hagan la tarea"
	      }
	      else
	      {
	      	switch(estadoCivilIngresado)
	      	{
	        	case "Casado":
	        	case "Divorciado":
	        		mensajes = mensajes + " sos muy joven para no ser soltero";
	        		break;
	        	case "Soltero":
	        		mensajes = mensajes + " a vivir la vida";
	        		break;
	      	}
	      }
    }
    else
    {
      mensajes = "se responsable";
	      if(edad >59)
	      {
	      	mensajes = mensajes + "sos persona de riesgo";
	      }	      
		  switch(estadoCivilIngresado)
		  {
		    case "Casado":
		       	mensajes = mensajes + " a disfrutar la pareja";
		      	break;
		  }
		  
    }
    if(estadoCivilIngresado == "Divorciado")
    {
    	mensajes = mensajes + " a intentarlo nuevamente";
    }
	alert(mensajes);
}//FIN DE LA FUNCIÓN