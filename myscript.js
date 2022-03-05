/* Prendo dall'html il div my grid */
const myGrid = document.getElementById('my-grid');

console.log(myGrid);

/* Funzione per generare un div grid-box */
const generateDivBox = () => {
    const currentElement = document.createElement('div');

    currentElement.classList.add('grid-box');

    console.log(currentElement);

    return currentElement;
}

let background = document.querySelector('main');


document.getElementById('play-button').addEventListener('click', function (){

    background.classList.remove('background-img');

    

    /* Quando premo play il layout della grid si resetta */
    myGrid.innerHTML = "";

    /* Prendo il valore dei select */
    let typeOfGrid = document.getElementById('level-options').value;

    if (typeOfGrid == "easy") {
        for (let i = 1; i < 101; i++) {
            /* Creo un singolo quadrato */
            const currentBox = generateDivBox();
        
            /* Scrivo nel box il numero fino a 100 */
            currentBox.innerHTML += [i];
        
            /* Funzione per far diventare i box colorati quando vengono premuti */
            currentBox.addEventListener('click', function () {
                /* Aggiungo a currentBox la classe active */
                this.classList.toggle('grid-box-active');
            })
        
            /* Aggiungo al parent i 100 div-box */
            myGrid.appendChild(currentBox);
        }
    } else if (typeOfGrid == "medium") {
        for (let i = 1; i < 81; i++ ) {
            const currentBox = generateDivBox();

            currentBox.innerHTML += [i];

            currentBox.addEventListener('click', function () {
                /* Aggiungo a currentBox la classe active */
                this.classList.toggle('grid-box-active');
            })

            myGrid.appendChild(currentBox);
        }
    } else {
        for (i = 1; i < 51; i++) {
            const currentBox = generateDivBox();

            currentBox.innerHTML += [i];

            currentBox.addEventListener('click', function () {
                /* Aggiungo a currentBox la classe active */
                this.classList.toggle('grid-box-active');
            })

            myGrid.appendChild(currentBox);
        }
    }
})

