import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "../core/components/header/header.component";
import { FooterComponent } from "../core/components/footer/footer.component";
import { SidebarComponent } from "../core/components/sidebar/sidebar.component";
import { OutsideDirective } from "../shared/directives/outside.directive";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        OutsideDirective,
    ],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class CoreModule {}
