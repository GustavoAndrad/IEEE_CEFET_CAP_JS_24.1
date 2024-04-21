//ESTRUTURAS DE REPETICAO

// Estrutura de repetição FOR
console.log("Estrutura de repetição FOR:");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Estrutura de repetição WHILE
console.log("\nEstrutura de repetição WHILE:");
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Estrutura de repetição DO-WHILE
console.log("\nEstrutura de repetição DO-WHILE:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

// Estrutura de repetição FOR...OF
console.log("\nEstrutura de repetição FOR...OF:");
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of array) {
    console.log(element);
}

// Estrutura de repetição FOR...IN
console.log("\nEstrutura de repetição FOR...IN:");
const objeto = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(key + ": " + object[key]);
}