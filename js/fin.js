var final=document.querySelector("#avfin");
var letra=document.querySelector("#letras");
var res=document.querySelector("#respuesta");
var finjuego=false;

function error(){
    letra.textContent+="-"+txt.value+" "; //marcador de letras equivocadas
}

function derr(){
    final.textContent="Fin del Juego";
    res.textContent="Respuesta Correcta: "+pal;
    finjuego=true;
    victory=0;
}

function vic(){
    final.textContent="Victoria";
    finjuego=true;
    victory=0;
}

function reset(){
    for(i=0;i<tof.length;i++){
       tof[i]=false; //reinicia el marcador de letras usadas
    }
    bp=[];
    res.textContent=""; //vacia espacio de la respuesta
    final.textContent=""; //vacia mensaje del fin del juego
    letra.textContent=""; //vacia marcador de letras equivocadas
    barra.textContent=""; //despeja el espacio de las barras
    finjuego=false; //indicar que se inicio un nuevo juego
    victory=0;
    cont=0;
    gra.clearRect(0,0,1000,600)
}