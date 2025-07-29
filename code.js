function FizzBuzz2(){
      const max = parseInt(document.getElementById('MaxNum').value);
      const fizz = parseInt(document.getElementById('fizz_num').value);
      const buzz = parseInt(document.getElementById('buzz_num').value);
      const nros = [];

    for(i=1; i<max+1; i++){
        if(i % fizz == 0 && i % buzz == 0){
            nros.push("FizzBuzz")    
        }
        else if(i % fizz == 0){
            nros.push("Fizz")    
        }
        else if (i % buzz == 0){
            nros.push("Buzz")    
        }
        else {
            nros.push(i)    
        }
        document.getElementById("rta").textContent = nros.join(", ")

    }

}
