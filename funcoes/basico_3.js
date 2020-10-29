// arrow function

const FelizNatal = () => console.log("Feliz Natal")
FelizNatal()

console.log(saudacao('Lucas'))
const saudacao = nome => `Fala ${nome}, blz!?!`

const somar = (numeros) => {
    let total = 0
    for( let n of numeros){
        total += n
    }
    return total;
}

console.log(somar([10,10,10]))
