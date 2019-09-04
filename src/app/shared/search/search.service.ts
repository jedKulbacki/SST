import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
    findStockCode(code: string): Observable<any>{
        let answer = "found";
        return new Observable;
    } 
}