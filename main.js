/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.*/

const n_Km = parseInt(prompt(`quanti km hai bisogno di percorrere?`))
const userAge = parseInt(prompt(`quanti anni hai?`))

//definire il prezzo sapendo che è .21€ al km 
const rate = Number(.21)
const fullPrice = (n_Km * rate)

console.log((`il prezzo del biglietto totale: `) + fullPrice + (`€`));