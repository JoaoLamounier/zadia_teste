function initmenu() {
    //aqui busca em qual estado está//
    estadotela = document.getElementById("tv")
    var c = document.getElementById("tv").childNodes
    //aqui são colocados id's nas divs inferiores para começar a mostrar comandos e adicionar onclicks nos botões//
    //não faço ideia do porque mas esta apenas salvando nos numeros impares da array
    c[1].setAttribute("id","tvzina") 
    c[3].setAttribute("id","lojadescricao")
    c[5].setAttribute("id","qrcode")
    c[7].setAttribute("id","loja")
    c[9].setAttribute("id","botaofrente")
    c[9].addEventListener("click", mudarimg, false)
    c[11].setAttribute("id","botaodentro");
    c[11].addEventListener("click", mudarimg, false)
    c[13].setAttribute("id","botaoatras");
    c[13].addEventListener("click", mudarimg, false)
    estadotela.setAttribute("id","tvmenu"); //aqui é alterado o estado atual da tela//
};
function mudarimg(){
    var imgatual= document.getElementById("imgtv").style.background

}