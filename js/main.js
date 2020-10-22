
//RICHIESTA PAROLA
var parola = prompt ('inserire una parola');
console.log('parola: ', parola);

//VERIFICA INVERSIONE PAROLA
var parolaInvertita = caratteriInvertiti (parola);
console.log('invertita: ', parolaInvertita);


//FUNZIONE PER INVERTIRE
function caratteriInvertiti (word){
    
    var invertita = '';

    for (var i = word.length -1 ; i >= 0; i--){
        invertita += word[i];
    }

    return invertita;
}

//VERIFICA SE PALINDROMA
if ( parola === parolaInvertita){
    console.log('palindroma');
} else{
    console.log('non palindroma');
}




//RICHIESTA PARI O DISPARI 
var pariDispari = prompt('Pari o Dispari?')
console.log('pari o dispari? ',pariDispari);

//SCELTA NUMERO DA 1 A 5
var sceltaNumero = parseInt( prompt('inserisci un numero da 1 a 5'));
console.log('scelta numero ',sceltaNumero);

//NUMERO RANDOM COMPUTER
var genratoPc = numeroRandom();
console.log('random: ',genratoPc);

function numeroRandom (){
    var numeroPc = Math.floor( Math.random () * 5) +1 ;

    return numeroPc;
}

//FUNZIONE PER STABILIRE SE PARI O DISPARI
var risultato = sommaNumeri(sceltaNumero, genratoPc);
console.log('somma: ',risultato);

function sommaNumeri (num1, num2){
    
    var somma = num1 + num2;

    if (somma % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}

//DICHIARIZIONE VINCITORE
if ( pariDispari === risultato){
    console.log('ha vinto l\'utente');
} else {
    console.log('ha vinto il computer');
}