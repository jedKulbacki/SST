import { Component, Input } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView} from '@nstudio/nativescript-cardview';
import { Stock } from '~/app/shared/stock/stock.model';
import { StockService } from '~/app/shared/stock/stock.service';
registerElement('CardView', () => CardView);

@Component({
    selector: 'stock-card',
    templateUrl: 'stock-card.component.html',
    styleUrls: ['stock-card.component.css']
})
export class StockCardComponent {
    @Input() stock: Stock;
    @Input() showAddBtn: boolean;

    constructor(private stockService: StockService) {

    }

    trackStock() {
        this.stockService.addStockToTrack(this.stock);
        console.log('stock tracked ' + this.stock.symbol);
    }
}