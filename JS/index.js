// creazione dell avariabile dove si vedran gli elementi
let arrayNumRandom= numerGenerated(1,100,5);
console.log(arrayNumRandom);

// inserimeto numeri dentro html cosi utene può vedere
let display= document.getElementById("js-numeri");
display.innerHTML=arrayNumRandom;
// scomparsa numeri 
setTimeout(() => {
    display.innerHTML="";
}, 3000);

// variabile dove vengono inseriti i numeri da parte dell'utente
const numeriInseriti= document.getElementById("inserimento-numeri");

// variabile dove ci sarà l'output per l'utente
const outputUtente=document.getElementById("output") ;

// variabile con bottone per evento
let button=document.getElementById("js-controllo");

button.addEventListener("click",function(){
    let valore = parseInt(numeriInseriti.value) 
    console.log(valore);
    if (arrayNumRandom.includes(valore)) {
       outputUtente.innerHTML="corretto"
    }else{
       outputUtente.innerHTML="sbagliato"
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
}

// funzione per creare un numero random
function randomNumber(max, min) {
    return Math.floor(Math.random() * max + min)
}