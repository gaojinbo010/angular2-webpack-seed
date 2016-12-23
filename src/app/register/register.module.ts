import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routes';
import PeopleService from '../../service/people/people.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterComponent],
    providers: [PeopleService]
})
export class RegisterModule { }