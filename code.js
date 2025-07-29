function FizzBuzz2(){
      const max = parseInt(document.getElementById('MaxNum').value);
      const numfizz = parseInt(document.getElementById('fizz_num').value);
      const numbuzz = parseInt(document.getElementById('buzz_num').value);
      const nomfizz = document.getElementById('fizz_nom').value;
      const nombuzz = document.getElementById('buzz_nom').value;

      const nros = [];

    for(i=1; i<max+1; i++){
        if(i % numfizz == 0 && i % numbuzz == 0){
            nros.push(nomfizz+nombuzz)    
        }
        else if(i % numfizz == 0){
            nros.push(nomfizz)    
        }
        else if (i % numbuzz == 0){
            nros.push(nombuzz)    
        }
        else {
            nros.push(i)    
        }
        document.getElementById("rta").textContent = nros.join(", ")

    }

}
