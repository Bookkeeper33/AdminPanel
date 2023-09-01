import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    constructor(private breadCrumb: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadCrumb.setTitle("Dashboard");
    }
}
