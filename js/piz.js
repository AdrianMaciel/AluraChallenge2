var pi=document.querySelector("#pizarra");
var gra=pi.getContext("2d");

function color(c){
    gra.fillStyle=c;
    gra.fillRect(0,0,700,1000);
}//fondo
function ahorcado(n){
    gra.fillStyle="black";
    gra.fillRect(0,900,700,1000);/*suelo*/
    if(n>0){
        gra.fillRect(0,880,200,20);/*base*/
        gra.fillRect(90,1000,20,-800);/*poste*/ 
        gra.fillRect(90,200,310,20);/*brazo*/
        gra.fillRect(380,200,20,40);/*brazo*/
        gra.fillRect(388,240,4,60);/*cuerda*/
    }
    if(n>1){
        gra.beginPath;
        gra.arc(390,360,60,0,360);
        gra.fill();/*Cabeza*/
    }
    if(n>2){
        gra.fillRect(380,360,20,200);/*torso*/
    }
    if(n>3){
        gra.beginPath;
        gra.moveTo(380,560);
        gra.lineTo(360,760);
        gra.lineTo(370,760);
        gra.lineTo(390,560);
        gra.lineTo(410,760);
        gra.lineTo(420,760);
        gra.lineTo(400,560);
        gra.lineTo(380,560);
        gra.fill();/*Piernas*/
    }
    if(n>4){
        gra.beginpath;
        gra.moveTo(380,420);
        gra.lineTo(350,600);
        gra.lineTo(360,600);
        gra.lineTo(380,460);
        gra.lineTo(400,460);
        gra.lineTo(420,600);
        gra.lineTo(430,600);
        gra.lineTo(400,420);
        gra.lineTo(380,420);
        gra.fill();/*Brazos*/
    }
}