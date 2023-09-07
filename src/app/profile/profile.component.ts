import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
    constructor(private breadCrumb: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadCrumb.setTitle("Profile");
    }
}
