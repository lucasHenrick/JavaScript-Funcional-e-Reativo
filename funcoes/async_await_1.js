function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('executando promise 1'))
    .then(esperarPor)
    .then(() => console.log('executando promise 2'))
    .then(esperarPor)
    .then(() => console.log('executando promise 3'))


 function retornarValor(){
     return new Promise( resolve => {
         setTimeout(() => resolve(10), 5000)
     })
 }
 async function retornarValorRapido(){
    return 20
}
    
async function executar() {
    let valor = await retornarValor()

    await  esperarPor(1500)
    console.log(`${valor}`)
    
    await  esperarPor(1500)
    console.log(`${valor + 1}`)
    
    await  esperarPor(1500)
    console.log(`${valor + 2}`)

    return valor + 3
}

function executarDeVerdade(){
    const resposta = await executar()
    console.log(resposta)
}

executarDeVerdade()
     