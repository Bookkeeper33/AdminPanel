import { DOCUMENT } from "@angular/common";
import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    Output,
} from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

@Directive({
    selector: "[clickOutside]",
})
export class OutsideDirective implements AfterViewInit, OnDestroy {
    @Output() clickedOutside = new EventEmitter<void>();
    documentClickSub: Subscription | undefined;

    constructor(
        private element: ElementRef,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngAfterViewInit(): void {
        this.documentClickSub = fromEvent(this.document, "click")
            .pipe(
                filter((event) => {
                    return !this.isInside(event?.target as HTMLElement);
                })
            )
            .subscribe(() => {
                this.clickedOutside.emit();
            });
    }

    isInside(elementToCheck: HTMLElement): boolean {
        return (
            elementToCheck === this.element.nativeElement ||
            this.element.nativeElement.contains(elementToCheck)
        );
    }

    ngOnDestroy(): void {
        this.documentClickSub?.unsubscribe();
    }
}
