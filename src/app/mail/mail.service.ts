import { Injectable } from "@angular/core";

import { Mail } from "./interfaces/mail.interface";
import { Label } from "./interfaces/label.interface";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class MailService {
    selectedCategorySubject = new Subject<string>();

    private categories = [
        "Inbox",
        "Sent mail",
        "Important",
        "Draft",
        "Spam",
        "Trash",
    ];
    private mails: Mail[] = [
        {
            id: 1,
            category: "Inbox",
            label: {
                labelName: "family",
                color: "#90b900",
            },
            author: "John Doe",
            img: "../../assets/gosling.jpg",
            subject: "Hello",
            body: "This is a test message.",
            date: new Date(),
        },
        {
            id: 2,
            category: "Draft",
            label: {
                labelName: "friend",
                color: "#209e91",
            },
            author: "Jane Doe",
            img: "../../assets/gosling.jpg",
            subject: "Hi",
            body: "How are you?",
            date: new Date(),
        },
        {
            id: 3,
            category: "Spam",
            label: {
                labelName: "work",
                color: "#e85656",
            },
            author: "Bob Smith",
            img: "../../assets/gosling.jpg",
            subject: "Important announcement",
            body: "Please read this important announcement.",
            date: new Date(),
        },
        {
            id: 4,
            category: "Sent mail",
            label: {
                labelName: "study",
                color: "#dfb81c",
            },
            author: "Nikita Gedenidze",
            img: "../../assets/gosling.jpg",
            subject: "Wanna study JS???",
            body: "Please read this annotation and follow the course instruction.",
            date: new Date(),
        },
    ];

    getMails() {
        return this.mails;
    }

    getLabels(): Label[] {
        return this.mails.map((mail) => mail.label);
    }

    getCategories() {
        return this.categories;
    }

    getMailsByCategory(category: string) {
        return this.mails.filter((mail) => mail.category === category);
    }

    selectCategory(category: string) {
        this.selectedCategorySubject.next(category);
    }
}
