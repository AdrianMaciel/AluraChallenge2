var final=document.querySelector("#avfin");
var letra=document.querySelector("#letras");
var res=document.querySelector("#respuesta");

function error(){
    letra.textContent+="-"+txt.value+" ";
}
function derr(){
    final.textContent="Fin del Juego";
    res.textContent="Respuesta Correcta: "+pal;
    victory=0;
}
function vic(){
    final.textContent="Victoria";
    victory=0;
}
function reset(){
    for(i=0;i<tof.length;i++){
       tof[i]=false;
    }
    bp=[];
    res.textContent="";
    final.textContent="";
    letra.textContent="";
    barra.textContent="";
    victory=0;
    cont=0;
    gra.clearRect(0,0,700,1000)
}