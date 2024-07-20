let generatedNumbers = [];
const maxNumber = 100;

document.getElementById('generateButton').addEventListener('click', generateNumber);
document.getElementById('resetButton').addEventListener('click', resetGame);

function generateNumber() {
    if (generatedNumbers.length >= maxNumber) {
        alert('Ya se han generado todos los números posibles.');
        return;
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    } while (generatedNumbers.includes(randomNumber));

    generatedNumbers.push(randomNumber);
    document.getElementById('currentNumber').innerText = randomNumber;
    updateNumberList();
}

function updateNumberList() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = '';
    generatedNumbers.forEach(number => {
        const listItem = document.createElement('li');
        listItem.innerText = number;
        numberList.appendChild(listItem);
    });
}

function resetGame() {
    generatedNumbers = [];
    document.getElementById('currentNumber').innerText = 'Presiona "Generar Número" para empezar';
    document.getElementById('numberList').innerHTML = '';
}
