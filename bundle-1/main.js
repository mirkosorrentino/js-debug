/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/**
// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}

checkAge();
console.log(checkAge());


 * 1. Controlla la tua età e dà un messaggio in cui dice se hai più di o meno di 18 anni
 * 2. Sì, c'è const al posto di let in message
 * 3. Manca console.log alla fine, manca il return
 */

/**
// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

 * 1. Stampa il numero di colori presenti nell'array
 * 2. Sì, length è scritto in maniera sbagliata
 * 3. No
 */

/**
// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

 * 1. Somma il numero che scrivo nel prompt a 12
 * 2. no
 * 3. Manca il parseInt, in questo modo JS legge ciò che scrivo nel prompt come una stringa e opera una concatenazione
 */



// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/**
1. Controlla se l'email che scrivo fa parte dell'array di email autorizzate. Se fa parte delle mail autorizzate ti fa entrare, altrimenti viene negato l'accesso
2. Sì, mancano gli apici nel secondo if
3. No
 */
