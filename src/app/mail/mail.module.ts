import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MailComponent } from "./mail.component";
import { MailListComponent } from "./mail-list/mail-list.component";
import { NavbarMailComponent } from "./navbar-mail/navbar-mail.component";
import { MailRoutingModule } from "./mail-routing.module";

@NgModule({
    declarations: [MailComponent, MailListComponent, NavbarMailComponent],
    imports: [CommonModule, MailRoutingModule],
})
export class MailModule {}
