import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MojPrviDialogComponent } from '../moj-prvi-dialog/moj-prvi-dialog.component';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'prvi-prikaz',
  templateUrl: './prvi-prikaz.component.html',
  styleUrls: ['./prvi-prikaz.component.css']
})
export class PrviPrikazComponent implements OnInit {
podaci;
podatakIzDialog = "Nista na pocetku";
selected = 'option1';

  constructor(public mojDijalog1: MatDialog) { }

  ngOnInit() {
  }

  formaPrviPrikaz = new FormGroup({
    unos : new FormControl('', [
      Validators.required
    ]),
    lista : new FormControl('', [
      Validators.required
    ])
  });

  posalji(){
    console.log(this.formaPrviPrikaz.value);
    
    // // imeServisa.metod(this.mojaForma.value)
    if (this.formaPrviPrikaz.get('lista').hasError('required'))
    {console.log("ima greska u formi");
    this.formaPrviPrikaz.setErrors({
      greska : true
    })
    }
    else{
      this.otvotiDialog();
    }

    // }

  }

  otvotiDialog(){
    //console.log(this.formaPrviPrikaz.value);
    let mojDailogRef = this.mojDijalog1.open(MojPrviDialogComponent, {
      width: '500px',
      height: '400px',
      data: this.formaPrviPrikaz.value
    });
    mojDailogRef.afterClosed().subscribe(vracenoIzDialoga =>{
      //console.log(`Dialog je vratio ${vracenoIzDialoga.poljePrvoDialog}`);
      this.podatakIzDialog = vracenoIzDialoga.poljePrvoDialog;
    })

  };



}
