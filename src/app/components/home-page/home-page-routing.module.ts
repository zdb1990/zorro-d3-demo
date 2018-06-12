import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './../auto/login/login.component';
import { SignOutPageComponent } from './sign-out-page/sign-out-page.component';
import { ReactPageComponent } from './../react-page/react-page.component';
const routes: Routes = [
    {
        path: '', component: HomePageComponent,
        children: [
            { path: '', redirectTo: '/home/sign-out', pathMatch: 'full' },
            { path: 'home/sign-out', component: SignOutPageComponent },
            {path: 'home/react' , component: ReactPageComponent}
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule { }

export const routedComponents = [
    HomePageComponent,
    LoginComponent,
    SignOutPageComponent,
    ReactPageComponent
];