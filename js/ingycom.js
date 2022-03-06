var txt=document.querySelector("#texto");
var cont=0;
var victory=0;
var ingval=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
var tof=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
//main
txt.addEventListener("input",ingreso);
//end

function ingreso(E){
    E.preventDefault();
    if(pal.length==0){//prevenir inicio antes de seleccionar palabra
        alert("seleccione una palabra para poder iniciar");
        txt.value="";
        return;
    }
    if(finjuego){//evitar que se continuen ingresando letras una vez terminado el juego
        alert("juego terminado, seleccione otra palabra");
        txt.value="";
        return;
    }
    for(i=0;i<ingval.length;i++){  
        if(txt.value==ingval[i]){
            if(tof[i]){
                alert("ya se ingreso esa letra");
                txt.value="";
                break;
            }
            tof[i]=true;//marcar como usada la letra
            revisar();//verificar si existe la letra
            break;
        }
    }
    if(i==ingval.length){
        alert("ingrese una letra en mayuscula");
        txt.value="";
    }
    return;
}//Verificar ingreso repetido de letras

function revisar(){
    var rev=new RegExp(txt.value,"g");
    if(cont<5){
        if(rev.test(pal)){//verificar si existe la letra
            completar();//Encontrar posicion y cantidad de letras
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

function completar(){//Encontrar posicion y cantidad de letras
    for(i=0;i<pd.length;i++){
        if(txt.value==pd[i]){
            bp[i]=pd[i];//Autocompletado de palabra
            victory++;
        }
    }  
    color("green");
    ahorcado(cont);
    txt.value="";
    reemplazo();//Escribir las letras correctas en sus posiciones
}