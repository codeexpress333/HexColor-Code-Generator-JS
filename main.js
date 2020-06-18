const button = document.querySelector('#btn');

//Add Event Listener
button.addEventListener('click', () => {
    const hexvalues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const value = document.querySelector('#hex-value');
    const body = document.querySelector('body');
    let hex = '#';

    //Code Generte Loop Through
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexvalues.length);
        hex += hexvalues[index];
    }

    //Show On Screen
    value.textContent = hex;
    body.style.background = hex;

});