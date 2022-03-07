/* Prendo dall'html il div my grid */
const myGrid = document.getElementById('my-grid');

console.log(myGrid);

/* Funzione per generare un div grid-box */
const generateDivBox = () => {
    const currentElement = document.createElement('div');

    currentElement.classList.add('grid-box');

    return currentElement;
}

let background = document.querySelector('main');


document.getElementById('play-button').addEventListener('click', function () {

    background.classList.remove('background-img');

    /* Quando premo play il layout della grid si resetta */
    myGrid.innerHTML = "";

    /* Prendo il valore dei select */
    let typeOfGrid = document.getElementById('level-options').value;

    if (typeOfGrid == "easy") {

        /* Generiamo 16 bombe per che andranno casualmente nella griglia da 100 box*/
        const bombs = generateBombList(16, 100);

        console.warn(bombs);

        for (let i = 1; i < 101; i++) {
            /* Creo un singolo quadrato */
            const currentBox = generateDivBox();

            /* Scrivo nel box il numero fino a 100 */
            currentBox.innerHTML += [i];

            /* Aggiungo al parent i 100 div-box */
            myGrid.appendChild(currentBox);
            
            /* Evento che aggiunge la classe grid-box o bomb-box in base ai numeri casuali generati */
            currentBox.addEventListener('click', function(){
                if (!bombs.includes(i)) {
                    this.classList.add('grid-box-active');
                } else {
                    this.classList.add('bomb-box-active');
                }
            })
        }
    } else if (typeOfGrid == "medium") {
        const bombs = generateBombList(16, 80);

        console.warn(bombs);
        
        for (let i = 1; i < 81; i++) {
            const currentBox = generateDivBox();

            currentBox.innerHTML += [i];

            myGrid.appendChild(currentBox);

            currentBox.addEventListener('click', function(){
                if (!bombs.includes(i)) {
                    this.classList.add('grid-box-active');
                } else {
                    this.classList.add('bomb-box-active');
                }
            })
        }
    } else {
        const bombs = generateBombList(16, 50);

        console.warn(bombs);

        for (i = 1; i < 51; i++) {
            const currentBox = generateDivBox();

            currentBox.innerHTML += [i];

            myGrid.appendChild(currentBox);

            currentBox.addEventListener('click', function(){
                if (!bombs.includes(i)) {
                    this.classList.add('grid-box-active');
                } else {
                    this.classList.add('bomb-box-active');
                }
            })
        }
    }
})


/* Il bottone reset riporta l'immagine di background iniziale e toglie la griglia del gioco*/
document.getElementById('reset-button').addEventListener('click', function () {
    myGrid.innerHTML = "";

    background.classList.add('background-img');
});


/* Funzione che genera un array di numeri random corrispondenti alle bombe che andranno nella grid */
function generateBombList (bombs, numberOfCells) {
    const bombList = [];

    for (let i = 0; i < bombs; i++){
        bombList.push(generateRandomInteger(bombList, 1, numberOfCells));
    }
    return bombList;
}



/**
 * Function that returns a random numer between two values (both included).
 *
 * @param {*} numsBlackList The BlackList to check
 * 
 * @param {*} minimumValue The minimum value of the random number to be generated
 * @param {*} maximumValue The maximum value of the random number to be generated
 * @returns The randon generated number.
 */

function generateRandomInteger(numsBlackList, minimumValue, maximumValue) {

    let check = false;

    let randomInt;

    while (!check) {

        randomInt = (Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));

        if(!numsBlackList.includes(randomInt)) {
        check = true;
    }
}

    return randomInt;
}