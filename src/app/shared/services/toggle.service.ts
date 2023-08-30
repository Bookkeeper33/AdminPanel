import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SidebarToggleService {
    private sidebarToggledSubject = new BehaviorSubject<boolean>(false);
    sidebarToggle$ = this.sidebarToggledSubject.asObservable();

    toggleSidebar(): void {
        this.sidebarToggledSubject.next(!this.sidebarToggledSubject.value);
    }
}
