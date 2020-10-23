// generazione 16 mine, numeri casuali intervallo 1-100, compresi
// var scelta = ['hard', 'normal', 'easy'];
var difficult = 10;
var maxMine = 2;
var valoriMine = [];

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
var counter = 0;
do {
    var numero = prompt('Inserisci un valore compreso tra 1 e ' + difficult);
    if (valoriMine.includes(numero)) {
        console.log('Hai trovato una bomba, hai perso!');
    } 
    else if (counter == difficult - maxMine) {
        console.log('Hai trovato tutti gli slot liberi, hai vinto!!!');
    }

    console.log('Lo slot era vuoto! Continua, puoi farcela');
    
    // switch (numero) {
    //     // giocatore trova bomba
    //     case ! valoriMine.includes(numero):
    //     console.log('Hai trovato una bomba, hai perso!');
    //     break;
        
    //     // giocatore non trova bomba
    //     case counter != difficult - maxMine:
    //     console.log('Il numero era salvo! Continua');
    //     break
    // }

    counter++;
} while (counter <= (difficult - maxMine) || ! valoriMine.includes(numero));

console.log('Premi F5 per ricominciare a giocare');



// FUNZIONI
// funzione genera mine 
function generaMine(min, max) {
    for (var i = 0; i <= maxMine; i++) {
        var mina = Math.floor((Math.random() * max) + min );
        return mina;   
    }
}



