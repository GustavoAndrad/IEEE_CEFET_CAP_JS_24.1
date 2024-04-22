//Controlar pra onde o fluxo de exucução do pugrama vai


//IF E ELSES
let numero = 1;

//se uma coisa acontecer faça isso
if(numero===0){
    console.log(numero);
}


//se uma coisa acontecer faça isso, senao faça aquilo
if(numero>0){
    console.log(numero);
} else{
    console.log("Não é maior que 0");
}

//se uma coisa acontecer faça isso, senao se essa outra coisa acontecer faça aquilo, senao faça outra coisa
if(numero>0){
    console.log(numero);
} else if(numero===0){
    console.log("É 0");
} else{
    console.log("Não é maior que 0");
}

//SWITCH CASE
let numero_switch = 1;
switch (numero_switch){
    case 1: 
        console.log("é 1"); 
        break;
    case 2: 
        console.log("é 2"); 
        break;
    default: 
        console.log("Não é nem 1 nem 2");
}

//OPERADOR TERNÁRIO
//condição ? se true ; se false

const aconteceu = false;
aconteceu ? console.log("Aconteceu") : console.log("Não aconteceu");