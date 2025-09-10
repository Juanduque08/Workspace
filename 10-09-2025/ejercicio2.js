function negativo(){
    let esnumeronegativo = document.getElementById("esnegativo");
    esnumeronegativo = parseInt(esnumeronegativo.value);

    if(esnumeronegativo <0){
    alert("es un numero negativo");
    console.log(esnumeronegativo, "comprobando");
    }
    else{
         alert("no es un numero negativo");
    }
    
}