var temimg1;
var temimg2;
var temimg3;

function initmenu() {
    //aqui busca em qual estado está//
    estadotela = document.getElementById("tv");
    var c = estadotela.childNodes;
    //aqui são colocados id's nas divs inferiores para começar a mostrar comandos e adicionar onclicks nos botões//
    //não faço ideia do porque mas esta apenas salvando nos numeros impares da array
    c[1].setAttribute("id","tvzina") ;
    c[3].setAttribute("id","qrcode");
    c[5].setAttribute("id","loja");
    c[7].setAttribute("id","botaofrente");
    document.getElementById('botaofrente').onclick = mudarimgfrente;
    c[9].setAttribute("id","botaodentro");
    document.getElementById('botaodentro').onclick = mudarimgdentro;
    c[11].setAttribute("id","botaoatras");
    document.getElementById('botaoatras').onclick = mudarimgatras;
    document.getElementById("tv").removeAttribute("onclick");
    estadotela.setAttribute("id","tvmenu"); //aqui é alterado o estado atual da tela//
};

//estas funções são utilizadas para trocar a img sendo mostrada e colocar as imagens em qual img esta sendo mostrada e tirar da que não esta sendo
function mudarimgfrente(){
    document.getElementById("tvzina").style.backgroundImage = "url(nav1.png)"
    if(temimg1!=1){
        var img = document.createElement("img");
        img.src = "btn_pause.png";
        var src = document.getElementById("botaofrente");
        src.appendChild(img);
        temimg1=1;
        if(temimg3==1){
            let bf = document.getElementById('botaoatras');
            bf.removeChild(bf.firstChild);
        }
        if(temimg2==1){
            let ba = document.getElementById("botaodentro");
            ba.removeChild(ba.firstChild);
        }
        temimg2=5;
        temimg3=5;
    }
};
function mudarimgdentro(){
    document.getElementById("tvzina").style.backgroundImage = "url(nav2.png)"
    if(temimg2!=1){
        var img = document.createElement("img");
        img.src = "btn_pause.png";
        var src = document.getElementById("botaodentro");
        src.appendChild(img);
        temimg2=1;
        if(temimg1==1){
            let bf = document.getElementById('botaofrente');
            bf.removeChild(bf.firstChild);
        }
        if(temimg3==1){
            let ba = document.getElementById("botaoatras");
            ba.removeChild(ba.firstChild);
        }
        temimg1=5;
        temimg3=5;
    }
};
function mudarimgatras(){
    document.getElementById("tvzina").style.backgroundImage = "url(nav3.png)"
    if(temimg3!=1){
        var img = document.createElement("img");
        img.src = "btn_pause.png";
        var src = document.getElementById("botaoatras");
        src.appendChild(img);
        temimg3=1
        if(temimg1==1){
            let bf = document.getElementById('botaofrente');
            bf.removeChild(bf.firstChild);
        }
        if(temimg2==1){
            let ba = document.getElementById("botaodentro");
            ba.removeChild(ba.firstChild);
        }    
        temimg1=5;
        temimg2=5;
    }
};