import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [{
    path: '', component: LoginComponent, children: []
}];

const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [routing],
    exports: [RouterModule]
})
export class LoginRoutingModule { }