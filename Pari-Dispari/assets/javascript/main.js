// JAVASCRIPT //

console.log("YDD");

/*
Pari e Dispari
    -L’utente sceglie pari o dispari
    -Inserisce un numero da 1 a 5.
    -Generiamo un numero random (sempre da 1 a 5)
    per il computer (usando una funzione).
    -Sommiamo i due numeri
    -Stabiliamo se la somma dei due numeri
    è pari o dispari (usando una funzione)
    -Dichiariamo chi ha vinto.
*/

/*
 funzione che permette di scegliere pari o dispari
 e in base alla risposta
 imposta la scelta contraria all'avversario
*/
function scelta()
{
    // Ricavo valori inseriti dall'utente
    let sceltaParteUtente = document.getElementById('sceltaParteUtente').value;
    let sceltaNumeroUtente = document.getElementById('sceltaNumeroUtente').value;
    
    let risultatoSceltaUtente = document.getElementById('risultatoSceltaUtente');
    let numeroUtente = document.getElementById('numeroUtente');
    let risultatoSceltaCpu = document.getElementById('risultatoSceltaCpu');

    let numeroRandom = Math.round(Math.random() * 5);
    if(numeroRandom == 0){numeroRandom++}

    // Controllo la scelta fatta
    if(sceltaParteUtente == "Pari o Dispari?")
    {
        alert("ATTENZIONE! Devi scegliere pari o dispari!");
        risultatoSceltaUtente.innerText = "";
        risultatoSceltaCpu.innerText = "";
    }
    else if(sceltaParteUtente == "Pari")
    {
        risultatoSceltaUtente.innerText = "Pari";
        risultatoSceltaCpu.innerText = "Dispari";        
    }
    else
    {
        risultatoSceltaUtente.innerText = "Dispari";
        risultatoSceltaCpu.innerText = "Pari";
    }

    // ------------------------------------------------

   if(sceltaNumeroUtente == "Scegli numero da 1 a 5")
   {
    alert("ATTENZIONE! Devi scegliere un numero tra 1 e 5!");
    numeroUtente.innerText = "";
   }
   else
   {
    numeroUtente.innerText = sceltaNumeroUtente;
    numeroCpu.innerText = numeroRandom;
   }



}

function pari_dispari()
{
    

    

    
}











// ----- FINE :) -----