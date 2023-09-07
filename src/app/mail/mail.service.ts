import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

import { mailsMock, categoriesMock } from "./mock/mail-data.mock";
import { Mail } from "./interfaces/mail.interface";
import { Label } from "./interfaces/label.interface";

@Injectable({ providedIn: "root" })
export class MailService {
    private categories = categoriesMock;
    private mails: Mail[] = mailsMock;
    openModal$ = new BehaviorSubject<boolean>(false);

    toggleModal(open: boolean) {
        this.openModal$.next(open);
    }

    getMails(category?: string): Observable<Mail[]> {
        if (category) {
            return this.getMailsByCategory(category);
        }
        return of(this.mails);
    }

    getMail(id: number): Observable<Mail | undefined> {
        const mail = this.mails.find((mail) => mail.id === id);
        return of(mail);
    }

    getLabels(): Label[] {
        return this.mails.map((mail) => mail.label);
    }

    getCategories() {
        return this.categories;
    }

    deleteMails() {
        this.mails = this.mails.filter((mail) => !mail.isChecked);
    }

    checkEmails(mailId: number) {
        const foundMail = this.mails.find((mail) => mail.id === mailId);

        if (foundMail) {
            foundMail.isChecked = !foundMail.isChecked;
        }
    }

    moveTo(newCategory: string) {
        this.mails = this.mails.map((mail) => {
            if (mail.isChecked) {
                this.checkEmails(mail.id);
                return { ...mail, category: newCategory };
            }

            return mail;
        });
    }

    private getMailsByCategory(category: string) {
        return of(this.mails.filter((mail) => mail.category === category));
    }
}
