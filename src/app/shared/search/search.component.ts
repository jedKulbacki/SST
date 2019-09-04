import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
    selector: "search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    providers: []
})
export class SearchComponent{
    onTextChange(args){
        Observable.create()
    }
}