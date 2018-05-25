import { HomePageRoutingModule, routedComponents } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        HomePageRoutingModule
    ],
    exports: [],
    declarations: [
        ...routedComponents,

    ],
    providers: [],
})
export class HomePageModule { }
