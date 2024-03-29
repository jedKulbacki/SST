import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StockDetailComponent } from "./shared/stock/stock-detial.component";
import { BottomNavigationComponent } from "./shared/navigation/bottom-navigation.component";
import { SearchComponent } from "./shared/search/search.component";
import { StockCardComponent } from "./cards/stock-card/stock-card.component";

// Uncomment and add to NgModule imports if you need to use two-way binding

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { SearchService } from "./shared/search/search.service";
import { StockService } from "./shared/stock/stock.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        StockDetailComponent,
        DashboardComponent,
        BottomNavigationComponent,
        SearchComponent,
        StockCardComponent
    ],
    providers: [
        SearchService,
        StockService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
