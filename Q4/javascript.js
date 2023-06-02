function Calculate(){
  var radius=parseFloat(document.getElementById('radius').value);
  var height=parseFloat(document.getElementById('height').value);
  document.getElementById('volume').value=Math.PI*radius*radius*height;
}