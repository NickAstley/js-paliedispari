/* Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer */

// Prendo il primo input dall'utente, controllando che scriva la cosa giusta
let userChoice = prompt("Scegli pari o dispari!");
while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Puoi scegliere solo `pari` o `dispari`!");
}

// Prendo il secondo input dall'utente, verificando che sia nei limiti richiesti
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));
while(isNaN(userNumber)) {
    userNumber = parseInt(prompt("Devi inserire un numero!"));
}
while(userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("Il numero deve essere da 1 a 5!"));
}

// Genero un numero random per la cpu
const cpuNumber = randomNumber(1, 5);

// Sommo i due numeri
const sum = userNumber + cpuNumber;

// Stabilisco chi ha vinto
if((isPari(sum) && userChoice === "pari") || (!isPari(sum) && userChoice === "dispari")) {
    alert(`Hai vinto! La tua scelta: ${userChoice}; il tuo numero: ${userNumber}; il numero della cpu: ${cpuNumber}; la somma: ${sum}`);
} else {
    alert(`Hai perso! La tua scelta: ${userChoice}; il tuo numero: ${userNumber}; il numero della cpu: ${cpuNumber}; la somma: ${sum}`); 
}

// Creo una funzione che generi un numero random tra un min ed un max
function randomNumber(min, max) {
    // Controllo che sia stato fornito un min
    if (min === undefined || min === null || min < 0) {
        return;
    }
    // Controllo che sia stato fornito un max
    if (max === undefined || max === null || max < min) {
        max = 10;
    }

    // Ritorno un numero random compreso tra min e max
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creo una funzione che ritorna true se il numero è pari e false se il numero è dispari
function isPari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}