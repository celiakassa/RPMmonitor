/**
 *
 * CustomDashboard & CustomDashboardChart
 *
 */

 class CustomDashboard {
    constructor(pageCharts) {
      if( !$ || ("ajax" in $) == false) {
        console.log("jQuery is not present");
        return;
      }
  
    //   pageCharts.forEach(pgChart => {
    //     this._fetchDataAndInit(pgChart);
    //   });
    pageCharts.forEach(ctype => {
        this._getAjaxDataSample(ctype);
      });
    }
  
    _fetchDataAndInit(pgChart){
      let _this = this;
  
      $.ajax({
        url: pgChart.url,
        type: "POST",
        data:{
          type: pgChart.type,
          _token:  $('meta[name="csrf-token"]').attr('content'),
        },
        success:function(response){
          console.log(response);
          let csDashboard = new CustomDashboardChart(pgChart.canvasId, pgChart.type, response.data); 
        },
        error: function(error) {
          console.log(error);
  
          jQuery.notify(
            {title: "Couldn't fetch " + pgChart.type+ "'s data !", message: 'Reload the page please!', icon: 'cs-error-hexagon'},
            {type: 'danger', delay: 10000,}
          ); 
   
          // A effacer ou commenter !
          // let data = _this._getAjaxDataSample(pgChart.type); 
          // let csDashboard = new CustomDashboardChart(pgChart.canvasId, pgChart.type, data); 
        }
      });
    }
  
    // juste pour voir qqch
    _getAjaxDataSample(ctype) {
      const barChart = {
          label: "Hourly Report",
          labels: ['08', '09', '10','11'],
          data: [
              {
                  "x": "08",
                  "y": 0.5,
              },
              {
                  "x": "08",
                  "y": 1,
              },
              {
                  "x": "08",
                  "y": 0.4
              },
              {
                  "x": "08",
                  "y": 1,
              },
          ]
      };
  
      const lineChart = {
          labels: ['dt1', 'dt2', 'dt3', 'dt4', 'dt5', 'dt6', 'dt7'],
          lines: [
              {
                  label: "G1",
                  data: [60, 54, 68, 60, 63, 60, 65],
              },
              {
                  label: 'G2',
                  data: [54, 60, 50, 55, 63, 68, 65],
              }
          ],
      };
  
      const doughnutChart = {
          labels: ["Day 1", "Day 2", "Day 3"], 
          data: [ 29, 24, 23], 
      };
  
      const ajaxDataSample = {
          barChart: barChart,
          lineChart: lineChart,
          areaChart:areaChart,
          doughnutChart: doughnutChart,
          horizontalRoundedBarChart:horizontalRoundedBarChart,
          roundedBarChart:roundedBarChart,
      };
  
      return ajaxDataSample[ctype];
    }
  }
  
  
  class CustomDashboardChart {
    constructor(canvasId, chartType, ajaxData) {
      // Initialization of the page plugins
      if (typeof Chart === 'undefined') {
        console.log('Chart is undefined!');
        return;
      }
  
      if (!document.getElementById(canvasId)) {
        console.error('Canvas "'+ canvasId+'" is not in DOM!');
        return;
      }
  
      // console.log(canvasId, chartType, ajaxData);
  
      this._canvasId = canvasId;
      this._ajaxData = ajaxData;
  
      this._chart = null;
      this._initCallbackName = '';
  
      // init the chart
      switch (chartType) {
        case "barChart":
          this. _initCallbackName = "_initCustomBarChart";
          this._initCustomBarChart(ajaxData); 
          break;
        case "horizontalRoundedBarChart":
            this. _initCallbackName = "_initCustomhorizontalRoundedBarChart";
            this._initCustomhorizontalRoundedBarChart(ajaxData); 
            break;
        case "roundedBarChart":
          this. _initCallbackName = "_initCustomRoundedBarChart";
          this._initCustomRoundedBarChart(ajaxData); 
          break;
        case "lineChart":
          this. _initCallbackName = "_initCustomLineChart";
          this._initCustomLineChart(ajaxData);
          break;
          case "areaChart":
          this. _initCallbackName = "_initCustomAreaChart";
          this._initCustomAreaChart(ajaxData);
          break;
        case "doughnutChart":
          this. _initCallbackName = "_initCustomDoughnutChart";
          this._initCustomDoughnutChart(ajaxData);
          break;
        default:
          return;
          break;
      }
  
      // events
      this._initEvents();
    }
  
    /**
     * Helper function to randomly generate n "different" colors
     * @param {int} n - number of colors to have
     * @returns {Object}  { borders: Array , bgs: Array } - colors and their light version
     */
    _getRandomColors(n){
      let borders = [];
      let bgs = [];
      let color;
      const letters = '0123456789ABCDEF'.split('');
  
      for(let j=0; j<n; j++ )
      {
        color = '#'
        while (color == "#" || borders.indexOf(color) != -1) {
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
        }
  
        borders.push(color);
        bgs.push(color + "42"); // add opacity to get "light" version of the color for the background
      }
  
      return {
        borders: borders,
        bgs: bgs,
      };
    }
  
    // custom bar chart
    _initCustomBarChart(chartData){
      let colors = this._getRandomColors(chartData.data.length);
  
      const customBarChart = document.getElementById(this._canvasId).getContext('2d');
      this._customBarChart = new Chart(customBarChart, {
        type: 'bar',
        options: {
          plugins: {
            crosshair: false,
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: true,
                  lineWidth: 1,
                  color: Globals.separatorLight,
                  drawBorder: false,
                },
                ticks: {
                  // beginAtZero: true,
                  // stepSize: chartData.opt.stepSize,
                  // min: chartData.opt.min,
                  // max: chartData.opt.max,
                  padding: 20,
                  fontColor: Globals.alternate,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {display: false},
              },
            ],
          },
          legend: {
            position: 'bottom',
            labels: ChartsExtend.LegendLabels(),
          },
          tooltips: ChartsExtend.ChartTooltip(),
        },
        data: {
          labels: chartData.labels,
          datasets: [{
            // parsing: {
            //   xAxisKey: 'x',
            //   yAxisKey: 'y',
            // },
            label: chartData.label,
            data: chartData.data,
            // borderColor: Globals.primary,
            // backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
            borderColor: colors.borders,
            backgroundColor: colors.bgs, 
            borderWidth: 2,
          }]
        },
      });  
    }
  
   // custom Rounded bar chart
   _initCustomRoundedBarChart(chartData){
    //let colors = this._getRandomColors(chartData.data.length);
  
    const customRoundedBarChart = document.getElementById(this._canvasId).getContext('2d');
    this.customRoundedBarChart = new Chart(customRoundedBarChart, {
      type: 'bar',
      options: {
        cornerRadius: parseInt(Globals.borderRadiusMd),
        plugins: {
          crosshair: false,
          datalabels: {display: false},
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                lineWidth: 1,
                color: Globals.separatorLight,
                drawBorder: false,
              },
              ticks: {
                // beginAtZero: true,
                // stepSize: chartData.opt.stepSize,
                // min: chartData.opt.min,
                // max: chartData.opt.max,
                padding: 20,
                fontColor: Globals.alternate,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {display: false},
            },
          ],
        },
        legend: {
          position: 'bottom',
          labels: ChartsExtend.LegendLabels(),
        },
        tooltips: ChartsExtend.ChartTooltip(),
      },
      data: {
        labels: chartData.labels,
        datasets: [{
          // parsing: {
          //   xAxisKey: 'x',
          //   yAxisKey: 'y',
          // },
          label: chartData.label,
          data: chartData.data,
           
            borderColor: Globals.primary,
          backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
        //  borderColor: colors.borders,
         // backgroundColor: colors.bgs, 
           // borderColor: Globals.secondary,
            //backgroundColor: 'rgba(' + Globals.secondaryrgb + ',0.1)',
          borderWidth: 2,
        }]
      },
    });  
  }
  
    // custom Horizontal Rounded Bar Chart
    _initCustomhorizontalRoundedBarChart(chartData){
      let colors = this._getRandomColors(chartData.data.length);
  
      const customhorizontalRoundedBarChart = document.getElementById(this._canvasId).getContext('2d');
      this._customhorizontalRoundedBarChart = new Chart(customhorizontalRoundedBarChart, {
        type: 'horizontalBar',
        options: {
          cornerRadius: parseInt(Globals.borderRadiusMd),
          plugins: {
            crosshair: false,
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: true,
                  lineWidth: 1,
                  color: Globals.separator,
                  drawBorder: false,
                },
                ticks: {
                  // beginAtZero: true,
                  // stepSize: chartData.opt.stepSize,
                  // min: chartData.opt.min,
                  // max: chartData.opt.max,
                  padding: 20,
                  fontColor: Globals.alternate,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {display: false},
              },
            ],
          },
          legend: {
            position: 'bottom',
            labels: ChartsExtend.LegendLabels(),
          },
          tooltips: ChartsExtend.ChartTooltip(),
        },
        data: {
          labels: chartData.labels,
          datasets: [{
            // parsing: {
            //   xAxisKey: 'x',
            //   yAxisKey: 'y',
            // },
            label: chartData.label,
            data: chartData.data,
             borderColor: Globals.primary,
             backgroundColor: 'rgba(' + Globals.primaryrgb + ',0.1)',
           // borderColor: colors.borders,
           //backgroundColor: colors.bgs, 
            borderWidth: 2,
          }]
        },
      });  
    }
  
  
    // custom doughnut chart
    _initCustomDoughnutChart(chartData) {
      let colors = this._getRandomColors(chartData.data.length);
  
      const csDoughnutChart = document.getElementById(this._canvasId).getContext("2d");
      this._customDoughnutChart = new Chart(csDoughnutChart, {
        plugins: [ChartsExtend.CenterTextPlugin()],
        type: 'doughnut',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: '',
              borderColor: colors.borders, 
              backgroundColor: colors.bgs, 
              borderWidth: 2,
              data: chartData.data,
              // borderColor: [Globals.tertiary, Globals.secondary, Globals.primary],
              // backgroundColor: ['rgba(' + Globals.tertiaryrgb + ',0.1)', 'rgba(' + Globals.secondaryrgb + ',0.1)', 'rgba(' + Globals.primaryrgb + ',0.1)'],
              // data: [15, 25, 20],
            },
          ],
        },
        draw: function () {},
        options: {
          plugins: {
            datalabels: {display: false},
          },
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 80,
          title: {
            display: false,
          },
          layout: {
            padding: {
              bottom: 20,
            },
          },
          legend: {
            position: 'bottom',
            labels: ChartsExtend.LegendLabels(),
          },
          tooltips: ChartsExtend.ChartTooltip(),
        },
      });
    }
  
    // custom line chart
    _initCustomLineChart(chartData) {
      if (document.getElementById('customLineChart')) {
        //random colors fo the chart
        let colors = this._getRandomColors(chartData.lines.length);
  
        // define dataset
        let datasets = [];
        chartData.lines.forEach(function(line, i){
          datasets.push({
            // label: 'G1',
            // data: [60, 54, 68, 60, 63, 60, 65],
            ...line,
            borderColor: colors.borders[i],
            pointBackgroundColor: colors.bgs[i],
            pointBorderColor: colors.borders[i],
            pointHoverBackgroundColor: colors.bgs[i],
            pointHoverBorderColor: colors.borders[i],
            borderWidth: 2,
            pointRadius: 3,
            pointBorderWidth: 3,
            pointHoverRadius: 4,
            fill: false,
          });
        });
  
        // init now the chart
        const cslineChart = document.getElementById(this._canvasId).getContext('2d');
        this._customLineChart = new Chart(cslineChart, {
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
                  gridLines: {
                    display: true, 
                    lineWidth: 1, 
                    color: Globals.separatorLight, 
                    drawBorder: false
                  },
                  ticks: {
                    // beginAtZero: true, 
                    // stepSize: 5, 
                    // min: 50, 
                    // max: 70, 
                    padding: 20, 
                    fontColor: Globals.alternate
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {display: false}, 
                  ticks: {fontColor: Globals.alternate}
                }
              ],
            },
            // legend: {display: false},
            legend: {
              position: 'bottom',
              labels: ChartsExtend.LegendLabels(),
            },
            tooltips: ChartsExtend.ChartTooltipForCrosshair(),
          },
          data: {
            labels: chartData.labels,
            datasets: datasets,
          },
        });
      }
    }
  
   // custom area chart
   _initCustomAreaChart(chartData) {
    if (document.getElementById('customAreaChart')) {
      //random colors fo the chart
      let colors = this._getRandomColors(chartData.lines.length);
  
      // define dataset
      let datasets = [];
      chartData.lines.forEach(function(line, i){
        datasets.push({
          // label: 'G1',
          // data: [60, 54, 68, 60, 63, 60, 65],
          ...line,
        //  borderColor: colors.borders[i],
          borderColor: Globals.primary,
          pointBackgroundColor: colors.bgs[i],
          pointBorderColor: colors.borders[i],
          pointHoverBackgroundColor: colors.bgs[i],
          pointHoverBorderColor: colors.borders[i],
          borderWidth: 2,
          pointRadius: 3,
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          fill: false,
        });
      });
  
      // init now the chart
      const csareaChart = document.getElementById(this._canvasId).getContext('2d');
      this._customAreaChart = new Chart(csareaChart, {
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
                gridLines: {
                  display: true, 
                  lineWidth: 1, 
                  color: Globals.separatorLight, 
                  drawBorder: false
                },
                ticks: {
                  // beginAtZero: true, 
                  // stepSize: 5, 
                  // min: 50, 
                  // max: 70, 
                  padding: 20, 
                  fontColor: Globals.alternate
                },
              },
            ],
            xAxes: [
              {
                gridLines: {display: false}, 
                ticks: {fontColor: Globals.alternate}
              }
            ],
          },
          // legend: {display: false},
          legend: {
            position: 'bottom',
            labels: ChartsExtend.LegendLabels(),
          },
          tooltips: ChartsExtend.ChartTooltipForCrosshair(),
        },
        data: {
          labels: chartData.labels,
          datasets: datasets,
        },
      });
    }
  }
  
    _initEvents() {
      // Listening for color change events to update charts
      document.documentElement.addEventListener(Globals.colorAttributeChange, (event) => {
        this._chart && this._chart.destroy();
        this[this._initCallbackName](this._ajaxData);
  
        // this._customLineChart && this._customLineChart.destroy();
        // this._initCustomLineChart();
  
        // this._customDoughnutChart && this._customDoughnutChart.destroy();
        // this._initCustomDoughnutChart();
  
        // this._customBarChart && this._customBarChart.destroy();
        // this._initCustomBarChart();
      });
    }
  
  }