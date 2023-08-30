import { Component, OnDestroy, OnInit } from "@angular/core";
import { SidebarToggleService } from "./shared/services/toggle.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
    isToggledSidebar: boolean | undefined;
    private sideBarSubscription!: Subscription;

    constructor(private sidebarService: SidebarToggleService) {}

    ngOnInit(): void {
        this.sideBarSubscription = this.sidebarService.sidebarToggle$.subscribe(
            (toggled) => {
                this.isToggledSidebar = toggled;
            }
        );
    }

    ngOnDestroy(): void {
        this.sideBarSubscription.unsubscribe();
    }
}
