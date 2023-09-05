import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MailComponent } from "./mail.component";
import { MailDetailComponent } from "./mail-detail/mail-detail.component";
import { MailListComponent } from "./mail-list/mail-list.component";

const routes: Routes = [
    {
        path: "",
        component: MailComponent,
        children: [
            {
                path: "",
                redirectTo: "Inbox",
                pathMatch: "full",
            },
            {
                path: ":category",
                component: MailListComponent,
            },
            {
                path: ":category/:id",
                component: MailDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MailRoutingModule {}
