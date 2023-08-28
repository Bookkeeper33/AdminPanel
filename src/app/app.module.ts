import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { NgChartsModule } from "ng2-charts";
import { FullCalendarModule } from "@fullcalendar/angular";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OutsideDirective } from "./shared/outside.directive";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { ChartComponent } from "./dashboard/chart/chart.component";
import { FeedComponent } from "./feed/feed.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        OutsideDirective,
        ToDoListComponent,
        ChartComponent,
        FeedComponent,
        SchedulerComponent,
        FooterComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgChartsModule,
        FormsModule,
        HttpClientModule,
        FullCalendarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
