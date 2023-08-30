import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SidebarToggleService } from "../../../shared/services/toggle.service";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit, OnDestroy {
    sidebarOpen = false;
    private sidebarSubscription!: Subscription;

    constructor(private toggleService: SidebarToggleService) {}

    ngOnInit(): void {
        this.sidebarSubscription = this.toggleService.sidebarToggle$.subscribe(
            (toggled) => {
                this.sidebarOpen = toggled;
            }
        );
    }

    ngOnDestroy(): void {
        this.sidebarSubscription.unsubscribe();
    }
}
