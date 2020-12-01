// Função construtora
function Produto(nome, preco, desc = 0.15){
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function(){
        return this.preco * (1-this.desc)
    }
   
}
const p1 = new Produto('Canete', 10)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal())
const p2 = new Produto('Geladeira', 100)
console.log(p2.nome)
console.log(p2.preco)
console.log(p2.precoFinal())