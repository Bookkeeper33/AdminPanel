import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MailService } from "../mail.service";
import { Label } from "../interfaces/label.interface";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: "app-navbar-mail",
    templateUrl: "./navbar-mail.component.html",
    styleUrls: ["./navbar-mail.component.css"],
})
export class NavbarMailComponent implements OnInit {
    labels: Label[] = [];
    categories: string[] = [];
    isModalOpened: boolean | undefined;
    modalSub: Subscription | undefined;

    constructor(private router: Router, private mailService: MailService) {}

    ngOnInit(): void {
        this.categories = this.mailService.getCategories();
        this.labels = this.mailService.getLabels();

        this.modalSub = this.mailService.openModal$.subscribe((open) => {
            this.isModalOpened = open;
        });
    }

    toggleModal() {
        this.mailService.toggleModal(!this.isModalOpened);
    }

    onCategorySelected(category: string) {
        this.router.navigate(["mail", category]);
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
