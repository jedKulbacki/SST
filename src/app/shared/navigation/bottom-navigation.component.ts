import {Component, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {RouterExtensions} from "@nativescript/angular";

@Component({
    selector: "app-bottom-navigation",
    moduleId: module.id,
    templateUrl: "./bottom-navigation.component.html"
})
export class BottomNavigationComponent{
    constructor(private router: Router,
		private routerExtensions: RouterExtensions,
        private zone: NgZone) {}
    
        onNavItemTap(navItemRoute: string): void {
            this.zone.run(() => {this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "fade"
                },
                clearHistory: true
            });});
        }
    
}