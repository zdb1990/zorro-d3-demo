import { HomePageRoutingModule, routedComponents } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        SharedModule,
        HomePageRoutingModule
    ],
    exports: [],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class HomePageModule { }
