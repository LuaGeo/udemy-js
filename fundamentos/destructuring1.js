// novo recurso do ES2015 (econ script?)

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa; // essas chaves não representam objeto, representam o destructuring
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa; // retirar essa virgula que o prettier coloca e quebra o codigo
console.log(logradouro, numero, cep);

const { endereco } = pessoa;
console.log(endereco);

const {
  conta: { ag, num },
} = pessoa;
console.log(ag, num); //ERRO

// para ter acesso a algumas variaveis do objeto:

// pessoa.nome
// pessoa.idade

// criando uma variavel:
// let nome = pessoa.nome
// const nome = pessoa.nome
// let idade = pessoa.idade
// const idade = pessoa.idade
