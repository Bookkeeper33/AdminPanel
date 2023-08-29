import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { UserMessage } from "../../shared/user-message.interface";

@Injectable({
    providedIn: "root",
})
export class FeedService {
    constructor(private http: HttpClient) {}

    getUserMessages(): Observable<any> {
        return this.http.get("https://randomuser.me/api/?results=10").pipe(
            retry(3),
            catchError((error) => {
                console.error("An error occurred:", error);
                return throwError("Something went wrong");
            })
        );
    }
}
