function addition(){
    let num1=parseFloat(document.getElementById('num1').value);
    let num2=parseFloat(document.getElementById('num2').value);
    document.getElementById('result').value=num1+num2;
}
function substraction(){
  let num1=parseFloat(document.getElementById('num1').value);
  let num2=parseFloat(document.getElementById('num2').value);
  document.getElementById('result').value=num1-num2;
}
function multi(){
  let num1=parseFloat(document.getElementById('num1').value);
  let num2=parseInt(document.getElementById('num2').value);
  document.getElementById('result').value=num1*num2;
}
function division(){
  let num1=parseFloat(document.getElementById('num1').value);
  let num2=parseFloat(document.getElementById('num2').value);
  document.getElementById('result').value=num1/num2;
}