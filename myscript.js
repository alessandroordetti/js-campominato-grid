/* Prendo dall'html il div my grid */
const myGrid = document.getElementById('my-grid');

/* Funzione per generare un grid-box */
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
        this.classList.add('grid-box-active');
    })
}