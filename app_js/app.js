//function faz tooltip
document.addEventListener('DOMContentLoaded', function() {
    let chama = document.querySelectorAll('#chama');
    let instancia_chama = M.Tooltip.init(chama, {  
        position:'bottom'
});
let fala = document.querySelectorAll('#fala_cmg');
let instancia_fala = M.Tooltip.init(fala, {  
    position:'bottom'
});
let avalia = document.querySelectorAll('#avalia');
let instancia_avalia = M.Tooltip.init(avalia, {  
    position:'bottom'
});
let mess = document.querySelectorAll('#mess');
let instancia_mess = M.Tooltip.init(mess, {  
    position:'bottom'
});
let enviar = document.querySelectorAll('#enviar');
let instancia_enviar = M.Tooltip.init(enviar, {  
    position:'bottom'
});
});
//function faz modal
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {
        opacity:250
    });
  });
  //function faz menu
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
//function faz barrinha do card
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instances = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true
    });
  });

  //function envia solicitação
function enviaSoli() {

    let nome = document.querySelector('#nome').value;
    let telefone = document.querySelector('#telefone').value;
    let coleta = document.querySelector('#coleta').value;
    let comp_coleta = document.querySelector('#comp_coleta').value;
    let entrega = document.querySelector('#entrega').value;
    let comp_entrega = document.querySelector('#comp_entrega').value;
    let info = document.querySelector('#info').value;
   
    let url = "https://api.whatsapp.com/send?phone=5547984674048&text= Controle de Pedidos -->> %0A Nome do Cliente: %0A "
        + nome + " %0A Telefone: %0A" + telefone + "%0A Endereço de COLETA: %0A " + coleta + "%0A Complemento COLETA: %0A "
        + comp_coleta + " %0A Endereço de ENTREGA: %0A " + entrega + " %0A Complemento ENTREGA: %0A "
        + comp_entrega + " %0A Informações do Produto: %0A " + info;

    window.open(url);
  }
// function avaliação
function avalia(){
    let avaliacao = document.getElementById("icon_prefix2").value;
    let mail = "mailto:maa.te.us_fogaca@hotmail.com?Subject="+avaliacao;

    window = window.open(mail, 'emailWindow');

}