
// creazione della variabile dove si vedranno gli elementi
const arrayNumRandom= numerGenerated(1,100,5);
console.log(arrayNumRandom);


// inserimeto numeri dentro html cosi utene può vedere
const display= document.getElementById("display-numeri");
display.innerHTML=arrayNumRandom;

// variabile dove c'è il display della rispasta
const displayRisposta= document.getElementById("risposta-utente");
displayRisposta.style.display="none"

// variabile con bottone per evento

let button=document.getElementById("tentativi");

// variabile dove vengono inseriti i numeri da parte dell'utente
const numeriInseriti= document.getElementById("inserimento-numeri");

// scomparsa numeri e comparsa da partedel display della risposta
setTimeout(() => {
    display.style.display="none"
    displayRisposta.style.display="block"
}, 30000);


// array con dentro i numeri giusti o sbagliati
const arrayNumSbagliati= [];

const arrayNumGiusti= [];

// variabili con conteggio giuste e sbagliati
let wrong=0;
let right=0;

// variabile tentativi

let tentativi= arrayNumRandom.length;

button.innerHTML="tentativi" + tentativi

// evento bottone
button.addEventListener("click",function(){
    let valore=parseInt(numeriInseriti.value);
    tentativi-- 
    button.innerHTML="tentativi" + tentativi
    if (arrayNumRandom.includes(valore)) {
          arrayNumGiusti.push(valore)
          right++
        // console.log(arrayNumGiusti);
    }else{
         arrayNumSbagliati.push(valore)
         wrong++
        // console.log(arrayNumSbagliati);
    }
    // output finale 
    if (tentativi === 0) {
        document.getElementById("sbagliate").innerHTML = " sbagliate " + wrong+ " ,hai sbagliato questi numeri " + arrayNumSbagliati
        document.getElementById("giuste").innerHTML=" giuste " + right +  ", hai fatto giusto questi numeri " + arrayNumGiusti
    }
    numeriInseriti.value="";
});





// funzione per creare l'array con i numeri 
function numerGenerated (minNub,maxNub,maxRandom) {
    // creazione dell'arry
    let arraynum= [];
    // ciclo per controllare se array mette numeri doppi
    while (arraynum.length < maxRandom) {
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