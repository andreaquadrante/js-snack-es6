// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const namesArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const minUserIndex = prompt ('Inserisci un numero compreso tra 0 e ' + (namesArray.length-1));
const maxUserIndex = prompt ('Inserisci un numero compreso tra ' + minUserIndex+ '(escluso) e ' + (namesArray.length-1));

const newNamesArray = namesArray.filter((arrayElement, index) => index <= maxUserIndex && index >= minUserIndex);

console.log(newNamesArray)
