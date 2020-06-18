var myBtn = document.getElementById('my-btn');
myBtn.addEventListener('click', function (){
  var nome = document.getElementById('my-name').value;
  var cognome = document.getElementById('my-surname').value;
  document.getElementById('my-nc').innerHTML = nome + ' ' + cognome;
})
