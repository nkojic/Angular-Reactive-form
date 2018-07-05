import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moj-prvi-dialog',
  templateUrl: './moj-prvi-dialog.component.html',
  styleUrls: ['./moj-prvi-dialog.component.css']
})
export class MojPrviDialogComponent implements OnInit {

  constructor(
    public dilogRefMojDialog : MatDialogRef<MojPrviDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) { }

  ngOnInit() {
  }
  onSumbitForme(){
    console.log(this.mojaFormaDialog.value);
    
    // // imeServisa.metod(this.mojaForma.value)
    if (this.mojaFormaDialog.get('poljePrvoDialog').hasError('required'))
    {console.log("ima greska u formi");
    this.mojaFormaDialog.setErrors({
      greska : true
    })
    }
    else{
      this.onClosedOk();
    }

  }

  onClosedOk(){
    //console.log(this.mojaFormaDialog.value);
    this.dilogRefMojDialog.close(this.mojaFormaDialog.value);
  }
  onClosedCancel(){
    this.dilogRefMojDialog.close('Kliknuto CANCEL');
  }

  mojaFormaDialog = new FormGroup({
    poljePrvoDialog : new FormControl('', [
      Validators.required
    ])
  });


}
