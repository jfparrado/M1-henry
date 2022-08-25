'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  console.log(num)
  for (let i = 2; num !== 1; i++) {
    if (num % i === 0) {
      num /= i;
      array.push(i);
      i = 1;
    }
  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let guardador = undefined;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        guardador = array[i + 1];
        array[i + 1] = array[i];
        array[i] = guardador;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let guardador = undefined;
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    j = i;
    while ((j > 0) && (array[j] < array[j - 1])) {
      guardador = array[j - 1];
      array[j - 1] = array[j];
      array[j] = guardador;
      j--;
    }
  }

  return array;
}
console.log(bubbleSort([5, 1, 4, 2, 8]))


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let guardador = undefined;

  let posicion = undefined;
  for (let i = 0; i < array.length; i++) {
    let minimo = array[i];
    console.log(array + "\n");
    for (let j = i; j < array.length; j++) {

      if (array[j] < minimo) {
        minimo = array[j];
        posicion = j;
      }
    }
    if (array[i] != minimo) {

      guardador = array[i];

      array[i] = array[posicion];

      array[posicion] = guardador;
    }
  }
  console.log(array);
  return array;
}
console.log(factorear(180));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
