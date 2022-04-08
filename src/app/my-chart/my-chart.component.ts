import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from "node_modules/chart.js";
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor(
    private chart : ServicesService
  ) { }

  get meses(){
    return this.chart.meses();
    
  }
  ngOnInit() {
    
    Chart.register(...registerables);

    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
              label: 'Sales By Month for',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


 
  }

}
