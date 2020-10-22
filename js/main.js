
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
