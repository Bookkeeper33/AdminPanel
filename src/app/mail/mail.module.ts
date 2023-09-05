import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MailComponent } from "./mail.component";
import { MailListComponent } from "./mail-list/mail-list.component";
import { NavbarMailComponent } from "./navbar-mail/navbar-mail.component";
import { MailRoutingModule } from "./mail-routing.module";
import { MailDetailComponent } from "./mail-detail/mail-detail.component";

@NgModule({
    declarations: [
        MailComponent,
        MailListComponent,
        NavbarMailComponent,
        MailDetailComponent,
    ],
    imports: [CommonModule, MailRoutingModule],
})
export class MailModule {}
