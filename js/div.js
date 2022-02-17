var pd;
var bp=[];

function dibbar(){
    for(i=0;i<pal.length;i++){
        barra.textContent+="_ ";
    }
}
function div(){
    pd=pal.split("");
    for(i=0;i<pd.length;i++){
        bp.push("_");
    }
    console.log(pd,bp);
}
function reemplazo(){
    barra.textContent="";
    for(i=0;i<bp.length;i++){
        barra.textContent+=bp[i]+" ";
    }
}