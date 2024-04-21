 // criar um objeto na força bruta
const pessoa = {
    nome: "caio",
    idade: 21,
    computador: "dell inspiron"
}

//Criar um objeto a partir de uma classe
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`${this.nome} falando`);
    }
}

//Declarando objetos a partir da classe Pessoa
const rodrigo = new Pessoa("Rodrigo",21);
const gabriel = new Pessoa("Gabriel",20);
const ramon = new Pessoa("Ramon",21);

//Utilizando as funções declaradas dentro da classe pessoa.
rodrigo.falar();
gabriel.falar();
ramon.falar();

const pessoaDois = {
    nome: "caio",
    idade: 21,
    computadores: [
        {
            nome: "dell inspiron",
            marca: "dell"
        },
        {
            nome: "macbook air m2",
            marca: "apple"
        },
        {
            nome:"galaxy book3",
            marca:"Samsung"
        }
    ]
}
