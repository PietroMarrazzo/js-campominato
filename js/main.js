// generazione 16 mine, numeri casuali intervallo 1-100, compresi
var difficult = 100;
var mine = 16;
var valoriMine = [];

// array mine
for (i=0; i <= mine; i++) {
    // valoriMine.push(generaMine(1, 16));
    mina = generaMine(1, 16);
    if (! valoriMine.includes(mina)) {
        valoriMine.push(mina);
    }
}
console.log(valoriMine);

// FUNZIONI
// funzione genera mine 
function generaMine(min, max) {
    var valoriMine = [];
    for (var i = 0; i <= max; i++) {
        var mina = Math.floor((Math.random() * max) + min );
        return mina;   
    }
}



