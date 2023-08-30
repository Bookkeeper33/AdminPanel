import { Component } from "@angular/core";
import { SidebarToggleService } from "../../../shared/services/toggle.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    menuOpened: boolean = false;

    constructor(private toggleService: SidebarToggleService) {}

    toggleSidebar() {
        this.toggleService.toggleSidebar();
    }

    toggleDropDown(): void {
        this.menuOpened = !this.menuOpened;
    }

    onClickedOutside(): void {
        this.menuOpened = false;
    }
}
