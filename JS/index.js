
// creazione della variabile dove si vedranno gli elementi
const arrayNumRandom= numerGenerated(1,100,5);
console.log(arrayNumRandom);


// inserimeto numeri dentro html cosi utene può vedere
const display= document.getElementById("display-numeri");
display.innerHTML=arrayNumRandom;

// variabile dove c'è il display della rispasta
const displayRisposta= document.getElementById("display");
displayRisposta.style.display="none"

// scomparsa numeri e comparsa da partedel display della risposta
setTimeout(() => {
    display.style.display="none"
    displayRisposta.style.display="block"
}, 300);

// variabile dove vengono inseriti i numeri da parte dell'utente
const numeriInseriti= document.getElementById("inserimento-numeri");

// variabile dove ci sarà l'output per l'utente
const outputUtente=document.getElementById("output") ;

// array con dentro i numeri giusti o sbagliati
const arrayNumSbagliati= [];

const arrayNumGiusti= [];

let wrong=0;
let right=0;

// variabile con bottone per evento
    
let button=document.getElementById("js-controllo");
button.addEventListener("click",function(){
    let valore=parseInt(numeriInseriti.value); 

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
    if (arrayNumGiusti.length + arrayNumSbagliati.length === arrayNumRandom.length) {
        outputUtente.innerHTML = " sbagliate " + wrong+ " hai sbagliato questi numeri " + arrayNumSbagliati +   " giuste " + right +  " hai fatto giusto questi numeri " + arrayNumGiusti
    }
    
});





// funzione per creare l'array con i numeri 
function numerGenerated (minNub,maxNub,maxrRandom) {
    // creazione dell'arry
    let arraynum= [];
    // ciclo per controllare se array mette numeri doppi
    while (arraynum.length < maxrRandom) {
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

