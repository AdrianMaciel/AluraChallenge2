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
function dif(){
    var ran=Math.round(Math.random()*(plar.length-1));
    reset();
    pal=plar[ran];
    dibbar();
    div();
}//dificil
function fac(){
    var ran=Math.round(Math.random()*(pcor.length-1));
    reset();
    pal=pcor[ran];
    dibbar();
    div();
}//facil