// algo que vai ser processado no futuro e devolvido no futuro
//promise so gera 1 unico valor

function primeiroELemento(array){
    return array[0]
}

function primeiraLetra(String){
    return String[0]
}
const letraMinuscula = letra => letra.toLowerCase();

let p = new  Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana','Bia', 'Carlos', 'Daniel']);
});

p.then(primeiroELemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    
