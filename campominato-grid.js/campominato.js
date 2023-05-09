/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

/*Bonus
 Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

// variabili globali 
const containerCelle = document.getElementById("main-container")
const play = document.getElementById("button-play")
const selectDifficulty =document.getElementById ("select-difficulty")
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click',
    function () {
        // select che fornisca una scelta tra tre diversi livelli di difficoltà:
        let numRighe;
        let numColonne;
    const difficulty = selectDifficulty.value;

    if (difficulty === "easy") { //con difficoltà 1 => 100 caselle divise in 10 caselle per 10 righe
        numRighe = 10;
        numColonne = 10;
    } else if (difficulty === "normal") { //con difficoltà 2 => 81 caselle divise in 9 caselle per 9 righe;
        numRighe = 9;
        numColonne = 9;
    } else if (difficulty === "hard") { //con difficoltà 3 => 49 caselle divise in 7 caselle per 7 righe;
        numRighe = 7;
        numColonne = 7;
    }

  const numCelle = numRighe * numColonne;

        for (let i = 1 ; i <= numCelle; i++){ // Ogni cella ha un numero progressivo, da 1 a 100.
            let cella = document.createElement("div")
            cella.className = 'cella';
            cella.innerText = i;
            containerCelle.appendChild(cella);

            // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
            cella.addEventListener('click',
            function () {
                cella.classList.add("bg-cell");
                console.log(cella.innerText);
            }
            )
        }
}
)

