class Produto{

    constructor(nome,preco, desc){
        this._nome = nome
        this.preco = preco
        this.desc = desc
    }

    get perecoFinal() {
        return this.preco * (1 - this.desc)
    }
    get nome(){
        return `Produto: ${this._nome}`;
    }
}

const p1 = new Produto('Caneta',10)
console.log(p1.nome)
const p2 = new Produto('Geladeira', 1000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)
console.log(p2.nome)
