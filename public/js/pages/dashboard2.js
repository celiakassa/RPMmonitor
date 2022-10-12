
/**
 *
 * Dashboard
 *
 * Dashboard page content scripts. Initialized from scripts.js file.
 *
 *
 */

 class Dashboard {
    constructor() {
      // References to page items that might require an update
      this._horizontalTooltipChart = null;
      this._lineChart = null;
      this._areaChart = null;
      this._doughnutChart = null;
      // Initialization of the page plugins
      if (typeof Chart !== 'undefined' && typeof ChartsExtend !== 'undefined') {
        this._initCustomTooltipBar();
      } else {
        console.error('[CS] ChartsExtend is undefined.');
      }
      
      this._initEvents();
      
    }
  
    _initCustomTooltipBar() {
      if (document.getElementById('horizontalTooltipChart1')) {
        const ctx1 = document.getElementById('horizontalTooltipChart1').getContext('2d');
        this._horizontalTooltipChart = new Chart(ctx1, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Breads',
                icon: 'bread',
                borderColor: Globals.primary,
                backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
                data: [456, 479, 424, 569],
                borderWidth: 2,
              },
              {
                label: 'Patty',
                icon: 'loaf',
                borderColor: Globals.secondary,
                backgroundColor: 'rgba(' + Globals.secondaryrgb + ',0.1)',
                data: [364, 504, 605, 400],
                borderWidth: 2,
              },
            ],
          },
          options: {
            cornerRadius: parseInt(Globals.borderRadiusMd),
            plugins: {
              crosshair: false,
              datalabels: {display: false},
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
              labels: ChartsExtend.LegendLabels(),
            },
           
            
          },
        });
      }
      if (document.getElementById('horizontalTooltipChart2')) {
        const ctx2 = document.getElementById('horizontalTooltipChart2').getContext('2d');
        this._horizontalTooltipChart = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Breads',
                icon: 'bread',
                borderColor: Globals.primary,
                backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
                data: [456, 479, 424, 569],
                borderWidth: 2,
              },
              {
                label: 'Patty',
                icon: 'loaf',
                borderColor: Globals.secondary,
                backgroundColor: 'rgba(' + Globals.secondaryrgb + ',0.1)',
                data: [364, 504, 605, 400],
                borderWidth: 2,
              },
            ],
          },
          options: {
            cornerRadius: parseInt(Globals.borderRadiusMd),
            plugins: {
              crosshair: false,
              datalabels: {display: false},
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
              labels: ChartsExtend.LegendLabels(),
            },
           
            
          },
        });
      }
      if (document.getElementById('horizontalTooltipChart3')) {
        const ctx3 = document.getElementById('horizontalTooltipChart3').getContext('2d');
        this._horizontalTooltipChart = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Breads',
                icon: 'bread',
                borderColor: Globals.primary,
                backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
                data: [456, 479, 424, 569],
                borderWidth: 2,
              },
              {
                label: 'Patty',
                icon: 'loaf',
                borderColor: Globals.secondary,
                backgroundColor: 'rgba(' + Globals.secondaryrgb + ',0.1)',
                data: [364, 504, 605, 400],
                borderWidth: 2,
              },
            ],
          },
          options: {
            cornerRadius: parseInt(Globals.borderRadiusMd),
            plugins: {
              crosshair: false,
              datalabels: {display: false},
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
              labels: ChartsExtend.LegendLabels(),
            },
           
            
          },
        });
      }

      // Standard line chart
  
    if (document.getElementById('lineChart1')) {
      const lineChart1 = document.getElementById('lineChart1').getContext('2d');
      this._lineChart = new Chart(lineChart1, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [{gridLines: {display: false}, ticks: {fontColor: Globals.alternate}}],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.primary,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.primary,
              borderWidth: 2,
              pointRadius: 3,
              pointBorderWidth: 3,
              pointHoverRadius: 4,
              fill: false,
            },
          ],
        },
      });
    }
    if (document.getElementById('lineChart2')) {
      const lineChart2 = document.getElementById('lineChart2').getContext('2d');
      this._lineChart = new Chart(lineChart2, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [{gridLines: {display: false}, ticks: {fontColor: Globals.alternate}}],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.primary,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.primary,
              borderWidth: 2,
              pointRadius: 3,
              pointBorderWidth: 3,
              pointHoverRadius: 4,
              fill: false,
            },
          ],
        },
      });
    }
    if (document.getElementById('lineChart3')) {
      const lineChart3 = document.getElementById('lineChart3').getContext('2d');
      this._lineChart = new Chart(lineChart3, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [{gridLines: {display: false}, ticks: {fontColor: Globals.alternate}}],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.primary,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.primary,
              borderWidth: 2,
              pointRadius: 3,
              pointBorderWidth: 3,
              pointHoverRadius: 4,
              fill: false,
            },
          ],
        },
      });
    }4
    if (document.getElementById('lineChart4')) {
      const lineChart4 = document.getElementById('lineChart4').getContext('2d');
      this._lineChart = new Chart(lineChart4, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [{gridLines: {display: false}, ticks: {fontColor: Globals.alternate}}],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.primary,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.primary,
              borderWidth: 2,
              pointRadius: 3,
              pointBorderWidth: 3,
              pointHoverRadius: 4,
              fill: false,
            },
          ],
        },
      });
    }
    if (document.getElementById('lineChart5')) {
      const lineChart5 = document.getElementById('lineChart5').getContext('2d');
      this._lineChart = new Chart(lineChart5, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [{gridLines: {display: false}, ticks: {fontColor: Globals.alternate}}],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.primary,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.primary,
              borderWidth: 2,
              pointRadius: 3,
              pointBorderWidth: 3,
              pointHoverRadius: 4,
              fill: false,
            },
          ],
        },
      });
    }
    if (document.getElementById('areaChart')) {
      const areaChart = document.getElementById('areaChart').getContext('2d');
      this._areaChart = new Chart(areaChart, {
        type: 'line',
        options: {
          plugins: {
            crosshair: ChartsExtend.Crosshair(),
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {display: true, lineWidth: 1, color: Globals.separatorLight, drawBorder: false},
                ticks: {beginAtZero: true, stepSize: 5, min: 50, max: 70, padding: 20, fontColor: Globals.alternate},
              },
            ],
            xAxes: [
              {
                gridLines: {display: false},
                ticks: {fontColor: Globals.alternate},
              },
            ],
          },
          legend: {display: false},
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: '',
              data: [60, 54, 68, 60, 63, 60, 65],
              borderColor: Globals.primary,
              pointBackgroundColor: Globals.foreground,
              pointBorderColor: Globals.primary,
              pointHoverBackgroundColor: Globals.primary,
              pointHoverBorderColor: Globals.foreground,
              pointRadius: 4,
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 2,
              backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
            },
          ],
        },
      });
    }
    if (document.getElementById('doughnutChart')) {
      const doughnutChart = document.getElementById('doughnutChart');
      this._doughnutChart = new Chart(doughnutChart, {
        plugins: [ChartsExtend.CenterTextPlugin()],
        type: 'doughnut',
        data: {
          labels: ['Breads', 'Pastry', 'Patty'],
          datasets: [
            {
              label: '',
              borderColor: [Globals.tertiary, Globals.secondary, Globals.primary],
              backgroundColor: ['rgba(' + Globals.tertiaryrgb + ',0.1)', 'rgba(' + Globals.secondaryrgb + ',0.1)', 'rgba(' + Globals.primaryrgb + ',0.1)'],
              borderWidth: 2,
              data: [15, 25, 20],
            },
          ],
        },
        draw: function () {},
      
      });
    }
 
    }
    
    // Listening for color change events to update charts
  _initEvents() {
    document.documentElement.addEventListener(Globals.colorAttributeChange, (event) => {
      this._horizontalTooltipChart && this._horizontalTooltipChart.destroy();
      this._lineChart && this._lineChart.destroy();
      this._areaChart && this._areaChart.destroy();
      this._doughnutChart && this._doughnutChart.destroy();
      this._initCustomTooltipBar();
    });
  }
    
  }
  