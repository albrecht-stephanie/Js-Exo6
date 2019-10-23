function controle(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  if ((isNaN(secondNumber)) || (isNaN(firstNumber))){ //verification que les champs contiennent des nombres
    alert("Veuillez saisir un nombre.")
  }
  else {
    var rest = firstNumber % secondNumber;
    alert("Résultat :"+rest);
  }
}
 
