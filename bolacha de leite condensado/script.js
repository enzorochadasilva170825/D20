const forcaAdd = document.querySelector("#forca_add");
const forcaSub = document.querySelector("#forca_sub");

const destrezaAdd = document.querySelector("#destreza_add");
const destrezaSub = document.querySelector("#destreza_sub");

const sabedoriaAdd = document.querySelector("#sabedoria_add");
const sabedoriaSub = document.querySelector("#sabedoria_sub");

const dadoRolar = document.querySelector("#dado_rolar");

let valorForca = 0;
let valorDestreza = 0;
let valorSabedoria = 0;
let valorDado = 0;

function somar() {
    const resultado =  document.querySelector("#resultado_valor");
    let somaTotal = valorForca + valorDestreza + valorSabedoria + valorDado;
    resultado.innerHTML = somaTotal;
}

function rolarDado() {
    valorDado = Math.floor(Math.rondom() * 20) +1;

    const dadoValor = document.querySelector("#dado_valor");
    dadoValor.innerHTML = valorDado;

    somar();
    
}

dadoRolar.addEventListener("click", rolarDado);
forcaAdd.addEventListener("click", ()=>{
    valorForca++
    document.querySelector("#forca_valor").value = valorForca;
    somar();
});

destrezaAdd.addEventListener("click", () => {
    valorDestreza++;
    document.querySelector("#Destreza_valor").value = valorDestreza

    somar();
});

destrezaSub.addEventListener("click", () => {
    valorDestreza--;
    document.querySelector("#destreza_valor").value = valorDestreza
    somar();
});

sabedoriaAdd.addEventListener("click", () => {
    valorSabedoria++;
    document.querySelector("#sabedoria_valor").value = valorSabedoria;
    somar();
});