import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthenticationComponent } from './pages/public/authentication/authentication.component';
import { PublicComponent } from './pages/public/public.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { FooterComponent } from './_shared/layout/footer/footer.component';
import { HeaderComponent } from './_shared/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PublicComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
