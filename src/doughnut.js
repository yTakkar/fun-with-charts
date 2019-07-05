import Chart from 'chart.js'

const context = document.getElementById('doughnutChart')

const chart = new Chart(context, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [10, 50, 70, 120, 200],
      backgroundColor: [
        'yellow',
        '#eeeeee',
        'grey',
        'skyblue',
        'tomato',
      ],
    }],
    labels: ['English', 'Hindi', 'History', 'Geography', 'Maths'],
  },
  options: {
    animation: {
      animateRotate: true,
      animateScale: true
    },
    title: {
      display: true,
      text: 'SSC Marks'
    },
    layout: {
      padding: 10
    },
    tooltips: {
      backgroundColor: 'white',
      bodyFontColor: 'black',
    }
  }
})