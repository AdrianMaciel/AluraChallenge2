var bfac=document.querySelector("#bfac");
var bdif=document.querySelector("#bdif");
var barra=document.querySelector("#barras");
var plar=["VEHICULAR","KILOGRAMO","MONITOR","VIDEOJUEGO","PROGRAMADOR","COMPRESOR","REPRESOR"];
var pcor=["COSA","RAZA","PANZA","PINCEL","LASER","FILO","LIBRO"];
var pal="";

//main
console.log(pal);
bdif.addEventListener("click",dif);
bfac.addEventListener("click",fac);
//end

function dif(){//--dificil--
    var ran=Math.round(Math.random()*(plar.length-1));
    reset();
    pal=plar[ran];
    dibbar();//dibujar barras
    div();//separar palabra letra por letra
}

function fac(){//--facil--
    var ran=Math.round(Math.random()*(pcor.length-1));
    reset();
    pal=pcor[ran];
    dibbar();//dibujar barras
    div();//separar palabra letra por letra
}