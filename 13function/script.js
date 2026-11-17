function minhaFuncao(){
    console.log("Teste de função");

}
minhaFuncao();
minhaFuncao(); // reproveitando a função

// funlão na variavel

const minhaFuncaoVariavel = function(){
    console.log("Teste de função na variável");
}

minhaFuncaoVariavel();

// funções com parametros
function saudar(nome){
    console.log(`Olá ${nome}`);

}

saudar("JAN");

function potencia(base, expoente){
    return base ** expoente;
}

console.log(potencia(2,3));

//RETURN
const a = 5;
const b = 6;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a,b); // a constante guarda o return da função
console.log(resultado);

//arrow function

const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4));
