/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.*/
alert(`calcoliamo il prezzo del tuo prossimo biglietto`)
// definire le domande 
const n_Km = parseInt(prompt(`quanti km hai bisogno di percorrere?`));
const userAge = parseInt(prompt(`quanti anni hai?`));
//definire il prezzo sapendo che è .21€ al km 
const rate = Number(.21);
const fullPrice = (n_Km * rate);
let finalPrice
//prezzo senza sconti
console.log((`il prezzo del biglietto totale: `) + fullPrice + (`€`));
// condizioni per gli sconti -20% se minorenne , -40% se over 65
const discountUnder = (fullPrice / 100 * 20)
const discountOver = (fullPrice / 100 * 40)
// calcolo finale del prezzo 
if (userAge < 18) {
    finalPrice = (fullPrice - discountUnder);
}
else if (userAge > 65) {
    finalPrice = (fullPrice - discountOver)
}
else {
    finalPrice = fullPrice
}
// test
console.log((`il prezzo del biglietto in caso di sconto è: `) + finalPrice + (`€`));
// inserimento in html 
document.getElementById(`final_price`).innerHTML = `Il prezzo finale del tuo biglietto è: ` + Math.floor(finalPrice) + `€`
