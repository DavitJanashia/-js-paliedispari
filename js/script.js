//*******************************************
//EX 1 PALINDROMA

// var parola = prompt('inserisci una parola');
// console.log(parola.length);
//
// //creare un array della parola inserita dove gli elementi sono le lettere della parola
// var parolaLista = [];
//
// //creare la lista reversa dell'originale
// var i = 0;
//
// while(i < parola.length){
//   parolaLista.push(parola[i]);
//   i++;
// }
// console.log(parolaLista);
//
// parolaLista.reverse();
// console.log(parolaLista);

//*********** versione 1
//memorizzare --> array.join(''): per far diventare come una parola un insimere degli elementi dell'array

// var parolaListaStringa = parolaLista.join('');
// var parolaListaReverseStringa = (parolaLista.reverse()).join('');
//
// console.log(parolaListaStringa);
// console.log(parolaListaReverseStringa);
//
// if (parolaListaStringa == parolaListaReverseStringa){
//   console.log('è una parola palindroma');
// } else {
//   console.log('non è una parola palindroma');
// }

//*********** versione 2
// con la versione di confronto degli elementi array

// var j = 0;
// var coincide = 0;
//
// while (j < parolaLista.length) {
//
// if (parolaLista[j] == (parolaLista.reverse())[j]){
//   coincide ++;
// }
// j++;
// }
// console.log('coincide ' + coincide + ' volte');
//
// if (coincide == parolaLista.length){
//   console.log('è una parola palindroma');
// } else {
//   console.log('non è una parola palindroma');
// }

//*********** versione 3
// con Raffa

// var parola = prompt('parola');
// var parolaInv = '';
//
// for (var i = parola.length - 1; i >= 0 ; i--) {
//   parolaInv += parola[i];
// }
// console.log(parolaInv);
//
// var parolaPal = false;
//
// if (parola == parolaInv){
//   parolaPal = true;
// } else {
//   parolaPal = false;
// }
//
// if (parolaPal == true) {
//   console.log('si');
// } else {
//   console.log('no');
// }
//*********** versione 4
// con funzione
var utente = prompt('inserici una parola');

function palindroma(parola){
  var parolaInv = '';

  for (var i = parola.length - 1; i >= 0 ; i--) {
    parolaInv += parola[i];
  }
  console.log(parolaInv);

  var parolaPal = false;

  if (parola == parolaInv){
    parolaPal = true;
  } else {
    parolaPal = false;
  }

  if (parolaPal == true) {
    return 'la parola inserita é palindroma';
  } else {
    return 'la parola inserita NON é palindroma';
  }
}

console.log(palindroma(utente));
