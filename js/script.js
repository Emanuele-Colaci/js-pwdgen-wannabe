// NOME UTENTE
let nome = prompt ('Nome');
document.getElementById('nome').innerHTML = (nome);

//COGNOME UTENTE

let cognome = prompt ('Cognome');
document.getElementById('cognome').innerHTML = (cognome);

//COLORE PREFERITO

let colore = prompt ('Colore preferito');
document.getElementById('colore-preferito').innerHTML = (colore);

//CONSOLE DEL NOME COGNOME COLORE

console.log (` ${nome} ${cognome} ${colore}`);

