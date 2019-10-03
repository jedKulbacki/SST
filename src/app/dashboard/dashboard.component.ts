import { Component, OnInit, ViewChild } from "@angular/core";
import {Stock} from "../shared/stock/stock.model";
import { StockService } from "../shared/stock/stock.service";

@Component({
    selector: "dsh-list",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
    providers: []
})
export class DashboardComponent implements OnInit {
    stockList: Array<Stock> = [];
    isAdd: boolean = false;

    constructor(private stockService: StockService) {
        this.stockList = this.stockService.getTrackedStocks();
        console.log("view constructed " + this.stockList.length);
    }
    ngOnInit(): void {
        this.stockList = this.stockService.getTrackedStocks();
        console.log("view init " + this.stockList.length);
    }
    ngViewEnter(): void {
        this.stockList = this.stockService.getTrackedStocks();
        console.log("view entered " + this.stockList.length);
    }
    
}