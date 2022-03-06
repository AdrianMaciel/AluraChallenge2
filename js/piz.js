var pi=document.querySelector("#pizarra");
var gra=pi.getContext("2d");

function color(c){
    gra.fillStyle=c;
    gra.fillRect(0,0,1000,600);
}//fondo
function ahorcado(n){
    gra.fillStyle="black";
    gra.fillRect(0,500,1000,100);/*suelo*/
    if(n>0){
        gra.fillRect(0,480,200,20);/*base*/
        gra.fillRect(90,100,20,400);/*poste*/ 
        gra.fillRect(90,100,210,20);/*brazo*/
        gra.fillRect(300,100,20,40);/*brazo*/
        gra.fillRect(308,140,4,60);/*cuerda*/
    }
    if(n>1){
        gra.beginPath;
        gra.arc(310,230,30,0,360);
        gra.fill();/*Cabeza*/
    }
    if(n>2){
        gra.fillRect(306,260,8,100);/*torso*/
    }
    if(n>3){
        gra.beginPath;
        gra.moveTo(306,260);
        gra.lineTo(290,360);
        gra.lineTo(296,360);
        gra.lineTo(306,290);/*Brazo izquierdo*/
        gra.lineTo(314,290);
        gra.lineTo(324,360);
        gra.lineTo(330,360);
        gra.lineTo(314,260);/*Brazo derecho*/
        gra.lineTo(306,260);
        gra.fill();
    }
    if(n>4){
        gra.beginpath;
        gra.moveTo(306,360);
        gra.lineTo(290,460);
        gra.lineTo(296,460);
        gra.lineTo(310,380);/*Pierna Izquierda*/
        gra.lineTo(324,460);
        gra.lineTo(330,460);
        gra.lineTo(314,360);/*Pierna Derecha*/
        gra.lineTo(306,360);
        gra.fill();/*Pierna*/
    }
}