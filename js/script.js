// NOME UTENTE
let nome = prompt ('Nome');

//COGNOME UTENTE
let cognome = prompt ('Cognome');

//COLORE PREFERITO UTENTE
let colore = prompt ('Colore preferito');


//CONSOLE DEL NOME COGNOME COLORE
console.log (`${nome} ${cognome} ${colore}`);

//VISIONE ELEMENTO PAGINA
document.getElementById('nome').innerHTML = (nome + cognome + colore + 21);
