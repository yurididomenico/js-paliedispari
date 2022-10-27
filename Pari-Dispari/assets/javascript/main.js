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
function genera()
{
    // Ricavo valori inseriti dall'utente
    let sceltaParteUtente = document.getElementById('sceltaParteUtente').value;
    console.log(sceltaParteUtente);
    let sceltaNumeroUtente = parseInt(document.getElementById('sceltaNumeroUtente').value);
    
    let numeroUtente = document.getElementById('numeroUtente');
    let numeroCpu = document.getElementById('numeroCpu');
    let risultatoSceltaUtente = document.getElementById('risultatoSceltaUtente');
    let risultatoSceltaCpu = document.getElementById('risultatoSceltaCpu');

    //Genero numero random (1 - 5)
    let numeroRandom = Math.round(Math.random() * 5);
    if(numeroRandom == 0){numeroRandom++}

    

    if(sceltaParteUtente == "Pari o Dispari?")
    {
        alert("ATTENZIONE! Scegli pari o dispari");
        refresh();
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
        refresh();
    }
    else
    {
        numeroUtente.innerText = `Il tuo numero: ${sceltaNumeroUtente}`;
        numeroCpu.innerText = `Numero computer: ${numeroRandom}`;
    }
   
    somma(sceltaNumeroUtente, numeroRandom);


}










function somma(a, b){
    let sum = a + b;

    if(sum % 2 == 0)
    {
        console.log("La somma è pari.")
    }
    else if(sum % 2 == 1)
    {
        console.log("La somma è dispari.")
    }

    console.log(`La somma è: ${sum}`);
}

function refresh()
{
    location.reload();
}
// ----- FINE :) -----