###Ejercicio17.3

##### Contexto

 Dado un número entero n, realizar las siguientes condiciones:
* Si n es impar, imprimir Odd! (Impar)
* Si n es par y está entre 2 y 5, imprimir Good! (Bien)
* Si n es par y está entre 6 y 20, imprimir Great! (Genial)
* Si n es par y es mayor que 20, imprimir Perfect! (Perfecto)
Nota: Considerar que n es un número entero entre 1 y 100.
*Caso de Prueba 1
Input
3
Output
Odd!
*Caso de Prueba 2
Input
24
Output
Perfect!
*Caso de Prueba 3
Input
16
Output
Great!
*Caso de Prueba 4
Input
4
Output
Good!
 
##### Pseudocodigo

1. Inicio
2. Ingrese num
3. ¿num es par?
->si ->¿num>=2 y num<=5?
	->si ->Imprime good!
	->no -> ¿num>=6 y num<=20?
		->si ->Imprimir great!
		->no -> ¿num>20 y num<=100?
				->si ->Imprimir perfect
->no ->Imprime odd
4. Calcular suma=num1+num2
5. Resultado suma
6. Fin

#### Imagen

![imagen](http://i64.tinypic.com/33m0iz7.jpg)
