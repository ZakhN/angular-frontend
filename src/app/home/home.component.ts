import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users$: Object;

  constructor(private data: DataService) {
   }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

    this.chart = new Chart('line', {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],

        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
