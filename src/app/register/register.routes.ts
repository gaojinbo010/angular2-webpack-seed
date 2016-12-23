import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes:Routes=[
    {
        path:'',component:RegisterComponent
    }
];

const routing=RouterModule.forChild(routes);

@NgModule({
    imports:[routing],
    exports:[RouterModule]
})
export class RegisterRoutingModule{ }
