// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// / FUNZIONE PER GENERARE IL NUMERO RANDOM
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
// FUNZIONE PER STABILIRE SE E' PARI O DISPARI
function checkOddOrEven(numberToCheck) {
  if (!(numberToCheck % 2)) {
    return "pari";
  } else {
    return "dispari";
  }
}

let userEvenOdd = "";
let userNumber = 0;
let firstQuestionEvenOdd = true;
let firstQuestionUserNumber = true;

// CHIEDO ALL'UTENTE SE SCEGLIE PARI O DISPARI
do {
  if (!firstQuestionEvenOdd) {
    alert("Hai scritto la parola sbagliata, riprova.");
  }
  userEvenOdd = prompt("Scegli pari o dispari");
  firstQuestionEvenOdd = false;
} while (userEvenOdd !== "pari" && userEvenOdd !== "dispari");

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
do {
  if (!firstQuestionUserNumber) {
    alert("Il numero non è valido, riprova.");
  }
  userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

  if (isNaN(userNumber)) {
    userNumber = 0;
  }

  firstQuestionUserNumber = false;
} while (userNumber < 1 || userNumber > 5);

const pcRandomNumber = generateRandomNumber();

const result = checkOddOrEven(userNumber + pcRandomNumber);
// RISULTATO
if (userEvenOdd === result) {
  alert("Complimenti, hai vinto!");
} else {
  alert("Mi dispiace, hai perso.");
}
