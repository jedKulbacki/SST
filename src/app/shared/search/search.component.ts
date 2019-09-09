import { Component, OnInit} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
    selector: "search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    providers: []
})
export class SearchComponent{

    searchUpdate: Subject<string>;
    constructor(){
        this.searchUpdate = new Subject<string>();
        
    }
    
    ngAfterViewInit(){
        this.searchUpdate.pipe(
            debounceTime(1500),
            distinctUntilChanged())
            .subscribe(value => {
                console.log('you got bounced');
                this.onSubmit(value);
            });
    }

    onSubmit(args){
        let searchBar = <SearchBar>args.object;
        console.log('submitted ', searchBar.text);
        searchBar.dismissSoftInput();
    }

    onClear(args){
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.dismissSoftInput();
    }
}