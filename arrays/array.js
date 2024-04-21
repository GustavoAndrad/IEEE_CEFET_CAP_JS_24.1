//Arrays/vetores são estrutura de dados que permite armazenar vários valores em uma única variável. 
//Esses valores podem ser qualquer tipo de dado, mas não é aconselhavel
//Se uma variável é um caiza, um array é uma estante com varias caixas
//Cada espaço de um array tem um endereço, começanco com 0

/*  OPERAÇÕES DE MANIPULAÇÃO

    Adiciona no fim: push
    Adiciona no começo: unshift
    Romeve do fim: pop
    Remove do inicio: shifth
    Pega somente alguns elementos do array: slice(inicio, fim)
    Remove um ou mais itens em qualquer posição do array: splice(1, 2)

*/

//ACESSANDO ARRAYS
let frutas = ["Maçã", "Banana", "Morango"]

console.log(frutas)
console.log(frutas[0])

let pessoas = [
    {
        nome: "Gustavo",
        idade: 19
    },
    {
        nome: "Caio",
        idade: 20,
    },
]

console.log(pessoas[1].nome)


//OPERANDO ARRAYS
let numeros = [0, 1, 2, 3];
console.log(numeros) //  0 1 2 3

numeros.push(4)
console.log(numeros) // 0 1 2 3 4 

numeros.unshift(-1)
console.log(numeros) // -1 0 1 2 3 4

numeros.pop()
console.log(numeros) // -1 0 1 2 3

numeros.shift()
console.log(numeros) // 0 1 2 3

console.log(numeros.slice(0,2)) // mostra o array recortado de 0 até 1   mostra  [0  1]

numeros.splice(0,2) //remove os elementso de 0 até 1     fica [2, 3]
console.log(numeros)




const numeros2 = [0 ,1 ,2, 3]

//para cada elemento faz alguma coisa
numeros2.forEach((numero)=>{console.log(numero)});

//filtra o array. Não modifica, cria uma lista nova
let numeros_grandes = numeros2.filter((numero)=>{return numero>1});
console.log(numeros_grandes);

//percorre e faz alguma alteração. Não modifica, cria uma lista nova
let numeros_somados = numeros2.map((numero)=>{return numero+=1});
console.log(numeros_somados)

    //repare que a lista original não foi alterada
    console.log(numeros2)

//reduz o array a um valor
let soma = numeros2.reduce((a, b)=>{return a+b}, 0);
    //a é o acumulador, b o item e 0 em que valor o acumulador irá começar 
console.log(soma)



//MATRIZ
//São arrays de arrays

let matriz = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
    ]

console.log(matriz[0])
console.log(matriz[0][2])

matriz.push(1)
console.log(matriz)