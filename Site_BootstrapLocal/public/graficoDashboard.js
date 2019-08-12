var grafico = myChart.getContext('2d');
var dados = {
    labels: [],
    datasets: [{
        id: 'A',
        data: [],
        label: "Temperatura",
        lineTension: 0.3,
        yAxisID: 'A',
        backgroundColor: "rgba(223, 25, 25, 0.03)",
        borderColor: "rgb(244, 66, 66)",
        pointRadius: 3,
        pointBackgroundColor: "rgb(244, 66, 66)",
        pointBorderColor: "rgb(244, 66, 66)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgb(244, 66, 66)",
        pointHoverBorderColor: "rgb(244, 66, 66)",
        pointHitRadius: 10,
        pointBorderWidth: 2
    }, {
        id: 'B',
        data: [],
        label: "Umidade",
        lineTension: 0.3,
        yAxisID: 'B',
        backgroundColor: "rgba(25, 28, 223, 0.03)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2
    }]
}
var t = new Chart(grafico, {
    type: 'line',
    data: dados,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                id: 'A',
                position: 'left',
                ticks: {
                    maxTicksLimit: 6,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value.toFixed(1) + "ºC";
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                },
            }, {
                id: 'B',
                position: 'right',
                ticks: {
                    maxTicksLimit: 6,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value.toFixed(1) + "%";
                    }
                },
                gridLines: {
                    color: "rgb(192, 192, 192)",
                    zeroLineColor: "rgb(192, 192, 192)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
    }
});


function atualizarGrafico() {

    fetch('/leituras/temporealmedia', {
            cache: 'no-store'
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(resposta) {
                    // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    if (dados.labels.length < 6) { //Se houver menos de 15 dados
                        dados.labels.push(resposta[0].hora); //Coloca o horário no eixo X
                        dados.datasets[0].data.push(resposta[0].temperatura);
                        dados.datasets[1].data.push(resposta[0].umidade);
                    } else {
                        dados.labels.shift(); //Remove o primeiro registro de horário
                        dados.labels.push(resposta[0].hora); //Insere a data atual
                        dados.datasets[0].data.shift();
                        dados.datasets[0].data.push(resposta[0].temperatura);
                        dados.datasets[1].data.shift();
                        dados.datasets[1].data.push(resposta[0].umidade);
                    }
                    t.update(); //Atualiza o gráfico
                    // console.log(dados.labels.length);
                    // console.log(dados.datasets[0].data.length);
                    setTimeout(atualizarGrafico, 3000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                setTimeout(atualizarGrafico, 5000);
            }
        })
        .catch(function(error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            setTimeout(atualizarGrafico, 5000);
        });
}