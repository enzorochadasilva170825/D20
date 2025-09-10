
// --- Seleção dos Elementos do HTML (DOM) ---

// Botões
const btnRolar = document.getElementById('btn-rolar');
const btnRecomecar = document.getElementById('btn-recomecar');

// Campos de Valor (D20)
const forD20 = document.getElementById('for-d20');
const desD20 = document.getElementById('des-d20');
const conD20 = document.getElementById('con-d20');
const intD20 = document.getElementById('int-d20');
const sabD20 = document.getElementById('sab-d20');
const carD20 = document.getElementById('car-d20');
const camposD20Array = [forD20, desD20, conD20, intD20, sabD20, carD20];

// Campos de Modificador
const forMod = document.getElementById('for-mod');
const desMod = document.getElementById('des-mod');
const conMod = document.getElementById('con-mod');
const intMod = document.getElementById('int-mod');
const sabMod = document.getElementById('sab-mod');
const carMod = document.getElementById('car-mod');
const camposModArray = [forMod, desMod, conMod, intMod, sabMod, carMod];

// Campos de Total
const forTotal = document.getElementById('for-total');
const desTotal = document.getElementById('des-total');
const conTotal = document.getElementById('con-total');
const intTotal = document.getElementById('int-total');
const sabTotal = document.getElementById('sab-total');
const carTotal = document.getElementById('car-total');
const camposTotalArray = [forTotal, desTotal, conTotal, intTotal, sabTotal, carTotal];


// --- Funções do Projeto ---

/**
 * Função 1: Gerar números aleatórios (D20)
 * Gera 6 números aleatórios entre 1 e 20 (simulando 6 dados de 20 lados).
 * @returns {Array<number>} Um array com 6 números aleatórios.
 */
function gerarNumerosAleatorios() {
    let numeros = [];
    for (let i = 0; i < 6; i++) {
        // Math.random() gera de 0 a 0.99...
        // * 20 -> de 0 a 19.99...
        // + 1 -> de 1 a 20.99...
        // Math.floor() arredonda para baixo, resultando em 1 a 20.
        const numeroSorteado = Math.floor(Math.random() * 20) + 1;
        numeros.push(numeroSorteado);
    }
    return numeros;
}

/**
 * Função 2: Adicionar os números aleatórios nos campos corretos.
 * Esta função orquestra o início do processo.
 */
function preencherCamposD20() {
    const numerosGerados = gerarNumerosAleatorios();

    for (let i = 0; i < camposD20Array.length; i++) {
        camposD20Array[i].value = numerosGerados[i];
    }
    // Após preencher os valores, chama a função para calcular os modificadores
    calcularModificadores(numerosGerados);
}

/**
 * Função 3: Aplicar um cálculo de modificador em cima do valor gerado no D20.
 * @param {Array<number>} valoresD20 - O array de números gerados.
 */
function calcularModificadores(valoresD20) {
    let modificadores = [];

    for (let i = 0; i < valoresD20.length; i++) {
        const valor = valoresD20[i];
        let mod = 0;

        if (valor > 15) { // Números de 16 a 20
            mod = (valor / 1.2) + 1;
        } else if (valor > 7) { // Números de 8 a 15
            mod = (valor / 1.2) + 0;
        } else { // Números de 1 a 7
            mod = (valor / 0.8) - 1;
        }
        // Arredonda o modificador para o inteiro mais próximo.
        modificadores.push(Math.round(mod));
    }
    
    // Preenche os campos de modificador na tela
    for (let i = 0; i < camposModArray.length; i++) {
        camposModArray[i].value = modificadores[i];
    }

    // Após calcular os modificadores, chama a função para calcular o total
    calcularTotal();
}

/**
 * Função 4: Fazer todo o cálculo (D20 + Modificador).
 */
function calcularTotal() {
    for (let i = 0; i < 6; i++) {
        // Converte o valor dos campos (que são texto) para número
        const valorD20 = parseInt(camposD20Array[i].value);
        const valorMod = parseInt(camposModArray[i].value);

        const total = valorD20 + valorMod;

        camposTotalArray[i].value = total;
    }
}

/**
 * Função 5: Recarregar a página.
 */
function recarregarPagina() {
    location.reload();
}


// --- Eventos (Ações dos Botões) ---

// Adiciona um "ouvinte de evento" ao botão de rolar.
// Quando o botão for clicado, ele executará a função preencherCamposD20.
btnRolar.addEventListener('click', preencherCamposD20);

// Adiciona um "ouvinte de evento" ao botão de recomeçar.
btnRecomecar.addEventListener('click', recarregarPagina);