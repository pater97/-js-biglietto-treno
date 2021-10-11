/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.*/

const n_Km = parseInt(prompt(`quanti km hai bisogno di percorrere?`));
const userAge = parseInt(prompt(`quanti anni hai?`));

//definire il prezzo sapendo che è .21€ al km 
const rate = Number(.21);
const fullPrice = (n_Km * rate);
let discountPrice
//prezzo senza sconti
console.log((`il prezzo del biglietto totale: `) + fullPrice + (`€`));
// condizioni per gli sconti -20% se minorenne , -40% se over 65
const discountUnder = (fullPrice / 100 * 20)
const discountOver = (fullPrice / 100 * 40)
// calcolo finale del prezzo 
if (userAge < 18) {
    discountPrice = (fullPrice - discountUnder);
}
else if (userAge > 65) {
    discountPrice = (fullPrice - discountOver)
}


console.log(discountPrice);
