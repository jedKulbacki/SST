import { JsonpClientBackend } from "@angular/common/http";

export class Stock {

  public symbol:string;
  public price:number;
  constructor(json: any) {
    console.log('this is my json ' + json['Global Quote']['01. symbol']);
    this.symbol = json['Global Quote']['01. symbol'];
    this. price = json['Global Quote']['05. price'];
  }
  
}