import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatSliderModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { CardExampleComponent } from './card-example/card-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    CardExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
