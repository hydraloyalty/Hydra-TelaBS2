document.addEventListener('DOMContentLoaded', function () {

    var botaoImprimir = document.getElementById('botao-imprimir');
    var secaoConfig = document.querySelector('.config'); // Certifique-se de que o seletor corresponda à sua classe de configuração

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', function () {
            // Adiciona uma classe para ocultar a seção de configuração
            secaoConfig.classList.add('ocultar-na-impressao');

            // Dispara a impressão
            window.print();

            // Espera um pouco antes de remover a classe (por exemplo, 500 milissegundos)
            setTimeout(function () {
                secaoConfig.classList.remove('ocultar-na-impressao');
            }, 500);
        });
    }
});

var botao = document.getElementById("botao-imprimir");
var telaAprov = document.getElementById("tela-aprov");
var timeoutId;

botao.addEventListener("mousedown", function() {
  telaAprov.style.height = "1113px";
});

botao.addEventListener("mouseup", function() {
  clearTimeout(timeoutId); // Limpa o timeout anterior, se houver
  timeoutId = setTimeout(function() {
    telaAprov.style.height = "860px";
  }, 1000); // 1000ms = 1 segundo
});

// Para garantir que a altura retorne para 860px se o usuário mover o mouse para fora do botão enquanto estiver pressionado
botao.addEventListener("mouseout", function() {
  clearTimeout(timeoutId); // Limpa o timeout anterior, se houver
  timeoutId = setTimeout(function() {
    telaAprov.style.height = "860px";
  }, 1000); // 1000ms = 1 segundo
});
