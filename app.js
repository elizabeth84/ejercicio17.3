var num=parseInt(prompt("Ingrese el número"));
if(num<=100){
	if(num%2==0){
	if(num>=2 && num<=5){
		document.write("Good!");
	}else if(num>=6 && num<=20){
		document.write("Great!");
	}else if(num>20){
		document.write(" Perfect!");
	}
}
else{
document.write("Odd!");
}	
}
