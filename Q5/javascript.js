function Calculate(){
  var leg1=parseFloat(document.getElementById('leg1').value);
  var leg2=parseFloat(document.getElementById('leg2').value);
  document.getElementById('result').value=Math.sqrt(leg1**2+leg2**2);
}