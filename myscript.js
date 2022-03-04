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



for (let i = 1; i <= 100; i++) {
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