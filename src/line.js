import Chart from 'chart.js'

const ctx = document.getElementById('lineChart')

const data = [
  { x: 0, y: 45000 },
  { x: 10, y: 60000 },
  { x: 20, y: 69000 },
  { x: 30, y: 99000 },
  { x: 40, y: 123000 },
  { x: 50, y: 130000 },
  { x: 60, y: 160000 },
];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: '# profit',
      data,
      fill: false,
      borderColor: '#7cb5ec',
      pointBackgroundColor: 'blue',
      pointBorderWidth: 5,
      pointStyle: 'rectRounded',
      lineTension: 0.4,
    }]
  },
  options: {
    // showLines: true,
    // spanGaps: true,
    layout: {
      padding: 10,
    },
    scales: {
      xAxes: [
        {
          type: 'linear',
          // gridLines: {
          //   display: false
          // },
          scaleLabel: {
            display: true,
            labelString: 'No. of weeks'
          }
        },
      ],
      yAxes: [{
        ticks: {
          callback: (value, index, values) => {
            if (value > 1000) return `${value/1000}k`
            return value
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Profit in rupees'
        }
      }]
    }
  }
})