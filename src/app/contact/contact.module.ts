import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact.routes';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [ContactComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ContactRoutingModule
    ]
})
export class ContactModule { }
