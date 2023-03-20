const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
valores[10] = 20;
console.log(valores);

console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop()); // retira e imprime o ultimo item do array
delete valores[0]; // retira o primeiro item do array (nesse caso o index 1 não passa a ser o 0. O index 0 vira undefined)
console.log(valores);

console.log(typeof valores);

console.log(valores[1]);
console.log(valores[0]);
