/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// variabili globali 
const containerCelle = document.getElementById("main-container")
const play = document.getElementById("button-play")
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click',
    function () {

        for (let i = 1 ; i <= 100 ; i++){ // Ogni cella ha un numero progressivo, da 1 a 100.ù
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
// FUNZIONI 

