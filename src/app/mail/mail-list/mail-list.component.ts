import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { Mail } from "../interfaces/mail.interface";
import { MailService } from "../mail.service";

@Component({
    selector: "app-mail-list",
    templateUrl: "./mail-list.component.html",
    styleUrls: ["./mail-list.component.css"],
})
export class MailListComponent implements OnInit, OnDestroy {
    mails$!: Observable<Mail[]> | undefined;
    category: string = "";

    private paramMapSubscription!: Subscription;

    constructor(
        private route: ActivatedRoute,
        private mailService: MailService
    ) {}

    ngOnInit(): void {
        this.paramMapSubscription = this.route.paramMap.subscribe(
            (params: ParamMap) => {
                this.category = params.get("category")!;
                this.loadMails(this.category);
            }
        );
    }

    onDeleteMails() {
        this.mailService.deleteMails();
        this.loadMails(this.category);
    
    }

    onMailChecked(mailId: number) {
        this.mailService.checkEmails(mailId);
    }

    onPrevent(event: Event) {
        this.preventPropagation(event);
    }

    private loadMails(category = "Inbox") {
        if (category === "Inbox") {
            this.mails$ = this.mailService.getMails();
        } else {
            this.mails$ = this.mailService.getMails(category);
        }
    }

    private preventPropagation(event: Event) {
        event.stopPropagation();
    }

    ngOnDestroy(): void {
        this.paramMapSubscription.unsubscribe();
    }
}
