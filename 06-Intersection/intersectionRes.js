function intersection(arr1, arr2) {
    // Your code here:
  ​
    // O^(n*m)
    // let repetidos = [];
  ​
    // for (let i = 0; i < arr1.length; i++) {
    //   for (let j = 0; j < arr2.length; j++) {
    //     if (arr1[i] === arr2[j]) {
    //       repetidos.push(arr1[i]);
    //       break;
    //     }
    //   }
    // }
    // return repetidos;
  ​
    // const set1 = new Set(arr1);
    // // const map2 = new Map(arr2);
  ​
    // let repetidos = [];
    // for (const elemento of arr2) {
    //   if (set1.has(elemento)) {
    //     repetidos.push(elemento);
    //   }
    // }
    // return repetidos;
  ​
    // Opcion CHATGPT O(n+m)
    let repetidos = arr1.filter((elemento) => arr2.includes(elemento));
    let set1 = new Set(repetidos);
    return Array.from(set1);
  }
  ​
  module.exports = intersection;
  ​
  console.log(intersection([1, 3, 3, 5, 5, 5, 7, 10], [2, 3, 6, 8, 10, 20])); // ([3, 10])
  console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])); // ([])