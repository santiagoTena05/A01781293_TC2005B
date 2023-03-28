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

//Ejercicio 2
const form = document.getElementById("form1");
const submitBtn = document.getElementById("form1-submit");

submitBtn.addEventListener("click", (event) => {
event.preventDefault();

const firstName = document.getElementById("form-fname").value;
const lastName = document.getElementById("form-lname").value;

const fullName = document.createElement("p");
fullName.textContent = `Nombre Completo: ${firstName} ${lastName}`;

form.appendChild(fullName);
});

//Ejercicio 3
// Get references to the table and buttons
const table = document.getElementById("sampleTable");
const insertRowBtn = document.getElementById("btn-insert-r");
const insertColBtn = document.getElementById("btn-insert-c");

// Add event listener to the insert row button
insertRowBtn.addEventListener("click", function() {
  // Insert a new row at the end of the table
  const newRow = table.insertRow(-1);
  // Add two cells to the new row
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  // Set the cell values for the new row
  newCell1.innerHTML = "New row column 1";
  newCell2.innerHTML = "New row column 2";
});

// Add event listener to the insert column button
insertColBtn.addEventListener("click", function() {
  // Loop through each row in the table
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    // Insert a new cell at the end of each row
    const newCell = rows[i].insertCell(-1);
    // Set the cell value for the new column
    newCell.innerHTML = "New column";
  }
});

//Ejercicio 4
  // Get the button element and add a click event listener to it
  const btnChange = document.getElementById('btn-change');
  btnChange.addEventListener('click', () => {
    // Get the values entered by the user for row index, column index, and new value
    const rowIndex = document.getElementById('rowIndex').value-1;//Yo agregué el -1 porque el índice empieza en 0
    const colIndex = document.getElementById('colIndex').value-1;//Yo agregué el -1 porque el índice empieza en 0
    const newValue = document.getElementById('newValue').value;
    // Get the HTML table element and select the specific cell to update
    const table = document.getElementById('myTable');
    const row = table.rows[rowIndex];
    const cell = row.cells[colIndex];
    // Update the content of the selected cell with the new value entered by the user
    cell.textContent = newValue;
  });

  //Ejercicio 5
      // Obtener elementos del DOM
      const colorSelect = document.getElementById("colorSelect");
      const addBtn = document.getElementById("btn-add-color");
      const rmvBtn = document.getElementById("btn-rmv-color");
      
      // Función para agregar un color a la lista de opciones
      function addColor() {
          // Crear un nuevo elemento de opción
          const newColor = document.createElement("option");
          // Asignarle un valor y texto aleatorio
          const colors = ["Blue", "Yellow", "Purple", "Orange", "Gray", "Fiusha", "Pink", "Brown"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          newColor.value = randomColor;
          newColor.text = randomColor;
          // Agregar el nuevo elemento a la lista de opciones
          colorSelect.add(newColor);
      }
      
      // Función para quitar el último color de la lista de opciones
      function removeColor() {
          // Obtener el número de opciones en la lista
          const numColors = colorSelect.length;
          // Verificar si hay opciones para remover
          if (numColors > 0) {
              // Remover el último elemento de la lista
              colorSelect.remove(numColors - 1);
          }
      }
      
      // Agregar escuchadores de eventos a los botones
      addBtn.addEventListener("click", addColor);
      rmvBtn.addEventListener("click", removeColor);

//Ejercicio 6
    // Obtener la imagen del DOM
    const imagenGato = document.getElementById("imagenGato");
    
    // Función para generar un número aleatorio entre un mínimo y un máximo
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Función para cambiar el tamaño de la imagen
    function cambiarTamaño() {
        // Generar dos números aleatorios entre 300 y 600
        const width = getRandomNumber(300, 600);
        const height = getRandomNumber(300, 600);
        // Construir la URL de la imagen con el tamaño aleatorio generado
        const url = `http://placekitten.com/${width}/${height}`;
        // Reemplazar la imagen actual por una nueva con el tamaño aleatorio generado
        imagenGato.src = url;
    }
    
    // Agregar un escuchador de eventos al poner el mouse encima de la imagen
    imagenGato.addEventListener("mouseenter", cambiarTamaño);