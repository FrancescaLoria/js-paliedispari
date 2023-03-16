// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// CREO LA FUNZIONE CHE CONTROLLA SE E' PALINDROA OPPURE NO.
function palindromeWord(word) {
  let chars = word.split("");
  console.log("CHARS", chars);
  let reverseWord = chars.reverse();
  reverseWord = reverseWord.join("");

  return reverseWord;
}

// CHIEDO ALL'UTENTE DI DIRMI UNA PAROLA
const userWord = prompt("Dimmi una parola!");
console.log("USER WORD", userWord);

const reverseWord = palindromeWord(userWord);

console.log("reverseWord", reverseWord);
