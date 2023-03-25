import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "app-bottom-navigation",
    moduleId: module.id,
    templateUrl: "./bottom-navigation.component.html"
})
export class BottomNavigationComponent{
    constructor(private router: Router,
		private routerExtensions: RouterExtensions) {}
    
        onNavItemTap(navItemRoute: string): void {
            this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "fade"
                },
                clearHistory: true
            });
        }
    
}