import { Component, OnInit } from "@angular/core";
import { FeedService } from "../services/feed.service";
import { UserMessage } from "../../shared/interfaces/user-message.interface";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: "app-feed",
    templateUrl: "./feed.component.html",
    styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
    messages: UserMessage[] | undefined;
    private unsubscribe$: Subject<void> = new Subject<void>();

    constructor(private feedService: FeedService) {}

    ngOnInit(): void {
        this.feedService
            .getUserMessages()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => {
                this.messages = data.results.map((item: any) => {
                    return {
                        name: item.name.first + " " + item.name.last,
                        message:
                            "Lorem Pipsum and some text message like in real feed",
                        picture: item.picture.thumbnail,
                    };
                });
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
