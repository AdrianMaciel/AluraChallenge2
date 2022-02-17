var pd;
var bp=[];

function dibbar(){
    for(i=0;i<pal.length;i++){
        barra.textContent+="_ ";
    }
}//marcador inicial
function div(){
    pd=pal.split("");
    for(i=0;i<pd.length;i++){
        bp.push("_");
    }
}//division
function reemplazo(){
    barra.textContent="";
    for(i=0;i<bp.length;i++){
        barra.textContent+=bp[i]+" ";
    }
}//Marcar Letras correctas y su posiciones