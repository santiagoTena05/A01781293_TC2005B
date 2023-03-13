
//Ejercicio 1
function ejercicio1(){
    let str = 'abacddbec';
    for (let i = 0; i < str.length; i++) {
        let flag = true;
        for (j = 0; j < str.length; j++) {
            // console.log(str[i], str[j]);
            if (str[i] == str[j] && i !== j) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(str[i]);
        }
    }
}

//Ejercicio 2 Bubble-sort order list of numbers

function ejercicio2(){
    let arr = [1, 23, 64, 2, 9, 11, 23, 4];
    
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

//Ejercicio 4
function ejercicio4(){
    let ej4 = 'hola que tal';
    let ej4Arr = ej4.split(' ');
    
    for (let i = 0; i < ej4Arr.length; i++) {
        ej4Arr[i] = ej4Arr[i].charAt(0).toUpperCase() + ej4Arr[i].slice(1); //
    }
    console.log(ej4Arr.join(' '));
} 

//Ejercicio 6 
function ejercicio6(){
    let ej6 = 'Javascript es padrisimo';
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

//Ejercicio 8 Deletes duplicate values in an array
function ejercicio8() {
    let ej8 = [1, 2, 3, 4, 5, 6, 6, 7, 3, 1, 5, 8, 9, 5, 5, 5];
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

//Ejercicio 10 
function ejercicio10() {
    let ej10 = 'anitalavalatina';
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

//Ejercicio 12
//Mediana y moda de una lista de numeros
function ejercicio12() 
{
    let ej12 = [1, 2, 3, 4, 5, 6, 6, 7, 10, 3, 1, 5, 8, 9, 5, 5, 15, 8,8,8,8,8,8,8,8];
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

//Ejercicio 14 Checks if a number is a power of 2
function ejercicio14() {
    let ej14 = 64;
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

ejercicio1();
ejercicio2();
ejercicio4();
ejercicio6();
ejercicio8();
ejercicio10();
ejercicio12();
ejercicio14();