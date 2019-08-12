var grafico = myChart.getContext('2d');

var t = new Chart(grafico, {
    type: 'line',
    data: {
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
    },
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
                    maxTicksLimit: 10
                }
            }],
            yAxes: [{
                id: 'A',
                position: 'left',
                ticks: {
                    maxTicksLimit: 9,
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
                    maxTicksLimit: 9,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value.toFixed(1) + "%";
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
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