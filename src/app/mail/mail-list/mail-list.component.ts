import { Component } from "@angular/core";
import { Mail } from "../interfaces/mail.interface";

@Component({
    selector: "app-mail-list",
    templateUrl: "./mail-list.component.html",
    styleUrls: ["./mail-list.component.css"],
})
export class MailListComponent {
    letters: Mail[] = [
        {
            id: 1,
            author: "John Doe",
            img: "../../assets/gosling.jpg",
            subject: "Hello",
            body: "This is a test message.",
            date: new Date(),
        },
        {
            id: 2,
            author: "Jane Doe",
            img: "../../assets/gosling.jpg",
            subject: "Hi",
            body: "How are you?",
            date: new Date(),
        },
        {
            id: 3,
            author: "Bob Smith",
            img: "../../assets/gosling.jpg",
            subject: "Important announcement",
            body: "Please read this important announcement.",
            date: new Date(),
        },
    ];
}
