import { Component } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

@Component({
    selector: "app-scheduler",
    templateUrl: "./scheduler.component.html",
    styleUrls: ["./scheduler.component.css"],
})
export class SchedulerComponent {
    events: any[] = [
        {
            title: "Meeting",
            date: new Date(),
        },
    ];

    calendarOptions: CalendarOptions = {
        initialView: "dayGridMonth",
        themeSystem: "bootstrap5",
        height: 500,
        headerToolbar: {
            left: "prev,next",
            center: "title",
            right: "",
        },
        buttonIcons: {
            prev: "arrow-left-square-fill",
            next: "arrow-right-square-fill",
        },
        plugins: [dayGridPlugin, bootstrap5Plugin, interactionPlugin],
        selectable: true,
        editable: true,
        dayMaxEventRows: true,
        events: this.events,
        dateClick: this.handleDateClick.bind(this),
    };

    handleDateClick(arg: any) {
        const title = prompt("Enter event title:");
        console.log(arg.dateStr);
        if (title) {
            this.events = [
                ...this.events,
                {
                    title,
                    date: arg.dateStr,
                    color: `rgb(${String(this.randomColor())},${String(
                        this.randomColor()
                    )}, ${String(this.randomColor())}`,
                },
            ];
            this.calendarOptions.events = this.events; // Update calendarOptions.events
        }
    }

    private randomColor() {
        return Math.floor(Math.random() * 256);
    }
}
