import { Component, OnDestroy, OnInit } from "@angular/core";

import { BreadcrumbService } from "../../services/breadcrumb.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.css"],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
    breadcrumbTitle: string | undefined;
    subscription!: Subscription;

    constructor(private breadCrumb: BreadcrumbService) {}

    ngOnInit(): void {
        this.subscription = this.breadCrumb.currentTitle$.subscribe((title) => {
            this.breadcrumbTitle = title;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
