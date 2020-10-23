// generazione 16 mine, numeri casuali intervallo 1-100, compresi
var difficult = 100;
var maxMine = 16;
var valoriMine = [];

// array mine
do {
    // valoriMine.push(generaMine(1, 16));
    var mina = generaMine(1, 100);
    if (! valoriMine.includes(mina)) {
        valoriMine.push(mina);
    }
} while (valoriMine.length != maxMine);
console.log(valoriMine);

// FUNZIONI
// funzione genera mine 
function generaMine(min, max) {
    for (var i = 0; i <= maxMine; i++) {
        var mina = Math.floor((Math.random() * max) + min );
        return mina;   
    }
}



