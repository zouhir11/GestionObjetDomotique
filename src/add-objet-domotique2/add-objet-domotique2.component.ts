import { Component, OnInit } from '@angular/core';
import { serviceObjet } from 'src/services/serviceObjet';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-objet-domotique2',
  templateUrl: './add-objet-domotique2.component.html',
  styleUrls: ['./add-objet-domotique2.component.css']
})
export class AddObjetDomotique2Component implements OnInit {
  objet: any;
  constructor(private serviceObj: serviceObjet) { }

  
  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    console.log("test");
    console.log(form.value);
    const nomDObjet= form.value['nomDObjet'];
    const emplacementDOobjet= form.value['emplacementDOobjet'];
    const statutDObjet= form.value['statutDObjet'];
    const estConnecte= form.value['estConnecte'];
    this.serviceObj.ajouterO(nomDObjet, emplacementDOobjet, statutDObjet, estConnecte);

  }

}
