import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact.component";

const routes: Routes = [
    {
        path: '', component: ContactComponent
    }
];

const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [routing],
    exports: [RouterModule]
})
export class ContactRoutingModule { }