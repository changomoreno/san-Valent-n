const container = document.getElementById('flowerContainer');

const messageElement = document.querySelector('.message-text');

const poemLines = [
    "hoy el calendario me recuerde que no estás...",
    "pero mi corazón te siente cerca,",
    "No importa el mapa, ni el reloj",
    "cada día te amo más,",
    "mi alma te acompaña y sueña con tu abrazo,",
    "Feliz San Valentín mi amor.",
 
];

let currentLineIndex = 0;

const displayTime = 3000;
const fadeTime = 1500;

function showNextLine() {
    if (currentLineIndex < poemLines.length - 1) {
        messageElement.classList.remove('fade-in');
        messageElement.classList.add('fade-out');

        setTimeout(() => {
            currentLineIndex++;

            messageElement.textContent = poemLines[currentLineIndex];

            messageElement.classList.remove('fade-out');
            messageElement.classList.add('fade-in');
        }, fadeTime);
    } else {
        // Iniciar las flores después de mostrar el mensaje completo
        setTimeout(() => {
            setInterval(createFlower, 250);
        }, fadeTime);
    }
}

setTimeout(() => {
    messageElement.textContent = poemLines[currentLineIndex];
    messageElement.classList.add('fade-in');
}, 1000);

setInterval(showNextLine, displayTime + fadeTime);

function createFlower() {
    const flowerWrapper = document.createElement('div');
    flowerWrapper.classList.add('flower-wrapper');

    const flower = document.createElement('div');
    flower.classList.add('flower');

    flowerWrapper.appendChild(flower);
    flowerWrapper.style.left = Math.random() * 95 + 'vw';
    flowerWrapper.style.animationDuration = (Math.random() * 8 + 7) + 's';
    flower.style.animationDuration = (Math.random() * 2 + 3) + 's';

    const size = Math.random() * 30 + 10;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';
    flower.style.filter = `blur(${Math.random() * 2}px)`;
    flower.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(flowerWrapper);

    setTimeout(() => {
        flowerWrapper.remove();
    }, parseFloat(flowerWrapper.style.animationDuration) * 1000 + 500);
}




