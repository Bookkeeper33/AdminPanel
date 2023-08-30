import { Component } from "@angular/core";

@Component({
    selector: "app-navbar-mail",
    templateUrl: "./navbar-mail.component.html",
    styleUrls: ["./navbar-mail.component.css"],
})
export class NavbarMailComponent {
    labels = [
        {
            labelName: "friend",
            color: "#209e91",
        },
        {
            labelName: "family",
            color: "#90b900",
        },
        {
            labelName: "work",
            color: "#e85656",
        },
        {
            labelName: "study",
            color: "#dfb81c",
        },
    ];
    categories: string[] = [
        "Inbox",
        "Sent mail",
        "Important",
        "Draft",
        "Spam",
        "Trash",
    ];

    onAddLabel(): void {
        const label = prompt("Write a label name...");
        if (!label) {
            return;
        }

        const labelColor = prompt(
            "Write your color....(can be hex, named color or rgb"
        );
        if (!labelColor) {
            return;
        }

        this.labels.push({ labelName: label, color: labelColor });
    }
}
