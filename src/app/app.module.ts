import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GravatarModule } from 'ngx-gravatar';
import { RouterModule } from '@angular/router';

@NgModule ({
  declarations: [
    AppComponent,

    LandingPageComponent,
    HomeComponent,

    FooterComponent
  ],
  imports: [
    BrowserModule,
    GravatarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
