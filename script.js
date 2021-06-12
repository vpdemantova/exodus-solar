var energia = [...Array(24)].map(() => AleNums(0, 800));
var meta = [...Array(24)].map(() => AleNums(0, 800));
var clima = [...Array(24)].map(() => AleNums(0, 8));
var Umidade = [...Array(24)].map(() => AleNums(0, 50));
var Temperatura = [-5, 15, 35, 26];
var hora = ["Horas", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var Temp = ["", "", "", "",];

var ct = document.getElementsByClassName("chart");

var grafico = new Chart(ct, {
    type: 'line',
    data: {
        labels: hora,
        datasets: [{
            label: "Produção de energia",
            data: energia,
            borderWidth: 3,
            borderColor: 'rgba(0, 104, 245,1)',
            backgroundColor: 'transparent',
        },
        {
            label: 'Meta',
            fill: false,
            data: meta,
            borderWidth: 3,
            borderColor: 'rgba(255, 100, 96,1)',
            backgroundColor: 'transparent',
            borderDash: [8, 8],
        },]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }

})

var ct2 = document.getElementsByClassName("chart2");

var grafico2 = new Chart(ct2, {
    type: 'line',
    data: {
        labels: hora,
        datasets: [{
            label: "Radiação solar",
            data: clima,
            borderWidth: 3,
            borderColor: 'rgba(232, 226, 136,1)',
            backgroundColor: 'transparent',
        },]
    }, options: {
        responsive: true,
        maintainAspectRatio: false
    }
})

var ct3 = document.getElementsByClassName("chart3");

var grafico3 = new Chart(ct3, {
    type: 'scatter',
    data: {
        labels: hora,
        datasets: [{
            label: "Umidade do ar",
            data: Umidade,
            borderWidth: 3,
            borderColor: 'rgba(109, 214, 218,1)',
            backgroundColor: 'transparent',
        },]
    }, options: {
        responsive: true,
        maintainAspectRatio: false
    }
})

var ct4 = document.getElementsByClassName("chart4");
var grafico4 = new Chart(ct4, {
    type: 'bar',
    data: {
        labels: Temp,
        datasets: [{
            label: "Temperatura",
            data: Temperatura,
            borderWidth: 3,
            borderColor: 'rgba(109, 167, 86,1)',
            backgroundColor: 'transparent',
        },]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
    }
})
function Inicio() {

    setInterval(PegarDadosClima, 1000);

    setInterval(Sujo, 1000);

}

function Sujo() {


    var Sujeira = (document.getElementById("ValorSujeira").value * AleNums(40, 100))

    return Sujeira

}

function PegarDadosClima() {

    var climaNovo = AleNums(0, 8);

    var metaNovo = (climaNovo * 80);

    var energiaNova = (metaNovo + AleNums(200, 300) - Sujo());

    var TemperaturaNova = (AleNums(-50, 50));

    var UmidadeNova = (AleNums(0, 50));

    energia.shift();
    energia.push(energiaNova);

    meta.shift();
    meta.push(metaNovo);

    clima.shift();
    clima.push(climaNovo);

    Temperatura.shift();
    Temperatura.push(TemperaturaNova);

    Umidade.shift();
    Umidade.push(UmidadeNova);

    grafico.update();
    grafico2.update();
    grafico3.update();
    grafico4.update();
}

function AleNums(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}