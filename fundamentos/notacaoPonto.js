console.log(Math.ceil(6.1)); //arredondar pro teto (ceil)

const obj1 = {};
obj1.nome = "Bola";
// obj1["nome"] = "Bola2"; (sobrescreveria o atributo anterior)
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome; // = o nome associado ao objeto que for criado a partir dessa função vai ficar visivel/publico pra que criar o objeto (??)
  this.exec = function () {
    console.log("Exec...");
  };
}
// instanciar função (?)

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
