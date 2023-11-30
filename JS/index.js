// creazione dell avariabile dove si vedran gli elementi
let arrayNumRandom= numerGenerated(1,100,5);


// inserimeto numeri dentro html cosi utene può vedere
let display= document.getElementById("js-numeri");
display.innerHTML=arrayNumRandom









// funzione per creare l'array con i numeri 
function numerGenerated (minNub,maxNub,maxBomb) {
    // creazione dell'arry
    let arraynum= [];
    // ciclo per controllare se array mette numeri doppi
    while (arraynum.length < maxBomb) {
        let numeri= randomNumber( maxNub, minNub)
        if (!arraynum.includes(numeri)) {
            arraynum.push(numeri)
        }
    }
    return arraynum
}

// funzione per creare un numero random
function randomNumber(max, min) {
    return Math.floor(Math.random() * max + min)
}