function FindNeedle(haystack, needle) {
  //O(n*m)
  // Your code here:
  // for (let i = 0; i < haystack.length; i++) {
  //   // for (let j = 0; j < needle.length; j++) {
  //   //   if (needle[j] !== haystack[i + j]) break;
  //   //   if (j === needle.length - 1) return i;
  //   // }
  //   if (haystack.slice(i, i + needle.length) === needle) return i;
  // }
  // return -1;

  // "búsqueda rápida" (fast search) o "búsqueda de Boyer-Moore".
  /*

Preparación de datos: Antes de comenzar la búsqueda, se realizan algunas preparaciones de datos para acelerar el proceso.

Se calcula la longitud de la cadena haystack y la longitud de la subcadena needle.
Se crea un objeto llamado lastCharIndex que almacena el índice de la última ocurrencia de cada carácter en la subcadena needle.
Búsqueda principal: El algoritmo utiliza dos índices, i y j, para realizar la búsqueda principal. i representa la posición actual en haystack, mientras que j representa la posición actual en needle.

Comparación de caracteres desde atrás hacia adelante: El algoritmo comienza a comparar los caracteres desde el final de needle hacia el principio y desde la posición i + j en haystack. Si los caracteres coinciden, j se decrementa y el algoritmo continúa comparando hacia atrás.

Caso de coincidencia completa: Si j llega a ser -1, significa que se ha encontrado una coincidencia completa de needle en haystack desde la posición i. En este caso, la función devuelve i, que es la posición en haystack donde se encontró la subcadena.

Caso de no coincidencia parcial: Si en algún punto la comparación de caracteres falla (es decir, needle[j] no coincide con haystack[i + j]), el algoritmo utiliza la tabla lastCharIndex para calcular cuántos caracteres puede saltar hacia adelante antes de realizar la siguiente comparación. Esto se hace para evitar comparar caracteres que ya sabemos que no coinciden.

Desplazamiento con respecto a la tabla lastCharIndex: El algoritmo calcula el valor de badCharIndex, que es el índice en lastCharIndex correspondiente al carácter que no coincide (haystack[i + j]). Luego, el índice i se desplaza hacia adelante por una cantidad específica. Esta cantidad se calcula como el máximo entre 1 y la diferencia entre j y badCharIndex. Esto asegura que el índice i siempre se desplace hacia adelante al menos una posición.

Repetición del proceso: El proceso se repite hasta que i llega a una posición en haystack donde no se puede encontrar una coincidencia completa de needle. En ese caso, la función devuelve -1 para indicar que no se encontró ninguna coincidencia.
  */

  const haystackLength = haystack.length;
  const needleLength = needle.length;
  const lastCharIndex = {};

  for (let i = 0; i < needleLength; i++) {
    lastCharIndex[needle[i]] = i;
  }

  let i = 0;

  while (i <= haystackLength - needleLength) {
    let j = needleLength - 1;

    while (j >= 0 && needle[j] === haystack[i + j]) {
      j--;
    }

    if (j === -1) {
      return i;
    } else {
      const badChar = haystack[i + j];
      const badCharIndex = lastCharIndex[badChar] || -1;
      i += Math.max(1, j - badCharIndex);
    }
  }

  return -1;
}
module.exports = FindNeedle;

console.log(FindNeedle("react-redux", "redux")); //(6)
console.log(FindNeedle("pinky", "puntual")); //(-1)
console.log(FindNeedle("rereredux", "reredux")); //(2)
