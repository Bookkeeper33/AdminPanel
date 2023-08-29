import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { NgChartsModule } from "ng2-charts";
import { FullCalendarModule } from "@fullcalendar/angular";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OutsideDirective } from "./shared/outside.directive";
import { ToDoListComponent } from "./dashboard/to-do-list/to-do-list.component";
import { ChartComponent } from "./dashboard/chart/chart.component";
import { FeedComponent } from "./dashboard/feed/feed.component";
import { SchedulerComponent } from "./dashboard/scheduler/scheduler.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { MailComponent } from "./components/mail/mail.component";
import { MailListComponent } from './components/mail/mail-list/mail-list.component';
import { NavbarMailComponent } from './components/mail/navbar-mail/navbar-mail.component';

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
        MailComponent,
        MailListComponent,
        NavbarMailComponent,
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
