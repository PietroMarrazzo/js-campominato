// generazione 16 mine, numeri casuali intervallo 1-100, compresi
// var scelta = ['hard', 'normal', 'easy'];
var difficult = 100;
var maxMine = 16;
var slots = difficult - maxMine;
console.log(slots);
var valoriMine = [];
var valoriGiocatore = [];

// generatore array mine
do {
    // valoriMine.push(generaMine(1, 16));
    var mina = generaMine(1, difficult);
    if (! valoriMine.includes(mina)) {
        valoriMine.push(mina);
    }
} while (valoriMine.length != maxMine);
console.log(valoriMine);


// ciclo gioco
// var result = 0;
// var counter = 0;
// do {
//     // inserimento numero
//     var numero = parseInt(prompt('Inserisci un valore compreso tra 1 e ' + difficult));

//     // verifica se numero = a mina
//     if (valoriMine.includes(numero)) {
//         result = 1;
//         console.log('Hai trovato una bomba, hai perso!');
//     }
//     counter = counter + 1;
   
// } while (result = 1 || counter == slots);

// if (counter = slots) {
//     console.log('Hai trovato tutti gli slot liberi, hai vinto!!!');
//     console.log(counter);
// } else {
//     console.log('Il tuo score è di ' + counter + ' slot liberi trovati');
// }

// console.log('Premi F5 per ricominciare a giocare');

var control = 0;
var counter = 0;
do {
    var numero = parseInt(prompt('Inserisci un valore compreso tra 1 e ' + difficult).toLowerCase().trim());
    do {
        control = controlloNumero(numero, valoriGiocatore);
    } while (control == 1)
    
    var result = comparazione(numero, valoriMine);
    counter++;
} while (result == 'vuoto' && counter < slots);

var score = counter - 1;

if (result == 'bomba') {
    console.log('Hai trovato una bomba! il tuo score è ' + score);
} else  {
    console.log('Hai trovato tutti gli slot liberi!');
}

// console.log(counter, numero, result);






// FUNZIONI
// funzione genera mine 
function generaMine(min, max) {
    for (var i = 0; i <= maxMine; i++) {
        var mina = Math.floor((Math.random() * max) + min );
        return mina;   
    }
}

// funzione comparazione mine e numero
function comparazione(numGiocatore, array) {
    if (array.includes(numGiocatore)) {
        return 'bomba';
    } 
    return 'vuoto';

}


// funzione controllo numero inserito
function controlloNumero(numGiocatore, array) {
    if (! array.includes(numGiocatore)) {
        array.push(numGiocatore);
        control = 0;
    }    
    else {
        numero = parseInt(prompt('Hai già inserito questo valore, inseriscine uno differente').toLowerCase().trim());
        control = 1;
    }
    return control;
}