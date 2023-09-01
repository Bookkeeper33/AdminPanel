import { Component, OnInit } from "@angular/core";
import { MailService } from "../mail.service";
import { Label } from "../interfaces/label.interface";

@Component({
    selector: "app-navbar-mail",
    templateUrl: "./navbar-mail.component.html",
    styleUrls: ["./navbar-mail.component.css"],
})
export class NavbarMailComponent implements OnInit {
    labels: Label[] = [];
    categories: string[] = [];
    selectedCategory: string = "Inbox";

    constructor(private mailService: MailService) {}

    ngOnInit(): void {
        this.categories = this.mailService.getCategories();
        this.labels = this.mailService.getLabels();
    }

    onCategorySelected(category: string) {
        this.selectedCategory = category;
        this.mailService.selectCategory(category);
    }

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
