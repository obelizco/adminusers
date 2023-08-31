import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports:[
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations:[
        LoginComponent
    ]
    
})
export class LoginModule {
}
