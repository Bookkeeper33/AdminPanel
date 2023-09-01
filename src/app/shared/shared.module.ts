import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OutsideDirective } from "./directives/outside.directive";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

@NgModule({
    declarations: [BreadcrumbComponent, OutsideDirective],
    imports: [CommonModule],
    exports: [BreadcrumbComponent, OutsideDirective],
})
export class SharedModule {}
