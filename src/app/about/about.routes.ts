import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes:Routes=[
    {
        path:'',component:AboutComponent,children:[]
    }
];

const routing=RouterModule.forChild(routes);

@NgModule({
    imports:[routing],
    exports:[RouterModule]
})
export class AboutRoutingModule{ }