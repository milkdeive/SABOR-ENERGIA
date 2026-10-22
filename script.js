console.log("SABOR ENERGIA - Painel de consumo");
console.log("=".repeat(33));
const limiteDeConsumo = 300;
const dadosSaoFicticios = true;

const listaDeDadosMes = [
    [1100, 9, 31],
    [1300, 7, 28],
    [1230, 6, 31],
    [1340, 8, 30],
    [1102, 5, 31],
    [904, 7, 30]
];

const nomesDosMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho"
];

// calcula o total do consumo em kWh
function consumokWh(watts, horasUsoPorDia, diasDoMes) {
    const consumo = (watts * horasUsoPorDia * diasDoMes) / 1000;
    return consumo;
}

// calcula o total dos consumo
function totalDeConsumo(consumos) {
    let total = 0;

    for (let i = 0; i < consumos.length; i++) {
        total += consumos[i];
    }

    return total;
}

// calcula a media dos consumo
function mediaAnual(consumos) {
    if (consumos.length === 0) {
        return 0;
    }

    return totalDeConsumo(consumos) / consumos.length;
}

// classificação do consumo
function classdoConsumo(kWhdoMes) {
    if (kWhdoMes > limiteDeConsumo) {
        return "Elevado";
    } else if (kWhdoMes >= 166 && kWhdoMes <= limiteDeConsumo) {
        return "Moderado";
    } else {
        return "Econômico";
    }
}

// vai contar quantos meses ficaram com o consumo acima do limite
function contarPeriodosAcima(consumos, limite) {
    let contador = 0;

    for (let i = 0; i < consumos.length; i++) {
        if (consumos[i] > limite) {
            contador++;
        }
    }

    return contador;
}

const consumos = [];

for (let i = 0; i < listaDeDadosMes.length; i++) {
    const dados = listaDeDadosMes[i];

    const resultado = consumokWh(
        dados[0],
        dados[1],
        dados[2]
    );

    consumos.push(resultado);

    console.log(
        `${nomesDosMeses[i]}: ${resultado.toFixed(2)} kWh`
    );
}

const total = totalDeConsumo(consumos);
const media = mediaAnual(consumos);

const mesesAcimaDoLimite = contarPeriodosAcima(
    consumos,
    limiteDeConsumo
);

const classificacao = classdoConsumo(media);

// os coiso do CONSOLE.LOG guys
console.log("Consumo total:", total.toFixed(2), "kWh");
console.log("Dados fictícios:", dadosSaoFicticios);
console.log("Média por período:", media.toFixed(2), "kWh");
console.log("Períodos acima de 300 kWh:", mesesAcimaDoLimite);
console.log("Classificação da média:", classificacao);

// aq no caso mostraria os resultados no html
// lembrando q o toFixed é pra dizer a quantidade de casas decimais
document.getElementById("consumo-total").textContent =
    `${total.toFixed(2)} kWh`;

document.getElementById("media-anual").textContent =
    `${media.toFixed(2)} kWh`;

document.getElementById("meses-acima").textContent =
    `${mesesAcimaDoLimite} de ${consumos.length} períodos`;

document.getElementById("consumo-mes-passado").textContent =
    `${consumos[consumos.length - 1].toFixed(2)} kWh`;

document.getElementById("classificacao-consumo").textContent =
    classificacao;

// vai preencher a tabela com os consumos q tinha em cada mes
for (let i = 0; i < consumos.length; i++) {
    document.getElementById(`mes-${i + 1}`).textContent =
        `${consumos[i].toFixed(2)} kWh`;
}
