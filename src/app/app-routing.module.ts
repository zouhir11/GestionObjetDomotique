import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetDomotiqueComponent } from 'src/objet-domotique/objet-domotique.component';


const routes: Routes = [

{path: '', component: ObjetDomotiqueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
