// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // contexto léxico 2
  return saudacao;
}

// var saudacao = "Hola!"; (daria erro, a não ser que usasse var na linha 2, o que sobrescreveria o "Opa" pelo "Hola!")

// Objetos são grupos aninhados de pares nome/valor (chave/valor)

const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
