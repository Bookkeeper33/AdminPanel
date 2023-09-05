import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, switchMap } from "rxjs";
import { MailService } from "../mail.service";
import { Mail } from "../interfaces/mail.interface";

@Component({
    selector: "app-mail-detail",
    templateUrl: "./mail-detail.component.html",
    styleUrls: ["./mail-detail.component.css"],
})
export class MailDetailComponent implements OnInit {
    mail$!: Observable<Mail | undefined>;
    category: string = "Inbox";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mailService: MailService
    ) {}

    ngOnInit(): void {
        this.mail$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const mailId = +params.get("id")!;
                this.category = params.get("category")!;
                return this.mailService.getMail(mailId!);
            })
        );
    }

    onNavigateBack() {
        this.router.navigate(["mail", this.category]);
    }
}
