import { Component, OnInit, ViewChild } from "@angular/core";
import {Stock} from "../shared/stock/stock.model";

@Component({
    selector: "dsh-list",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
    providers: []
})
export class DashboardComponent implements OnInit {
    stockList: Array<Stock> = [];
    ngOnInit(): void {
        this.stockList = new Array<Stock>(
            { id: 'Int', name: "Intel" },
            { id: 'Nvd', name: "Nvidia"})
    }
    
}