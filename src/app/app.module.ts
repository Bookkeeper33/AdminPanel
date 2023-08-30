import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MailModule } from "./mail/mail.module";

import { AppComponent } from "./app.component";
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [AppComponent, BreadcrumbComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        DashboardModule,
        MailModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
