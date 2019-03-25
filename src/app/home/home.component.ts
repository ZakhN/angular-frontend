import { Component, OnInit } from '@angular/core';
import { DataFetch } from '../dataFetch.service';
import { ViewChild } from '@angular/core'
import { ChartsModule, BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  labels =  [moment().format('LT')];
  chartData = [
    {
      label: '1st Year',
      data: []
    },
  ];
  colors = [
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  //private text = moment.unix(i.event.creation_time).format("HH:mm");
  private words;
  private recivedData;
  constructor(private dataFetchService: DataFetch) {
  }

  connect(){
    console.log("connected");
    let observer = {
      next:(i) => {
        console.log("EVENT-------", i);
        let ga = JSON.parse(i);
        console.log("TIME------>", moment.unix(ga.event.creation_time).format("HH") + '.' + moment.unix(ga.event.creation_time).format("mm"));
        this.chartData[0].data.push(parseFloat(moment.unix(ga.event.creation_time).format("HH")+ '.' + moment.unix(ga.event.creation_time).format("mm:ss")))
        this.chart.ngOnChanges({});
        console.log(this.chartData[0].data);
      }
    }
    this.dataFetchService.data.subscribe(observer)
  }

  send(words: string) {
    this.dataFetchService.sendData(words)
  }

//`"tag":"tag1","value":"value1"`
  ngOnInit() {

  }
}
