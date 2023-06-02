function Calculate(){
  var leg1=parseFloat(document.getElementById('leg1').value);
  var leg2=parseFloat(document.getElementById('leg2').value);
  document.getElementById('result').value=(leg1*leg2)/2;
}