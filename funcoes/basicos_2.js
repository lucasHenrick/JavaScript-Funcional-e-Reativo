function BomDia() {
    console.log("Bom Dia")
}
const  BoaTarde = function () {
    console.log("Bom tarde")

}


function executarQualQuerCoisa(fn){
   
        console.log(typeof fn)
    
}   

executarQualQuerCoisa(3);
executarQualQuerCoisa(BomDia);
executarQualQuerCoisa(BoaTarde);


//2)Retornar uma função a partir de uma outra.

function potencia (base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const  potenciade2 = potencia(2);
console.log(potenciade2(8));

console.log(potencia(2)(8))