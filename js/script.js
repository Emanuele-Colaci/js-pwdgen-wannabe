// NOME UTENTE
let nameUser = prompt ('Nome');

//COGNOME UTENTE
let surname = prompt ('Cognome');

//COLORE PREFERITO UTENTE
let color = prompt ('Colore preferito');

//NUMERO 21
const number = '21'

//CONSOLE DEL NOME COGNOME COLORE
console.log (`${nameUser} ${surname} ${color} ${number}`);

//VISIONE ELEMENTO PAGINA
document.getElementById('name-surname-color').innerHTML = (nameUser + surname + color + number);
