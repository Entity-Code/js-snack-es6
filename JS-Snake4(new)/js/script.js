// JS 4 (NEW)
// Partendo da un array semplice tipo questo, chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var a = parseInt(prompt("Inserisci un numero tra 0 e 6"));
var b = parseInt(prompt("Inserisci un altro numero tra 0 e 6"));

const filteredArray = myArray.filter((element, index) => {
   return index > a && index < b;
});

console.log(filteredArray);
