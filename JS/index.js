// creazione della variabile dove si vedranno gli elementi
const arrayNumRandom= numerGenerated(1,100,5);
console.log(arrayNumRandom);


// inserimeto numeri dentro html cosi utene può vedere
const display= document.getElementById("js-numeri");
display.innerHTML=arrayNumRandom;

// variabile dove c'è il display della rispasta
const displayRisposta= document.getElementById("display");
displayRisposta.style.display="none"

// scomparsa numeri e comparsa da partedel display della risposta
setTimeout(() => {
    display.innerHTML="";
    displayRisposta.style.display="block"
}, 30000);

// variabile dove vengono inseriti i numeri da parte dell'utente
const numeriInseriti= document.getElementById("inserimento-numeri");

// variabile dove ci sarà l'output per l'utente
const outputUtente=document.getElementById("output") ;

// array con dentro i numeri giusti o sbagliati
const arrayNumSbagliati= [];

const arrayNumGiusti= [];

// variabile con bottone per evento
    
let button=document.getElementById("js-controllo");
button.addEventListener("click",function(){
    let valore=parseInt(numeriInseriti.value) 

    // controllo se ha fatto giusto o no
    if (arrayNumRandom.includes(valore)) {
        outputUtente.innerHTML = valore + "è corretto"
        arrayNumGiusti.push(valore)
        // console.log(arrayNumGiusti);
    }else{
        outputUtente.innerHTML = valore + " è sbagliato"
        arrayNumSbagliati.push(valore)
        // console.log(arrayNumSbagliati);
    }
    // quando tentativi finiti mettere i risultati dentro html
    if (arrayNumGiusti.length + arrayNumSbagliati.length === 5) {

        outputUtente.innerHTML = "hai sbagliato questi numeri " + arrayNumSbagliati + "   hai fatto giusto questi numeri " + arrayNumGiusti
    }
})





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
};

// funzione per creare un numero random
function randomNumber(max, min) {
    return Math.floor(Math.random() * max + min)
};