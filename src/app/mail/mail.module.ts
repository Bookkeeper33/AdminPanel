import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MailRoutingModule } from "./mail-routing.module";

import { MailComponent } from "./mail.component";
import { MailListComponent } from "./mail-list/mail-list.component";
import { NavbarMailComponent } from "./navbar-mail/navbar-mail.component";
import { MailDetailComponent } from "./mail-detail/mail-detail.component";
import { MailModalComponent } from "./mail-modal/mail-modal.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MailComponent,
        MailListComponent,
        NavbarMailComponent,
        MailDetailComponent,
        MailModalComponent,
    ],
    imports: [CommonModule, MailRoutingModule, FormsModule, SharedModule],
})
export class MailModule {}
