import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";

@Component({
    selector: "app-to-do-list",
    templateUrl: "./to-do-list.component.html",
    styleUrls: ["./to-do-list.component.css"],
})
export class ToDoListComponent implements OnInit {
    tasks: string[] | undefined;
    newTask: string = "";

    constructor(private listService: ListService) {}

    ngOnInit(): void {
        this.tasks = this.listService.getToDos();
    }

    addTask() {
        if (this.newTask?.trim() !== "") {
            this.tasks?.push(this.newTask);
            this.newTask = "";
        }
    }

    removeTask(index: number) {
        this.tasks?.splice(index, 1);
    }
}
