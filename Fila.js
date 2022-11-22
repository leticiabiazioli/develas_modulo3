//FILA

class FilaIsabellaLeticia {
    constructor() {
        this.items = {};
        this.contadorDeEntradas = 0;
        this.contadorDeSaidas = 0;
    }

    enqueue(valor) {
        this.items[this.contadorDeEntradas] = valor;
        this.contadorDeEntradas++;
    }

    dequeue() {
        if (this.contadorDeEntradas - this.contadorDeSaidas === 0) {
            console.log("Esta fila está vazia.");
            return undefined;
        } else {
            const auxiliar = this.items[this.contadorDeSaidas];
            delete this.items[this.contadorDeSaidas];
            this.contadorDeSaidas++;
            return auxiliar;
        }
    }

    size() {
        return this.contadorDeEntradas - this.contadorDeSaidas;
    }

    inverter() {
        if (this.contadorDeEntradas - this.contadorDeSaidas === 0) {
            console.log("Esta fila está vazia.");
            return undefined;
        } else {
            let contadorDeEntradasAuxiliar = this.contadorDeEntradas;
            const filaAuxiliar = new FilaIsabellaLeticia();
            while (contadorDeEntradasAuxiliar !== 0) {
                const auxiliar = this.items[contadorDeEntradasAuxiliar - 1];
                filaAuxiliar.enqueue(auxiliar);
                contadorDeEntradasAuxiliar--;
            }
            return filaAuxiliar;
        }
    }

    // Criação de método para ordenar uma fila de strings em ordem alfabética
    ordenar() {
        let ordenacao = "incompleta";
        while (ordenacao === "incompleta") {
            ordenacao = "completa";
            for (let i = 1; i < this.size(); i++) {
                if ((this.items[i - 1]).toUpperCase() > (this.items[i]).toUpperCase()) {
                    ordenacao = "incompleta";
                    let tmp = this.items[i - 1];
                    this.items[i - 1] = this.items[i];
                    this.items[i] = tmp;
                }
            }
        }
        return this.items;
    }

    // Metodo para armazenar os itens e facilitar a visualização e comparação
    armazenar() {
        return this.items;
    }
}

const filaTeste = new FilaIsabellaLeticia();

// Testes
filaTeste.enqueue("BANANA");
filaTeste.enqueue("uVa");
filaTeste.enqueue("Morango");
filaTeste.enqueue("pitanguinha");
filaTeste.enqueue("abacaxi");

console.log(filaTeste.size());
console.log(filaTeste.armazenar());

filaTeste.ordenar()
console.log(filaTeste.armazenar());

const filaInvertida = filaTeste.inverter();
console.log(filaInvertida.armazenar());

filaTeste.dequeue();
console.log(filaTeste);
console.log(filaTeste.size());