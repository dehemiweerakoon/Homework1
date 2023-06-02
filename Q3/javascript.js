function Calculate(){
  var radius=parseFloat(document.getElementById('radius').value);
  document.getElementById('p').value=Math.PI*2*radius;
  document.getElementById('a').value=Math.PI*radius*radius;
}