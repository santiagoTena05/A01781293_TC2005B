"use strict";

//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function function1 (text) {
    console.log("Function 1");
    console.log("String a recorrer: " + text);
    for (let i = 0; i < text.length; i++) {
        let flag = true;
        for (let j = 0; j < text.length; j++) {
            if (text[i] == text[j] && i !== j) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(text[i]);
        }
    }
}

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function function2(arr){
    console.log("Function 2");
    console.log("Array inicial"+ arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
 function function3 (array) {
     console.log("Function 3");
     console.log("Array inicial: " + array);
     const result = [];
     for (let i= array.length - 1 ; i > -1; i--) {
        result.push(array[i]);

     }

    
     console.log(result);
     function3b(result);
     
    
 }

 function function3b (array) {
    console.log("Function 3b");
    console.log("Array inicial: " + array);
    
    const result = [];
    
    for (let i= array.length - 1 ; i > -1; i--) {
        
       result.push(array[i]);

    }
    console.log(result);
   
}

//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function function4(){
    console.log("Function 4")
    let ej4 = 'hola que tal';
    console.log("String inicial: " + ej4 + "")
    let ej4Arr = ej4.split(' ');
    
    for (let i = 0; i < ej4Arr.length; i++) {
        ej4Arr[i] = ej4Arr[i].charAt(0).toUpperCase() + ej4Arr[i].slice(1); //
    }
    console.log(ej4Arr.join(' '));
} 

//Escribe una función que calcule el máximo común divisor de dos números.
function function5 (a, b) {
    console.log("Function 5");
    console.log("Numeros iniciales: " + a + " " + b);
    let i=0;
    if (a <= b) {
        i=a
    }
    else{
        i=b
    }

    for ( i; i > 0; i--) {
        if (a%i==0 && b%i==0) {
            console.log(i);
            break;
        }
    }
}

// Crea una función que cambie una cadena de texto a 'Hacker Speak'.
function function6(){
    console.log("Function 6");
    let ej6 = 'Javascript es padrisimo';
    console.log("String inicial: " + ej6 + "")
    let ej6Arr = ej6.split('');
    for (let i = 0; i < ej6Arr.length; i++) {
        switch (ej6Arr[i]) {
            case 'a':
                ej6Arr[i] = '4';
                break;
            case 'e':
                ej6Arr[i] = '3';
                break;
            case 'i':
                ej6Arr[i] = '1';
                break;
            case 'o':
                ej6Arr[i] = '0';
                break;
            case 's':
                ej6Arr[i] = '5';
                break;
            case 't':
                ej6Arr[i] = '7';
                break;
            default:
                break;
        }
    }
    console.log(ej6Arr.join(''));
}

  
//Escribe una función que reciba un número, y regrese una lista con todos sus factores. 
function function7 (a) {
    console.log("Function 7");
    console.log("Numero inicial: " + a );
    const result = [];

    for (let i=a ; i > 0; i--) {
        if (a%i==0) {
            result.push(i);
        }
    }
    console.log(result);
}

//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que queda
function function8() {
    console.log("Function 8");
    let ej8 = [1, 2, 3, 4, 5, 6, 6, 7, 3, 1, 5, 8, 9, 5, 5, 5];
    console.log("Array inicial: " + ej8 );
    let ej8Arr = [];
    for (let i = 0; i < ej8.length; i++) {
        let flag = true;
        for (let j = 0; j < ej8Arr.length; j++) {
            if (ej8[i] == ej8Arr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            ej8Arr.push(ej8[i]);
        }
    }
    console.log(ej8Arr);
}

//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function function9 (array) {
    console.log("Function 9");
    console.log("Array inicial: " + array);

    return array.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
      }, array[0]);
    
}

//Escribe una función que revise si una cadena de texto es un palíndromo o no.
function function10() {
    console.log("Function 10");
    let ej10 = 'anitalavalatina';
    console.log("String inicial: " + ej10);
    let ej10Arr = ej10.split('');
    let ej10ArrInvertido = ej10.split('').reverse();
    let flag = true;
    for (let i = 0; i < ej10Arr.length; i++) {
        if (ej10Arr[i] !== ej10ArrInvertido[i]) {
            flag = false;
            break;
        }
    }
    console.log(flag);
}

//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function function11 (array) {
    console.log("Function 11");
    console.log("Array inicial: " + array);
    array.sort();
    console.log(array);
    
}

//Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function function12() 
{
    console.log("Function 12");
    let ej12 = [1, 2, 3, 4, 5, 6, 6, 7, 10, 3, 1, 5, 8, 9, 5, 5, 15, 8,8,8,8,8,8,8,8];
    console.log("Array inicial: " + ej12);
    let ej12ArrModa = 0;
    let ej12ArrMediana = 0;
    let ej12ArrModaCount = 0;

    ej12.sort((a,b) => a - b);//Ordenar el array incluyendo numeros de mas de un digito

    //Mediana
    if (ej12.length % 2 == 0) {
        ej12ArrMediana = (ej12[ej12.length / 2] + ej12[(ej12.length / 2) - 1]) / 2;
    } else {
        ej12ArrMediana = ej12[Math.floor(ej12.length / 2)];
    }

    //Moda
    for (let i = 0; i < ej12.length; i++) {
        let count = 0;
        for (let j = 0; j < ej12.length; j++) {
            if (ej12[i] == ej12[j]) {
                count++;
            }
        }
        if (count > ej12ArrModaCount) {
            ej12ArrModaCount = count;
            ej12ArrModa = ej12[i];
        }
    }

    console.log("Mediana: " + ej12ArrMediana);
    console.log("Moda: " + ej12ArrModa);
}

//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function function13(array) {
    console.log("Function 13");
    console.log("Array inicial: " + array);
    let frequency = {};
    let maxFreq = 0;
    let mostFreqStr = '';
    
    for (let str of array) {
      if (!frequency[str]) {
        frequency[str] = 1;
      } else {
        frequency[str]++;
      }
      if (frequency[str] > maxFreq) {
        maxFreq = frequency[str];
        mostFreqStr = str;
      }
    }
    
    console.log ("The most frequent string is ", mostFreqStr, "showing up", maxFreq, "times");
  }

  //Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
  function function14() {
    console.log("Function 14");
    let ej14 = 64;
    console.log("Numero inicial: " + ej14 + "");
    let acum = 2;

    for(let i = 0; i < ej14; i++) {
        if (ej14 == acum) {
            console.log("Es pontencia de 2");
            break;
        } else if (ej14 < acum) {
            console.log("No es potencia de 2");
            break;
        } else {
            acum *= 2;
        }
    }
}

//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
  function function15(array) {
    console.log("Function 15");
    console.log("Array inicial: " + array);
    return array.sort(function(a, b) {
      return b - a;
    });
  }

console.log("test");
let array = [1, 21, 33, 4, 53, 16];
let strings = ["luffy", "blackbeard", "shanks", "law", "bigmom", "whitebeard"];
let stringsb = ["luffy", "blackbeard", "luffy", "shanks", "law", "luffy", "bigmom", "luffy", "whitebeard"];

function1 ("abacddbec");
function2 (array);
function3 (array);
function4 ();
function5 (175, 150);
function6 ();
function7 (50);
function8 ();
let shortest= function9 (strings);
console.log("The shortest string in the array is:", shortest);
function10 ();
function11 (strings);
function12 ();
function13 (stringsb);
function14 ();
let alf= function15 (array);
console.log(alf);
