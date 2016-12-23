import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';

const routes: Routes = [
    {
        path:'',component:PeopleComponent
    }
];

export const routing=RouterModule.forChild(routes);