function letra1(qtde){
    var letra="";
    var j=0;
    var palavra = "incomodam";
    for(var i=1;i<=qtde;i++){
        if(i == 1){
            console.log(`${i} elefante incomoda muita gente`);
            
        }
        else if (i%2==0){
            console.log(`${i} elefantes incomodam ` + letra + ` muito mais`); 
          
            while(j<=i){
                letra= letra + ` ` + palavra;
                j++;
            }
            
        }else {
            console.log(`${i} elefantes incomodam muita gente`); 
        }
      
    }
}
console.log(letra1(10));