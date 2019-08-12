var grafico = myTempChart1.getContext('2d');
var grafico2 = myTempChart2.getContext('2d');
var grafico3 = myTempChart3.getContext('2d');
var grafico4 = myTempChart4.getContext('2d');

var dados1 = {
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
    }],
};
var dados2 = {
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
    }],
};
var dados3 = {
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
    }],
};
var dados4 = {
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
    }],
};
var t1 = new Chart(grafico, {
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
var t2 = new Chart(grafico2, {
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
var t3 = new Chart(grafico3, {
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
var t4 = new Chart(grafico4, {
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


    fetch('/leituras/silos', {
            cache: 'no-store'
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(resposta) {
                    // console.log(resposta);
                    for (i = 0; i < resposta[0].length; i++) {
                        var registro = resposta[0][i];
                        if (dados1.labels.length < 8) {
                            dados1.labels.push(registro.hora);
                            dados1.datasets[0].data.push(registro.temp);
                            dados1.datasets[1].data.push(registro.umidade);
                        } else {
                            dados1.labels.shift();
                            dados1.labels.push(registro.hora);
                            dados1.datasets[0].data.shift();
                            dados1.datasets[0].data.push(registro.temp);
                            dados1.datasets[1].data.shift();
                            dados1.datasets[1].data.push(registro.umidade);
                        }
                    }
                    t1.update();
                    for (i = 0; i < resposta[1].length; i++) {
                        var registro = resposta[1][i];

                        if (dados2.labels.length < 8) {
                            dados2.labels.push(registro.hora);
                            dados2.datasets[0].data.push(registro.temp);
                            dados2.datasets[1].data.push(registro.umidade);
                        } else {
                            dados2.labels.shift();
                            dados2.labels.push(registro.hora);
                            dados2.datasets[0].data.shift();
                            dados2.datasets[0].data.push(registro.temp);
                            dados2.datasets[1].data.shift();
                            dados2.datasets[1].data.push(registro.umidade);
                        }
                    }
                    t2.update();
                    for (i = 0; i < resposta[2].length; i++) {
                        var registro = resposta[2][i];

                        if (dados3.labels.length < 8) {
                            dados3.labels.push(registro.hora);
                            dados3.datasets[0].data.push(registro.temp);
                            dados3.datasets[1].data.push(registro.umidade);
                        } else {
                            dados3.labels.shift();
                            dados3.labels.push(registro.hora);
                            dados3.datasets[0].data.shift();
                            dados3.datasets[0].data.push(registro.temp);
                            dados3.datasets[1].data.shift();
                            dados3.datasets[1].data.push(registro.umidade);
                        }
                    }
                    t3.update();
                    for (i = 0; i < resposta[3].length; i++) {
                        var registro = resposta[3][i];

                        if (dados4.labels.length < 8) {
                            dados4.labels.push(registro.hora);
                            dados4.datasets[0].data.push(registro.temp);
                            dados4.datasets[1].data.push(registro.umidade);
                        } else {
                            dados4.labels.shift();
                            dados4.labels.push(registro.hora);
                            dados4.datasets[0].data.shift();
                            dados4.datasets[0].data.push(registro.temp);
                            dados4.datasets[1].data.shift();
                            dados4.datasets[1].data.push(registro.umidade);
                        }
                    }
                    t4.update();
                    plotarGrafico(dados1, dados2, dados3, dados4);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                Swal.fire({
                    title: "Erro!",
                    html: `Não foi possível fazer a aquisição dos dados para geração dos gráficos.`,
                    type: "error",
                    button: "Ok!",
                });
                setTimeout(atualizarGrafico, 10000);
            }
        })
        .catch(function(error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            Swal.fire({
                title: "Erro!",
                html: `Não foi possível fazer a aquisição dos dados para geração dos gráficos.`,
                type: "error",
                button: "Ok!",
            });
            setTimeout(atualizarGrafico, 10000);
        });
}