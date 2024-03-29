import { Component, OnInit, NgZone} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { SearchBar } from "@nativescript/core";
import { SearchService } from "./search.service";
import { Stock } from "../stock/stock.model";
import {StockCardComponent} from "../../cards/stock-card/stock-card.component";

@Component({
    selector: "search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    providers: []
})
export class SearchComponent{

    searchUpdate: Subject<string>;
    stockToAdd: Stock;
    isStockFound: boolean;
    isAdd: boolean;
    constructor(private searchService: SearchService, private zone: NgZone){
        this.searchUpdate = new Subject<string>();
        this.isStockFound = false;
        this.isAdd = true;
    }
    
    ngAfterViewInit(){
        this.searchUpdate.pipe(
            debounceTime(1500),
            distinctUntilChanged())
            .subscribe(value => {
                console.log('you got bounced');
                //Change this to be a soft sumbit where it doesn't dismiss the keyboard.
                this.onSoftSubmit(value);
            });
    }

    onSoftSubmit(args){
        let searchBar = <SearchBar>args.object;
        console.log('soft submitted ', searchBar.text);
        this.searchService.findStockQuote(searchBar.text)
            .then(result => {
                this.stockToAdd = new Stock(result);
                this.zone.run(() => {
                    this.isStockFound = true;
                });
                
            });
    }

    onSubmit(args){
        let searchBar = <SearchBar>args.object;
        console.log('submitted ', searchBar.text);
        this.onSoftSubmit(args);
        searchBar.dismissSoftInput();
    }

    onClear(args){
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.dismissSoftInput();
    }
}