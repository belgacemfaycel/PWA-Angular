import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    PublicComponent,
    AuthenticationComponent,
    RegisterComponent],
  imports: [
    PublicRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicModule { }
