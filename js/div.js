var pd;
var bp=[];

function dibbar(){//primer dibujado de barras
    for(i=0;i<pal.length;i++){
        barra.textContent+="_ ";
    }
}

function div(){//division letra por letra de la palabra
    pd=pal.split("");
    for(i=0;i<pd.length;i++){
        bp.push("_");
    }
}

function reemplazo(){//Escribir las letras correctas en sus posiciones
    barra.textContent="";
    for(i=0;i<bp.length;i++){
        barra.textContent+=bp[i]+" ";
    }
}