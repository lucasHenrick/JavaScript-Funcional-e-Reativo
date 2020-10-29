function somar(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(somar(1)(2)(3));

function calcular(a){
    return  function(b){
        return function(fn){
            return fn(a,b);
        }
    }
}

function sub(a,b){
    return a - b;
}

console.log(calcular(10)(5)(sub));