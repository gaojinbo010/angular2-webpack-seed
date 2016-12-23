import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    exports:[LoginComponent],
    declarations: [LoginComponent]
})
export class LoginModule { }