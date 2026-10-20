console.log("Tudo nos conformes.");

function consumokWh(Watts,hrsUsoporDia,diasNoMês) {
    consumo = (Watts * hrsUsoporDia * diasNoMês) / 1000
    return consumo
}

function mediaAnual(mes1,mes2,mes3,mes4,mes5,mes6,mes7,mes8,mes9,mes10,mes11,mes12) {
    media = (mes1 + mes2 + mes3 + mes4 + mes5 +mes6 + mes7 + mes8 + mes9 + mes10 + mes11 + mes12) / 12
    return media 
}

function classdoConsumo (kWhdoMês) {
    if (kWhdoMês < 166){
        return "Econômico"
    }
    else if (kWhdoMês >= 166){
        return "Moderado"
    }
    else if (kWhdoMês >= 300) {
        return "Elevado"   
    }
}

///Ordem da lista:
// 1 (Watts)
// 2 (Horas de uso)
// 3 (Dias do mês///
let listaDeDadosMês = [
    [1100,9,31],
    [1300,12,28],
    [1230,10,31],
    [1340,17,30],
    [1102,13,31],
    [904,8,30],
    [1430,7,31],
    [1234,17,31],
    [1121,12,30],
    [1000,22,31],
    [1323,7,30],
    [1221,11,31],
]

for (let valores of listaDeDadosMês) {
    let resultado = consumokWh(valores[0], valores[1], valores[2]);
    console.log(resultado);
}

