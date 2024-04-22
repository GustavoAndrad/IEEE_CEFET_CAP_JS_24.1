// OPERADORES LÓGICOS
// valores booleanos, quando verificados resultará em verdadeiro ou falso

let condicao1 = false;
let condicao2 = true;

// AND: só será verdadeiro quando todas as condições também forem
console.log(condicao1 && condicao2);

// OR: só será verdadeiro quando ao menos uma condição for verdadeira
console.log(condicao1 || condicao2);

// NOT
console.log(!condicao1);


//COMPARAÇÕES
// Exemplo: verificar se um valor está entre 5 e 6
let valor = 5.7

console.log((valor > 5) && (valor < 6));

// Diferença entre == e ===
// == compara valor, e === compara valor e tipo
console.log(1 === "1");