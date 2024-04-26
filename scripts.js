// JavaScript Document

// Selecionando o elemento de input do CNPJ
const inputCNPJ = document.getElementById('input-cnpj');

// Adicionando um evento de input ao campo de entrada de CNPJ
inputCNPJ.addEventListener('input', function() {
    const cnpjValue = inputCNPJ.value.replace(/\D/g, ''); // Remover caracteres não numéricos

    // Configuração para CNPJ
    inputCNPJ.maxLength = 18;

    // Formatação para CNPJ (##.###.###/####-##)
    let formattedCNPJ = cnpjValue.substring(0, 2);
    if (cnpjValue.length > 2) formattedCNPJ += '.' + cnpjValue.substring(2, 5);
    if (cnpjValue.length > 5) formattedCNPJ += '.' + cnpjValue.substring(5, 8);
    if (cnpjValue.length > 8) formattedCNPJ += '/' + cnpjValue.substring(8, 12);
    if (cnpjValue.length > 12) formattedCNPJ += '-' + cnpjValue.substring(12, 14);

    inputCNPJ.value = formattedCNPJ;
});

document.addEventListener('DOMContentLoaded', function () {
    const inputData = document.getElementById('input-data');
    
    function formatarData(valor) {
        valor = valor.replace(/\D/g, ''); // Remove não dígitos

        // Lógica para adicionar as barras de acordo com a entrada
        if (valor.length > 2 && valor.length <= 4) {
            valor = valor.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        } else if (valor.length >= 5 && valor.length <= 7) {
            valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
        } else if (valor.length >= 8) {
            valor = valor.replace(/(\d{2})(\d{2})(\d{4})(\d{0,4})/, '$1/$2/$3');
        }

        return valor.slice(0, 10); // Limita a 10 caracteres
    }
    
    inputData.addEventListener('input', function() {
        inputData.value = formatarData(inputData.value);
    });
});

    // Obtém o input
    const input = document.getElementById('input-codigo');

    // Gera um número aleatório entre 100000000000000 e 999999999999999
    const valorAleatorio = Math.floor(Math.random() * (999999999999999 - 100000000000000 + 1) + 100000000000000);

    // Define o valor do input como o número aleatório gerado
    input.value = valorAleatorio;

function mostrarCampoOutro(select) {
        const inputOutro = document.getElementById('input-parcelas-outro');
        if (select.value === 'outro') {
            inputOutro.style.display = 'inline-block'; // Exibe o campo de entrada de texto
        } else {
            inputOutro.style.display = 'none'; // Esconde o campo de entrada de texto se outra opção for selecionada
        }
    }

// Captura os elementos de radio
        const simRadio = document.getElementById('sim');
        const naoRadio = document.getElementById('nao');
        const dadosBancarios = document.getElementById('dados-bancarios');

        // Verifica se o botão "NÃO" está marcado ao carregar a página
        if (naoRadio.checked) {
            dadosBancarios.style.display = 'none'; // Oculta os dados bancários
        }

        // Adiciona um ouvinte de evento para cada botão de rádio
        simRadio.addEventListener('change', function() {
            // Se "SIM" estiver marcado, exibe os dados bancários
            if (simRadio.checked) {
                dadosBancarios.style.display = 'block';
            }
        });

        naoRadio.addEventListener('change', function() {
            // Se "NÃO" estiver marcado, oculta os dados bancários
            if (naoRadio.checked) {
                dadosBancarios.style.display = 'none';
            }
        });

document.addEventListener('DOMContentLoaded', function() {
        const parcelasSelect = document.getElementById('parcelas');
        const inputParcelas = document.getElementById('input-parcelas');

        // Define o valor padrão do campo de entrada para "12x"
        inputParcelas.value = "12x";
        inputParcelas.readOnly = true;

        // Adiciona um ouvinte de evento para monitorar a mudança na seleção
        parcelasSelect.addEventListener('change', function() {
            const selectedOption = parcelasSelect.value; // Obtém o valor da opção selecionada

            if (selectedOption === 'Outro') {
                // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
                inputParcelas.readOnly = false;
                inputParcelas.value = "";
                inputParcelas.placeholder = "Insira aqui a PARCELA";
            } else {
                // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
                inputParcelas.value = selectedOption;
                inputParcelas.readOnly = true;
                inputParcelas.placeholder = ""; // Remove o placeholder se não for "Outro"
                }
            });

            // Adiciona um ouvinte de evento para permitir apenas números e a letra "x" quando "Outro" é selecionado
            inputParcelas.addEventListener('input', function() {
                if (parcelasSelect.value === 'Outro') {
                    // Se "Outro" estiver selecionado, substitui qualquer caractere que não seja número ou "x" por uma string vazia
                    inputParcelas.value = inputParcelas.value.replace(/[^\dx]/gi, '');
                } else {
                    // Se outra opção estiver selecionada, limpa o valor
                    inputParcelas.value = "";
                }
            });
        });

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