import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetch {
    private ws;
  constructor(){
    console.log("MESSAGE_RECIVED");
    this.ws = new WebSocket("ws://localhost:8080")
  }

  public data = new Observable((obser) => {
    this.ws.onmessage = (e) => {
      obser.next(e.data)
     }
  });

  sendData(params){
    console.log("SEND_DATA");
    this.ws.send(params)
  }
}
