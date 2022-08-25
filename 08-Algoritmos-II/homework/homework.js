'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[0];
  let left = [];
  let right = [];
  let equal = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else if (array[i] > pivot) right.push(array[i]);
    else equal.push(array[i]);
  }
  return quickSort(left).concat(equal).concat(quickSort(right))
}
console.log(quickSort([5, 1, 4, 2, 8]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  //   let newArray = []
  //   let tamaño = array.length;
  //   console.log(tamaño)
  //   let tiz = Math.floor(tamaño / 2);
  //   console.log(tiz)
  //   let tder = Math.ceil(tamaño / 2);
  //   console.log(tder)

  //   let izq = array.slice(0, tiz);
  //   console.log(izq)

  //   let der = array.slice(tiz, tiz + tder);
  //   console.log(der)
  //   if (array.length === 2) {
  //     if (izq < der) {
  //       newArray = izq.concat(der);
  //     }
  //     else {
  //       newArray = der.concat(izq);
  //     }
  //     return newArray;
  //   }
  //   if (izq.length > 1) {
  //     newArray.shift(mergeSort(izq));
  //   }
  //   if (der.length > 1) {
  //     newArray.push(mergeSort(der));
  //   }
  //   console.log(newArray)
  //   return array;
}
// console.log(mergeSort([5, 1, 4, 2, 8]))




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
