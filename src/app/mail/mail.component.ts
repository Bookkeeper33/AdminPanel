import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-mail",
    templateUrl: "./mail.component.html",
    styleUrls: ["./mail.component.css"],
})
export class MailComponent implements OnInit {
    constructor(
        private breadCrumb: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.breadCrumb.setTitle("Mail");
    
    }
}
