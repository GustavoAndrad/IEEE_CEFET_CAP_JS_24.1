// Função básica
function greet(name) {
    console.log("Olá, " + name + "!");
}

greet("Mundo");

// Função de flecha
const greetArrow = (name) => {
    console.log("Olá, " + name + "!");
}
greetArrow("Mundo");

// Função de retorno de função
function greetFactory(greeting) {
    return function(name) {
        console.log(greeting + ", " + name + "!");
    }
}

const greetHello = greetFactory("Hello");
const greetHi = greetFactory("Hi");

greetHello("World");
greetHi("World");

function fetchData(callback) {
    // Simulação de uma operação assíncrona
    setTimeout(() => {
        const data = "Dados recuperados";
        callback(data);
    }, 2000);
}
// Função de callback
function displayData(data) {
    console.log("Os dados recebidos são: " + data);
}

fetchData(displayData);