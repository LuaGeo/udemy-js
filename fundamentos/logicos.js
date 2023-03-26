function compras(trabalho1, trzabalho2) {
  const comprarSorvete = trabalho1 || trzabalho2; // || = OU (OR) (OBS.: | = operação bitwise(?), bit a bit)
  const comprarTv50 = trabalho1 && trzabalho2; // && = E (AND)
  // const comprarTv32 = !!(trabalho1 ^ trzabalho2) // bitwise xor (why??)
  // !! = duas negações logicas (converte o resultado pra boolean)
  const comprarTv32 = trabalho1 != trzabalho2; // != simula o "ou exclusivo" (xor)
  const manterSaudavel = !comprarSorvete; // operador unario

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
