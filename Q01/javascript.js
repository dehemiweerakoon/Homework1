function AgeCalculate(){
    var userinput = document.getElementById("Bday").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById('result').value = "**Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); //20
    console.log(age_dt);
    //extract year from date    
    var year = age_dt.getUTCFullYear();//20
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);//20
    
    //display the calculated age
      document.getElementById('result').value=age;
    }
}
