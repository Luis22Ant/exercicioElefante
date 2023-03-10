function letra1(qtde){
    var letra="";
    var j=1;
    var palavra = ",incomodam";
    for(var i=1;i<=qtde;i++){
        if(i == 1){
            console.log(`${i} elefante incomoda muita gente`);

        }
        else if (ePar(i)){
            while(j<i){
                letra += palavra;
                j++;
            }
            console.log(`${i} elefantes incomodam` + letra + ` muito mais`); 
        }else {
            console.log(`${i} elefantes incomodam muita gente`); 
        }
      
    }
}
console.log(letra1(10));

function ePar(numero){
    if(numero%2 == 0){
        return true;
    }else return false;
}