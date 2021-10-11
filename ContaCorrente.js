import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            }
    }

    depositar(valor){
        if(valor <= 0){
            return
            }
            this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
