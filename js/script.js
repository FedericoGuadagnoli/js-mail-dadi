console.log('JS OK');

// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato

//Prendo gli elementi dalla pagina
const button = document.getElementById('button');
const userNumberElement = document.getElementById('user-number');
const cpuNumberElement = document.getElementById('cpu-number');
const winner = document.getElementById('winner');

//Genero un numero casuale da 1 a 6 sia per il giocatore sia per la cpu
button.addEventListener('click', function(){
    const max = 6;
    //Genero Numero casuale giocatore e stampo in pagina
    const userRandom = Math.random();
    const userRandomNumber = Math.floor(userRandom * max) + 1;
    userNumberElement.innerText = 'Punteggio dado utente: ' + userRandomNumber;
    // Genero numero casuale cpu e stampo in pagina
    const cpuRandom = Math.random();
    const cpuRandomNumber = Math.floor(cpuRandom * max) + 1;
    cpuNumberElement.innerText = 'Punteggio dado cpu: ' + cpuRandomNumber;

    //Verifico il vincitore e stampo in pagina
    winner.innerText = 'Vince l"utente!!';
    winner.style.color = 'red';
    if (cpuRandomNumber > userRandomNumber) {
        winner.innerText = 'Vince la CPU!!';
        winner.style.color = 'green';
    } else if (cpuRandomNumber === userRandomNumber) {
        winner.innerText = 'Pareggio!!';
        winner.style.color = 'blue';
    }
});


// ------------------------------------------------------------------------------------