var txt=document.querySelector("#texto");
var cont=0;
var af;
var victory=0;
var ingval=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
var tof=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
//main
txt.addEventListener("input",ingreso);
//end

function ingreso(E){
    E.preventDefault();
    for(i=0;i<ingval.length;i++){  
        if(txt.value==ingval[i]){
            if(tof[i]){
                alert("ya se ingreso esa letra");
                txt.value="";
                break;
            }
            tof[i]=true;
            revisar();
            break;
        }
    }
    if(i==ingval.length){
        alert("ingrese una letra en mayuscula");
        txt.value="";
    }
    return;
}//Verificar ingreso apropiado de letras

function revisar(){
    var rev=new RegExp(txt.value,"g");
    if(cont<5){
        if(rev.test(pal)){
            comparar();
        }else{
            color("yellow");
            cont++;
            ahorcado(cont);
            error();
            txt.value=""; 
        }
    }
    if (victory==pal.length){
        vic();
    }
    if(cont==5){
        color("red");
        ahorcado(cont);
        txt.value="";
        derr();
    }
    return;
}//Verificar si la letra esta presente en la palabra

function comparar(){
    for(i=0;i<pd.length;i++){
        if(txt.value==pd[i]){
            bp[i]=pd[i];
            victory++;
        }
    }  
    color("green");
    ahorcado(cont);
    txt.value="";
    reemplazo();
}//Encontrar posicion y cantidad de letras