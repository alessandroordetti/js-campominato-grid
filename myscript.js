/* Prendo dall'html il div my grid */
const myGrid = document.getElementById('my-grid');

console.log(myGrid);

/* Funzione per generare un div grid-box */
const generateDivBox = () => {
    const currentElement = document.createElement('div');

    currentElement.classList.add('grid-box');

    return currentElement;
}

for (let i = 0; i < 100; i++) {
    /* Creo un singolo quadrato */
    const currentBox = generateDivBox();

    currentBox.addEventListener('click', function () {
        /* Aggiungo a currentBox la classe active */
        this.classList.toggle('grid-box-active');
    })

    /* Aggiungo al parent i 100 div-box */
    myGrid.appendChild(currentBox);
}