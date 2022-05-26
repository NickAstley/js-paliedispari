/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// Prendo il bottone di submit del form
const submitButton = document.getElementById("submitButton");


// Aggiungo un EventListener al bottone che esegue la funzione al click
submitButton.addEventListener("click", function() {
    // Prendo l'input dell'utente
    const userWord = document.getElementById("palindromeCheck").value;
    // Prendo il div dove mostrare il risultato
    const divResult = document.getElementById("palindromeResult");

    // In base al risultato della funzione mostro un valore
    if (isPalindrome(userWord)) {
        divResult.innerHTML = "L'input è palindromo!"
    } else {
        divResult.innerHTML = "L'input non è palindromo!"
    }
});

// Creo la funzione per capire se la parola inserita è palindroma
function isPalindrome (word) {
    // Creo un array contenente le singole lettere della parola
    const splitWord = word.split("");
    // Creo una variabile dove inserirò le lettere a partire dall'ultima
    let backwardsWord = "";

    // Ciclo l'array al contrario per inserire le lettere nella variabile
    for (let i = (splitWord.length - 1); i>= 0; i--) {
        backwardsWord += splitWord[i];
    }
    
    // Controllo la parola iniziale con la parola inversa e ritorno un valore booleano
    if (word === backwardsWord) {
        return true;
    }
    return false;
}