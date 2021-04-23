import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { LongUrlService } from './services/long-url.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ShortnerComponent } from './shortner/shortner.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MyLinksComponent } from './my-links/my-links.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ShortnerComponent,
    NavbarComponent,
    MyLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LongUrlService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
