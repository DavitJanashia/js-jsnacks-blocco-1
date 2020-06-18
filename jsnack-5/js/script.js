var myBtn1 = document.getElementById('my-btn1');
myBtn1.addEventListener('click', function (){



  var num1 = parseFloat(document.getElementById('my-num1').value);
  var num2 = parseFloat(document.getElementById('my-num2').value);
  console.log(num1, num2);

  var operation = document.getElementById('my-options').value;
  console.log(operation);


  if (operation === 'division'){
    if (num2 === 0){
      document.getElementById('my-result').innerHTML = 'Can\'t divide';
    } else {
      document.getElementById('my-result').innerHTML = num1 / num2;
    }
  } else if (operation === 'addition') {
    document.getElementById('my-result').innerHTML = num1 + num2;
  } else if (operation === 'multiplication') {
    document.getElementById('my-result').innerHTML = num1 * num2;
  } else if (operation === 'subtraction') {
    document.getElementById('my-result').innerHTML = num1 - num2;
  } else if (!operation) {
    console.log('Inserisci numero');
  }
})
