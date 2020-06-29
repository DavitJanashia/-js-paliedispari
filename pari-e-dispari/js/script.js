var btn = document.getElementById('my-btn');
btn.addEventListener('click', function(){
  var utente = parseInt(prompt('inserisci un numero da 1 a 5'));
  document.getElementById('n-tuo').innerHTML = 'il tuo numero: ' + utente;
  var cpu = Math.ceil(Math.random()*5);
  document.getElementById('n-cpu').innerHTML = 'numero cpu: ' + cpu;

  var somma = utente + cpu;
  document.getElementById('somma').innerHTML = 'la somma é ' + somma;

  var option = document.getElementById('my-opt').value;
  console.log(option);

  if ((option == 'pari' && somma % 2 == 0) || (option == 'dispari' && somma % 2 == 1)){
    document.getElementById('result').innerHTML = 'hai vinto';
  } else if ((option == 'pari' && somma % 2 == 1) || (option == 'dispari' && somma % 2 == 0)) {
    document.getElementById('result').innerHTML = 'hai perso';
  }
});
