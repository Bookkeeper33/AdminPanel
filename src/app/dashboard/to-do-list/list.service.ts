import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ListService {
    toDoList = [
        "Fix error in the header",
        "Set up a meet up",
        "Create changelog",
        "Push CEO from the cliff",
        "Quit the job",
    ];

    getToDos() {
        return this.toDoList;
    }
}
