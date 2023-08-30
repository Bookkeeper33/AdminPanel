import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.css"],
})
export class BreadcrumbComponent {

    constructor(private route: ActivatedRoute) {}
}
