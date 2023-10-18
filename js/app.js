//- creare la funzione per creare 5 numeri casuali

//- stampare in un alert i 5 numeri
const fiveNumbersArray = getFiveNumbers(1, 50, 5)
//console.log(fiveNumbers)
let score = 0 ; 
const scoreDomElement = document.querySelector('.score')
console.log(scoreDomElement)
const arraymemory = []


setTimeout(myAlert(fiveNumbersArray), 2000)

//- setTimeOut a 30 secondi, dopo di che FUNZIONE
setTimeout(memoryGame, 30000)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getFiveNumbers(minRange, maxRange, numberOfNumbers) {
    const arrayNumbers = [];

    while (arrayNumbers.length < numberOfNumbers) {
        const n = getRandomInt(minRange, maxRange);
        if (!arrayNumbers.includes(n)) {
            arrayNumbers.push(n);
        }
    }
    return arrayNumbers;
}

function memoryGame () {
    //    - ciclo for da 5 iterazioni che stampa un prompt
    for(let i = 0; i < 5; i++) {
        let memoryRequest = prompt('inserisci qui un numero che ti ricordi')
        console.log(memoryRequest)
//    - PER OGNI prompt recuperare il valore e confrontarlo con l'array di numeri 
        const currentMemoryNumber = parseInt(memoryRequest)
        
        //    - SE è presente
        //        - allora aumenta il punteggio di 1 
        if (fiveNumbersArray.includes(currentMemoryNumber) && !arraymemory.includes(currentMemoryNumber)) {
            arraymemory.push(currentMemoryNumber)
            score ++
            console.log(score)
            const scoreContent = `Hai ricordato ${score} numeri : ${arraymemory}`; 
            scoreDomElement.innerHTML = scoreContent
        } else if (score === 0) {
            scoreDomElement.innerHTML = 'Non hai ricordato nessun numero'
        }

    }
}

function myAlert (array) {
    alert(`Ricorda questi 5 numeri: ${array}`)
}


