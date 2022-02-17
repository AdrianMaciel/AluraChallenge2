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
    var ran=Math.round(Math.random()*6);
    reset();
    pal=plar[ran];
    console.log(pal);
    dibbar();
    div();
}
function fac(){
    var ran=Math.round(Math.random()*6);
    reset();
    pal=pcor[ran];
    console.log(pal);
    dibbar();
    div();
}