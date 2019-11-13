import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjetDomotiqueComponent } from '../objet-domotique/objet-domotique.component';
import { AddObjetDomotique2Component } from '../add-objet-domotique2/add-objet-domotique2.component';
import { serviceObjet } from 'src/services/serviceObjet';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ObjetDomotiqueComponent,
    AddObjetDomotique2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [serviceObjet],
  bootstrap: [AppComponent]
})
export class AppModule { }
