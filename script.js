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

