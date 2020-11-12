// JS 5 (NEW)
// dato questo array di obj iniziale, creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// iniziale
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];


const filteredObj = arrayObj.map(x => x.position = randomWord());

console.log(arrayObj);









// random Word

function randomWord() {
   var randomPosition = Math.floor(Math.random() * 26);
   var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   return alphabet[randomPosition];
}
