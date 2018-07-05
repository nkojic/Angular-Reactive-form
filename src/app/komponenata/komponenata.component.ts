import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProveraTextPoljaValidators } from './proveraTextPolja.validators';

@Component({
  selector: 'app-komponenata',
  templateUrl: './komponenata.component.html',
  styleUrls: ['./komponenata.component.css']
})
export class KomponenataComponent implements OnInit {
  naslov= "Rad sa Material-om";
  mojaForma = new FormGroup({
    hrana : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      ProveraTextPoljaValidators.nemaX,
      Validators.pattern("^[A-Z]*$")
    ]),
    mail : new FormControl('', [
      Validators.required,
      Validators.email,
      ProveraTextPoljaValidators.nemaX
    ])
  });

  posalji(){
    console.log(this.mojaForma.value);
    // imeServisa.metod(this.mojaForma.value)
    this.mojaForma.setErrors({
     greska : true
    })

  }


  constructor() { }

  ngOnInit() {
  }

}
