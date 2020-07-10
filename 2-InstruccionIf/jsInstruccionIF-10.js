function mostrar()
{
	
var nro = aleatorio(10,1);
if(nro >= 9){
  alert("EXCELENTE");
}
if(nro >= 4 && nro < 9){
	 alert("APROBO");
}
if(nro <4){
	alert("Vamos, la proxima se puede");
}
}//FIN DE LA FUNCIÓN

function aleatorio(max,min){

   return Math.round(Math.random() * (max - min) + min);
}