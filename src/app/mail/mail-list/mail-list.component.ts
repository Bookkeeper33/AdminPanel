import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Mail } from "../interfaces/mail.interface";
import { MailService } from "../mail.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-mail-list",
    templateUrl: "./mail-list.component.html",
    styleUrls: ["./mail-list.component.css"],
})
export class MailListComponent implements OnInit, AfterViewInit, OnDestroy {
    mails: Mail[] = [];
    mailsSubscription!: Subscription;

    constructor(private mailService: MailService) {}

    ngOnInit(): void {
        this.mails = this.mailService.getMails();
    }

    ngAfterViewInit(): void {
        this.mailsSubscription =
            this.mailService.selectedCategorySubject.subscribe((category) => {
                if (category === "Inbox") {
                    this.mails = this.mailService.getMails();
                } else {
                    this.mails = this.mailService.getMailsByCategory(category);
                }
            });
    }

    ngOnDestroy(): void {
        this.mailsSubscription.unsubscribe();
    }
}
