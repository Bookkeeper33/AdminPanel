import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: "mail",
        loadChildren: () =>
            import("./mail/mail.module").then((m) => m.MailModule),
    },
    {
        path: "**",
        redirectTo: "/dashboard",
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
