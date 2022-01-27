import { NgModule, ɵɵsetNgModuleScope } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent}
]
@NgModule({
    imports: [RouterModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}