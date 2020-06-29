//*******************************************
// jsnack1 chiara
// var numero = parseInt(prompt('numero'));
//
// if (numero % 2 == 0){
//   console.log(numero);
// } else {
//   console.log(numero + 1);
// }

//**********************
// var numero = parseInt(prompt('numero'));
// var numerIsEven = isEven(numero);
//
// if (numerIsEven == true){
//   console.log(numero);
// } else {
//   console.log(numero + 1);
// }
//
//
//
// function isEven(num){
//   if (num % 2 == 0){
//     return true;
//   } else {
//     return false;
//   }
// }

//*******************************************
//jsnack2chiara
//
// var lista = [
// 'Oggi troverai una cosa dimenticata',
// 'Ciò che è fatto è fatto',
// 'Il buon giorno si vede dal mattino',
// 'Sicuro di aver chiuso il gas?',
// 'Chi semina vento raccoglie tempesta',
// 'Il mattino ha l’oro in bocca',
// 'Tanto va la gatta al lardo che ci lascia lo zampino]'
// ];
// console.log(lista);
//
// var i = parseInt(Math.floor(Math.random()*6));
// // var i = parseInt(Math.floor(Math.random()*(min - max + 1) + min));
// console.log(i);
//
// console.log(lista[i]);
//
// //******************
//
// function getRandomInt (min, max)
// {
//   min = Math.ceil(min);
// max = }




//*******************************************
//jsnack3 chiara

// var simboli = ['A', 'B', 'C', 'D', 'E', 'F']
//
// var simbolo1 =  simboli[getRandomIntInclusive(0, simboli.length - 1)];
// var simbolo2 =  simboli[getRandomIntInclusive(0, simboli.length - 1)];
// var simbolo3 =  simboli[getRandomIntInclusive(0, simboli.length - 1)];
//
// console.log(simbolo1,simbolo2,simbolo3);
//
//
//
// if (simbolo1 == simbolo2 && simbolo1 == simbolo3){
//   console.log('hai vinto');
// } else {
//   console.log('hai perso');
// }
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
// }
//




//*******************************************
//jsnack4 chiara


// var nomi = ['A', 'B', 'C', 'D', 'E', 'F'];
// var cognomi = ['a', 'b', 'c', 'd', 'e', 'f'];
//
//
// //***** kiaram axali arai sheqmna shedgenili siistvis
// var nomiCognomi = [];
//
//
//
// var nome =  nomi[getRandomIntInclusive(0, nomi.length - 1)];
// var cognome =  cognomi[getRandomIntInclusive(0, cognomi.length - 1)];
//
// console.log('nome e cognome: ' + nome, cognome);
//
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   //Il max è incluso e il min è incluso
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// //+++
// var i = 0;
// while (i < 6){
//   var nome =  nomi[getRandomIntInclusive(0, nomi.length - 1)];
//   var cognome =  cognomi[getRandomIntInclusive(0, cognomi.length - 1)];
//
//   nomiCognomi.push(nome + cognome);
//   i++;
// }
//
//   console.log(nomiCognomi);



//*******************************************
//jsnack5 chiara

// var array1 = ['A', 'B', 'C', 'D', 'E', 'F'];
// var array2 = ['a', 'b', 'c'];
// var array3 = ['11', '22', '33', '44', '55'];
//
//
//
// if (array2.length < array1.length){
//   for (var i = 0; array2.length < array1.length; i++) {
//     var eArray3 = array3[getRandomIntInclusive(0, array3.length - 1)];
//     array2.push(eArray3);
//   }
//   console.log(array2);
//
//
// } else if (array2.length > array1.length) {
//
//   for (var i = 0; array1.length < array2.length; i++) {
//     var iAraray3 = array3[getRandomIntInclusive(0, array3.length - 1)];
//     array1.push(iAraray3)
//   }
//   console.log(array1);
//
// } else {
//   console.log('uguale');
// }
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   //Il max è incluso e il min è incluso
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

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
// con la funzione

function palindroma(parola){
  console.log(parola.length);

  //creare un array della parola inserita dove gli elementi sono le lettere della parola
  var parolaLista = [];

  //creare la lista reversa dell'originale
  var i = 0;

  while(i < parola.length){
    parolaLista.push(parola[i]);
    i++;
  }
  console.log(parolaLista);

  parolaLista.reverse();
  console.log(parolaLista);
  //calcoli
  //return risultato;
  var j = 0;
  var coincide = 0;

  while (j < parolaLista.length) {

  if (parolaLista[j] == (parolaLista.reverse())[j]){
    coincide ++;
  }
  j++;
  }
  console.log('coincide ' + coincide + ' volte');

  if (coincide == parolaLista.length){
    return (console.log('è una parola palindroma'));
  } else {
    return (console.log('non è una parola palindroma'));
  }

}

console.log(palindroma('asdasd'));
