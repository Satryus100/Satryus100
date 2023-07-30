function jogar(){
  if(document.getElementById("jo").checked==false && document.getElementById("ken").checked==false && document.getElementById("po").checked==false){
    alert("SELECIONE UM ITEM!!!");
  }else{
    var aleatorio = Math.floor(Math.random()*3);
    switch(aleatorio){
      case 0:
        document.getElementById("maquina").src="/Jô_Ken_Pô/imagem/flipeJô.jpg";
        break;
        
      case 1:
        document.getElementById("maquina").src = "/Jô_Ken_Pô/imagem/flipeKen.jpg";
        break;
      
      case 2:
        document.getElementById("maquina").src = "/Jô_Ken_Pô/imagem/flipePô.jpg";
        break;
      
    }
   }
  if((document.getElementById("jo").checked ==true && aleatorio ==0) || (document.getElementById("ken").checked ==true && aleatorio ==1) || (document.getElementById("po").checked ==true && aleatorio ==2)){
    document.getElementById("placar").innerHTML = "EMPATE";
  } else if((document.getElementById("jo").checked ==true && aleatorio ==2) || (document.getElementById("ken").checked ==true && aleatorio ==0) || (document.getElementById("po").checked ==true && aleatorio ==1)){
    document.getElementById("placar").innerHTML = "JOGADOR VENCEU";
    
  }else{
    document.getElementById("placar").innerHTML="MÁQUINA VENCEU";
  }
}

function resetar(){
  document.getElementById("maquina").src ="/Jô_Ken_Pô/imagem/flipe1.jpg";
  
  document.getElementById("placar").innerHTML="";
}