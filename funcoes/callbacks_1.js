function exec(fn, a, b){
    return fn(a,b)
}

const subtrair  = (w,z) => w - z

const somarNoTerminal = (x,y) => console.log( x + y)
const subtrairNoTerminal = (x,y) => console.log( x - y)

exec(somarNoTerminal, 56,38)
exec(subtrairNoTerminal, 182,27)
const r = exec(subtrair, 50, 25)
console.log(r)


const fn = ()  => console.log('Exec...')
setInterval(fn, 1000)

setInterval(function () {
    console.log("Função Anonima")
}, 5000)
