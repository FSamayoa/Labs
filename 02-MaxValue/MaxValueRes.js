function MaxValue(shares) {
  // Your code here:

  // O(n^2)
  // let ganancia = -Infinity;
  // for (let i = 0; i < shares.length; i++) {
  //   let compra = shares[i];
  //   for (let j = i + 1; j < shares.length; j++) {
  //     let venta = shares[j];
  //     if (ganancia < venta - compra) {
  //       ganancia = venta - compra;
  //     }
  //   } 
  // }
  // return ganancia;

  // O(n)
  let precioMinimo = shares[0];
  let gananciaMaxima = -Infinity;

  for (let i = 1; i < shares.length; i++) {
    const gananciaPotencial = shares[i] - precioMinimo;

    gananciaMaxima = Math.max(gananciaMaxima, gananciaPotencial);

    precioMinimo = Math.min(precioMinimo, shares[i]);
  }
  return gananciaMaxima;
}

console.log(MaxValue([4, 3, 2, 5, 11])); //(9)

console.log(MaxValue([11, 8, 5, 4, 3, 2]));
console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5)
module.exports = MaxValue;