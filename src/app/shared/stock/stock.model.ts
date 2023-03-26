import { JsonpClientBackend } from "@angular/common/http";

/*
JSON value returned from api reference.
{
    "Global Quote": {
        "01. symbol": "MSFT",
        "02. open": "137.8500",
        "03. high": "138.4200",
        "04. low": "136.8700",
        "05. price": "137.5200",
        "06. volume": "24854822",
        "07. latest trading day": "2019-09-12",
        "08. previous close": "136.1200",
        "09. change": "1.4000",
        "10. change percent": "1.0285%"
    }
}
*/
export class Stock {

  public symbol: string;
  public price: number;
  public previous: number;
  public changePercent: string;
  constructor(json: any) {
    if(!json) {
      this.symbol = "F";
      this.price = 11.5;
      this.previous = 11.42;
      this.changePercent = "0.78%";
      return;
    }
    this.symbol = json['Global Quote']['01. symbol'];
    this.price = Number(json['Global Quote']['05. price']);
    this.previous = Number(json['Global Quote']['08. previous close']);
    this.changePercent = json['Global Quote']['10. change percent'];
  }
  
}