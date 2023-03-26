import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams }  from "@angular/common/http";
import { Stock } from "../stock/stock.model";
import { Http } from '@nativescript/core'

@Injectable()
export class SearchService {

    stockAPIKey = "Z0VKIIEIEO14BH4A";
    quoteEndpoint = "https://www.alphavantage.co/query" //?function=GLOBAL_QUOTE&symbol=MSFT&apikey=Z0VKIIEIEO14BH4A";

    constructor(private http: HttpClient){

    }

    findStockQuote(stockSymbol: string): Promise<any>{
        let parameters = new HttpParams()
            .set("function", "GLOBAL_QUOTE")
            .set("symbol", stockSymbol)
            .set("apikey", this.stockAPIKey);
        console.log(parameters.toString());
        return Http.getJSON("https://www.alphavantage.co/query?" + parameters.toString());
    } 

    getDemoData(): Observable<any>{
        let parameters = new HttpParams()
            .set("function", "GLOBAL_QUOTE")
            .set("symbol", "MSFT")
            .set("apikey", this.stockAPIKey);
        return this.http.get(this.quoteEndpoint, {params: parameters, responseType: 'json'});
    }

    getJsonData(){
        return Http.getJSON("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=Z0VKIIEIEO14BH4A");
    }
}