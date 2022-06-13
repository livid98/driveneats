

let contadorprato = 0;
let contadorbebida = 0;
let contadorsobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function mudarButton() {
  const button = document.querySelector(".buttonverde");
  const button2 = document.querySelector(".button");
  button.classList.remove("apagado");
  button2.classList.add("apagado");
}
function check(elemento) {
        const icon = document.querySelector(".vector");
        if (icon !== null) {
          icon.classList.remove("ativado");
        }
        elemento.classList.add("ativado");
      }
function clicarBotaoEnviar() {
  let preco = precoBebida + precoPrato + precoSobremesa;
  let mensagem =
    "Olá, gostaria de fazer o pedido: \n\
    - Prato: Frango Yin Yang \n\
    - Bebida: Coquinha Gelada \n\
    - Sobremesa: Pudim \n\
    Total: R$ " +
    preco.toFixed(2);
  link = "https://wa.me/5583996142407?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

 function toggleselecionado(elemento,x) {
        precoPrato = x;
        const elementoClicado = document.querySelector(".selecionado");
        
        if (elementoClicado !== null) {
          elementoClicado.classList.remove("selecionado");
        }
        elemento.classList.add("selecionado");
        contadorprato++;
    if(contadorprato > 0 && contadorbebida > 0 && contadorsobremesa >0){
        mudarButton();
    }
    }
    

    function toggleselecionado1(elemento,x) {
        precoBebida = x;
        const elementoClicado = document.querySelector(".bebida .selecionado");
        if (elementoClicado !== null) {
          elementoClicado.classList.remove("selecionado");
        }

        elemento.classList.add("selecionado");
        contadorbebida++;
         

         if(contadorprato > 0 && contadorbebida > 0 && contadorsobremesa >0){
             mudarButton();
         }
    }
    function toggleselecionado2(elemento,x) {
        precoSobremesa = x;
        const elementoClicado = document.querySelector(".sobremesa .selecionado");
        if (elementoClicado !== null) {
          elementoClicado.classList.remove("selecionado");
        }

        elemento.classList.add("selecionado");
        contadorsobremesa++;
         

         if(contadorprato > 0 && contadorbebida > 0 && contadorsobremesa >0){
             mudarButton();
         }
    }
   

