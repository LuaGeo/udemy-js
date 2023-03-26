let num1 = 1;
let num2 = 2;

num1++; // forma posfixada
console.log(num1);

--num1; // forma prefixada (tem prioridade maior que a posfixada, assim como a multiplicação tem...
//...prioridade maior que a divisão na tabela de precedência)
console.log(num1);

// num1 + num2; // forma infixada

console.log(++num1 === num2--); // da true pois o -- é lido so depois do num2 (++num1 = 2 === num2)
console.log(num1 === num2); // nessa linha ja da false pois o -- da linha anterior foi levado em conta
