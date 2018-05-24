import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
    { path: '', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule { }

export const routedComponents = [
    HomePageComponent,
    FooterComponent,
    SlideComponent,
    HeaderComponent,
];