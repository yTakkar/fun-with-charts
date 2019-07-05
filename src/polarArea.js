import Chart from 'chart.js'

const context = document.getElementById('polarAreaChart')

const chart = new Chart(context, {
  type: 'polarArea',
  data: {
    datasets: [{
      data: [30, 50, 70, 120, 150],
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
    title: {
      display: true,
      text: 'SSC Marks'
    },
    legend: {
      position: 'bottom',
    },
    animation: {
      animateRotate: true,
      animateScale: true
    },
    layout: {
      padding: 10
    }
  }
})