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