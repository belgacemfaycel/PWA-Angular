import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './../../_shared/layout/footer/footer.component';
import { HeaderComponent } from './../../_shared/layout/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent],
  imports: [
    CommonModule,

  ]
})
export class DashboardModule { }
