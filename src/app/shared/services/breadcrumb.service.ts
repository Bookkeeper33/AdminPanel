import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class BreadcrumbService {
    private titleSubject = new BehaviorSubject<string>("Dashboard");
    currentTitle$ = this.titleSubject.asObservable();

    setTitle(title: string) {
        this.titleSubject.next(title);
    }
}
