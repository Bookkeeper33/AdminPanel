import { Component, OnDestroy, OnInit } from "@angular/core";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";
import { MailService } from "./mail.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-mail",
    templateUrl: "./mail.component.html",
    styleUrls: ["./mail.component.css"],
})
export class MailComponent implements OnInit, OnDestroy {
    isOpenedModal = false;
    modalSub: Subscription | undefined;
    constructor(
        private breadCrumb: BreadcrumbService,
        private mailService: MailService
    ) {}

    ngOnInit(): void {
        this.breadCrumb.setTitle("Mail");
        this.modalSub = this.mailService.openModal$.subscribe((open) => {
            this.isOpenedModal = open;
        });
    }



    ngOnDestroy(): void {
        this.modalSub?.unsubscribe();
    }
}
