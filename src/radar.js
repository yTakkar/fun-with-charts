import Chart from 'chart.js'

const context = document.getElementById('radarChart')

const chart = new Chart(context, {
  type: 'radar',
  data: {
    datasets: [
      {
        data: [44, 50, 70, 120, 150],
        label: 'SSC Marks',
        borderColor: 'skyblue',
        pointBorderWidth: 1,
        pointBorderColor: 'white',
        pointBackgroundColor: 'skyblue',
      },
      {
        data: [120, 100, 140, 100, 80],
        label: 'HSC Marks',
        borderColor: 'slategrey',
        pointBorderWidth: 1,
        pointBorderColor: 'white',
        pointBackgroundColor: 'red'
      }
    ],
    labels: ['English', 'Hindi', 'History', 'Geography', 'Maths'],
  },
  options: {
    title: {
      display: true,
      text: 'Marks'
    },
  }
})