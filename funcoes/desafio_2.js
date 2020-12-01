const carrinho = [
    {nome:'Caneta', qtde: 10, preco:7.99, fragio: true},
    {nome:'Impressora', qtde: 1, preco:649.50, fragio: true},
    {nome:'Caderno', qtde: 4, preco:27.10, fragio: false},
    {nome:'Lapis', qtde: 3, preco: 5.82, fragio: false},
    {nome:'Tesoura', qtde: 1, preco:19.20, fragio: true},
]

const media = carrinho
    .filter(item => item.fragio)
    .map(item => item.qtde * item.preco)
    .reduce((acc,el)=>{
            const novaQtde = acc.qtde + 1;
            const novoTotal = acc.total + el;
            console.log(acc, el)
            return{
                qtde: novaQtde,
                total: novoTotal,
                media: novoTotal / novaQtde
            }
    },{qtde: 0, total : 0, media: 0})


console.log(media)



