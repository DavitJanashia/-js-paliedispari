var btn = document.getElementById('my-btn');
btn.addEventListener('click', function(){
  var utente = parseInt(prompt('inserisci un numero da 1 a 5'));
  var cpu = parseInt(getRandomIntInclusive(1, 5));

  //*****
  //funzione per generare random
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  document.getElementById('n-tuo').innerHTML = 'il tuo numero: ' + utente;
  document.getElementById('n-cpu').innerHTML = 'numero cpu: ' + cpu;

  //funzione per sommare
  function somma1(a, b){
    somma1 = parseInt(a) + parseInt(b);
    return somma1;
  }
  var somma = somma1(utente, cpu);
  
  document.getElementById('somma').innerHTML = 'la somma é ' + somma;

  var option = document.getElementById('my-opt').value;


  if ((option == 'pari' && somma % 2 == 0) || (option == 'dispari' && somma % 2 == 1)){
    document.getElementById('result').innerHTML = 'hai vinto';
  } else if ((option == 'pari' && somma % 2 == 1) || (option == 'dispari' && somma % 2 == 0)) {
    document.getElementById('result').innerHTML = 'hai perso';
  }
});
