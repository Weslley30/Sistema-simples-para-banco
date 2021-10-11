import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(-100); //não pode calcular pelas regras
contaCorrenteRicardo.depositar(500);
const valorSacado = contaCorrenteRicardo.sacar(50);

const conta2 = new ContaCorrente(102, cliente2);

console.log("conta do Ricardo:", contaCorrenteRicardo);
console.log("conta da Alice:", conta2);


contaCorrenteRicardo.tranferir(200, conta2);

console.log("conta do Ricardo depois da transferencia:", contaCorrenteRicardo);
console.log("conta da Alice depois da transferencia:", conta2);
