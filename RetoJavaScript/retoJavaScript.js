/* Reto JavaSript 1*/

var numero=parseInt(prompt("Ingrese un numero entero mayor que 1"))

    let cadena="El numero es primo"
    
    if (numero == 0 || numero == 1 || numero == 4)
    
    {
    
        cadena="El numero no es primo"
    
    }
    
    for (let i = 2; i < numero / 2; i++)
    
    {
    
        if (numero%i==0)
    
        {
    
            cadena="El numero no es primo"
    
        }
    
    }
    
    alert(cadena);

/* Reto JavaSript 2 */

var opt = 0;
while(opt != 4){
    var opt = parseInt(prompt("Menu: \n\n1.triangulo \n2.rectangulo\n3.circulo\n4.salir"));
    switch(opt){
        case 1:
            var altura = parseInt(prompt("Ingrese la altura del triangulo"));
            var base = parseInt(prompt("Ingrese la base del triangulo"));
            alert((base*altura)/2);
            break;
        case 2:
            var lA = parseInt(prompt("Ingrese el lado A del rectangulo"));
            var lB = parseInt(prompt("Ingrese el lado B del rectangulo"));
            alert(lA*lB);
            break;
        case 3:
            var radio = parseInt(prompt("Ingrese el radio del circulo"));
            alert(Math.pow(radio, 2)*Math.PI);
            break;
    }
}

/* Reto JavaSript 3 */

var num = parseInt(prompt("ingrese el numero"));
var chain = "";
for (let i = 1; i <= num; i++) {
    if(i%2 == 0){
        chain+= "\n"+ i + "- es par";
    }else{
        chain+= "\n"+ i + "- es impar";
    }
}
alert(chain);

/* Reto JavaSript 4 */

    var nombre = prompt("Escriba su nombre");
    var edad = prompt("Escriba su edad");

    console.log(`hola ${nombre}, tienes ${edad} años y el año 
    que viene tendras ` + (parseInt(edad) + 1) + ' años');


    

/* Reto JavaSript 5 */

var numero=parseInt(prompt("Ingrese un numero entero mayor que 1"));
var resultado=1;
for(let i=1 ; i<=numero ; i++)
{
    resultado=resultado*i;
}
alert(resultado);

/* Reto JavaSript 6 */

 var total = 0;
 var cont = 0;
 var num = 0;
while(total <= 50){
    num = parseInt(prompt("ingrese un numero"))
    cont++;
    total += num;
}
alert(`El total acumulado es de ${total} y se introducieron ${cont} numeros`)

/* Reto JavaSript 7 */

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]

var color=prompt("Digite un color")
var señal=colores.indexOf(color)
if(señal==1)
{
    console.log("El color si está dentro del array")
}
else
{
    console.log("El color no está dentro del array")
}

/* Reto JavaSript 8 */

var palabra=prompt("Ingrese una palabra")
var conCons=0
var conVoc=0
for (i = 0; i <= palabra.length; i++)
{
    if((palabra.charAt(i).match(/[aeiou]/)))
    {      

        conVoc++

    }
    else if((palabra.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)))
    {
        conCons++
    }
}
alert("La cantidad de consonantes son: "+conCons+"\nLa cantidad de vocales: "+conVoc+"\nLa longitud de la palabra es: "+palabra.length)

/* Reto JavaSript 9 */

var vec1 = new Array(5);
var par = [];
var impar = [];
var numRandom = parseInt((Math.random()*9)+1);
var cadena = "El resultado de la multiplicacion del primer vector es \n";
for(let i=0 ; i< vec1.length ; i++)
{
    vec1[i] = parseInt(prompt(`ingrese el numero ${i} del vector principal`));
}

for (let i = 0; i < vec1.length; i++)
{
    if((vec1[i]*numRandom)%2==0)
    {

        par.push(vec1[i]*numRandom)

    }
    else
    {
        impar.push(vec1[i]*numRandom)
    }
}

for(let i=0 ; i< vec1.length ; i++)
{
    cadena += `\n- Posicion ${i}: ${vec1[i]} * ${numRandom} = ${(vec1[i]*numRandom)}`
}
alert(cadena)
cadena= "Las matrices son: \n\n par: ["
for(let i=0 ; i< par.length -1 ; i++)
{
    cadena += `${par[i]},`
}
if(par[par.length - 1] != undefined){
    cadena += `${par[(par.length - 1)]}]\n\nimpar: [`
}else{
    cadena += `]\n\nimpar: [`
}
for(let i=0 ; i< impar.length -1; i++)
{
    cadena += `${impar[i]},`
}
if(impar[impar.length - 1] != undefined){
    cadena += `${impar[(impar.length - 1)]}]`
}else{
    cadena += `]`
}
alert(cadena)
