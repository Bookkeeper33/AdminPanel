import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgChartsModule } from "ng2-charts";
import { FullCalendarModule } from "@fullcalendar/angular";

import { DashboardComponent } from "./dashboard.component";
import { ChartComponent } from "./chart/chart.component";
import { FeedComponent } from "./feed/feed.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    declarations: [
        DashboardComponent,
        ChartComponent,
        FeedComponent,
        SchedulerComponent,
        ToDoListComponent,
    ],
    imports: [
        CommonModule,
        NgChartsModule,
        FullCalendarModule,
        FormsModule,
        DashboardRoutingModule,
    ],
})
export class DashboardModule {}
