let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("os verdadeiros...");
console.log(!!3); // ! negação !! dupla negação = afirmação (usado para mostrar resultado booleano)
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!"texto");

console.log("os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
console.log(!!("" || null || 0 || "epa")); //retorna true pois basta um ser verdadeiro (|| = or)
console.log("" || null || 0 || "epa"); //retorna o primeiro valor verdadeiro que ele encontrar
console.log(!!("" && null && 0 && "epa")); // retorna false pois todos precisariam ser verdadeiros (&& = and)

console.log("exemplo pratico:");

let nome = "";
console.log(nome || "Desconhecido");

let nome2 = "Lucas";
console.log(nome2 || "Desconhecido");
