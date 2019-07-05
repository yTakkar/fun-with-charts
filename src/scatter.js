import Chart from 'chart.js'

const context = document.getElementById('scatterChart')

const chart = new Chart(context, {
  type: 'scatter',
    data: {
      datasets: [{
        label: 'data',
        data: [
          { x: 0, y: 10 }, 
          { x: 10, y: 5},
          { x: 1, y: 4 }, 
          { x: 3, y: 3 }, 
          { x: 6, y: 2 }
        ],
        backgroundColor: '#7cb5ec',
        pointStyle: 'triangle',
        borderWidth: 1,
        pointBorderWidth: 4,
        pointBorderColor: '#7cb5ec'
      }]
    },
    options: {
      tooltips: {
        backgroundColor: 'black',
        bodyFontColor: 'white'
      },
      title: {
        display: true,
        text: 'Scatter Dataset'
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'x-axis'
          },
          gridLines: {
            color: 'yellow',
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'y-axis'
          },
          gridLines: {
            color: 'yellow',
          }
        }]
      },
      layout: {
        padding: 10
      }
    }
})
