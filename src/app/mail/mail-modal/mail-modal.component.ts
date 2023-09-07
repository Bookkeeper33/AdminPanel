import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MailService } from "../mail.service";
import { OutsideDirective } from "src/app/shared/directives/outside.directive";

@Component({
    selector: "app-mail-modal",
    templateUrl: "./mail-modal.component.html",
    styleUrls: ["./mail-modal.component.css"],
})
export class MailModalComponent {
    constructor(private mailService: MailService) {}

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.onResetMail(form);
        this.mailService.toggleModal(false);
    }

    onResetMail(form: NgForm) {
        form.reset();
    }

    onCloseModal() {
        this.mailService.toggleModal(false);
    }
}
