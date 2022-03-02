// Carne - 400gr por pessoa   + de 6 horas - 650
// Cerveja - 1200ml pr pessoa  + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let tempo = document.getElementById("tempo").value;

let carne;
let cerveja;
let bebidas;

function calcular(){
    carne = ((Number(adultos.value) + Number((criancas.value)/2)) * 0.400).toFixed(1);

    document.getElementById("resultadoCarne").innerHTML = `${carne}Kg de carne 🥩`;

    cerveja = (Number(adultos.value) * 1.200).toFixed(1);

    document.getElementById("resultadoCerveja").innerHTML = `${cerveja}L de cerveja 🍺`

    bebidas = ((Number(adultos.value) + Number((criancas.value)/2))).toFixed(1);

    document.getElementById("resultadoAgua").innerHTML = `${bebidas}L de água 🥤 ou refrigerante 🥤`
}

