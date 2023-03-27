/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


/**
// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/**
 * 1. Ciclo for in cui fa vedere tutti i numeri da 0 a 4
 * 2. i deve essere minore di 5, non maggiore
 * 3. 
 */

/**
// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(3));

 * 1. Se il numero è pari, sommo 5 a questo numero. Altrimenti stampi il numero
 * 2. Non è stata richiamata la funzione
 * 3. Serve identità o uguaglianza nell'if e non assegnazione. 
 * Manca un console.log per verificare su console
 */

/**
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();


* 1. Ciclo for in cui fa vedere tutti i numeri da 0 a 5
* 2. , al posto dei ;
* 3. Serve identità o uguaglianza nell'if e non assegnazione. Non è stato richiamata la funzione
* Manca un console.log per verificare su console
*/


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // [2,4,6,8]

/**
* 1. Dato un array, creare un altro array con solo numeri pari
* 2. 
* 3. 
Errori:
1. ; alla fine di i++
2. o <= numbers.length - 1 oppure < numbers.length
3. nell'if c'è un'assegnazione e non un'uguaglianza o un'identità
4. manca [i] in numbers nell'if
5. ; dopo la condizione if
6. nel push dobbiamo mettere numbers[i], e non solo l'indice
7. il return deve essere fuori dal ciclo for
8. Dobbiamo mostrare la funzione con un console.log
*/