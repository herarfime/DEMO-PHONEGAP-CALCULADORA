// JavaScript Document

function Calcular(operador) {
  

   var f1=new Array(2);
 

   var f2=new Array(2);
   var r=new Array(2);
   

    
	
   f1[0]=document.getElementById("N1").value;
   
   
   f2[0]=document.getElementById("N2").value;
   f1[1]=document.getElementById("D1").value;
   f2[1]=document.getElementById("D2").value;

   


  
   switch(operador) {
	   case '+' :
	      document.getElementById("operador").src="imagenes/mas.png";
		  r[0] = f1[0] * f2[1] + f1[1] * f2[0];
		  r[1] = f1[1] * f2[1] ;		  
	   
	   break
	   
	   case '-':
	      document.getElementById("operador").src="imagenes/menos.png";

		  r[0] = f1[0] * f2[1] - f1[1] * f2[0];

		  r[1] = f1[1] * f2[1] ;		    
 
	   break
	   
	   case '*' :
	      document.getElementById("operador").src="imagenes/mul.png";
		  r[0] = f1[0] * f2[0] ;
		  r[1] = f1[1] * f2[1] ;		  
	   
	   break

	   case '/' :
	      document.getElementById("operador").src="imagenes/div.png";
		  r[0] = f1[0] * f2[1] ;
		  r[1] = f1[1] * f2[0] ;		  
	   
	   break
	     
	    
   }
   

	document.getElementById("RN").value=r[0];
	document.getElementById("RD").value=r[1];

}


