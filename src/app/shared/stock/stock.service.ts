import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams }  from "@angular/common/http";
import { Stock } from "../stock/stock.model";

@Injectable()
export class StockService {
    trackStockList: Array<Stock> = [];

    addStockToTrack(stockToAdd: Stock) {
        this.trackStockList.push(stockToAdd);
    }

    getTrackedStocks() {
        return this.trackStockList;
    }

    clearAllStocks() {
        this.trackStockList = [];
    }
}