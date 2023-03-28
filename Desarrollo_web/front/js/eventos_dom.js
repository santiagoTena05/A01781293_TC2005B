// q: ¿Qué es el DOM?
// r: El DOM es la representación de un documento HTML en forma de árbol de nodos.

// q: ¿Qué es un nodo?
// r: Un nodo es un elemento del árbol DOM.

// q: ¿Cómo se accede a un elemento del DOM?
// r: Mediante el método document.getElementById('id').

// q:¿Cómo se modifica un elemento del DOM?
// r: Mediante el método document.getElementById('id').innerHTML = 'nuevo valor';

// q: ¿Cuál es la diferencia entre geElementby* y querySelector?
// r: getElementby* devuelve un elemento, querySelector devuelve una lista de elementos.

// q: ¿Qué es un evento?
// r: Es una acción que se produce en el navegador, como por ejemplo el click de un botón.

// q: ¿Qué es un listener?
// r: Es una función que se ejecuta cuando se produce un evento.

// q: ¿Qué es un callback?
// r: Es una función que se pasa como parámetro a otra función.

// q: ¿Qué es un objeto de evento?
// r: Es un objeto que se pasa como parámetro a la función callback.

//Display mouse coordinates in document
function ej1() {
    document.getElementById("ej1").innerHTML = "Mouse coordinates: " + event.clientX + ", " + event.clientY;
}


