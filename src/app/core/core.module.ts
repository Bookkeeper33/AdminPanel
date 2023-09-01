import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { HeaderComponent } from "../core/components/header/header.component";
import { FooterComponent } from "../core/components/footer/footer.component";
import { SidebarComponent } from "../core/components/sidebar/sidebar.component";

@NgModule({
    declarations: [HeaderComponent, SidebarComponent, FooterComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class CoreModule {}
