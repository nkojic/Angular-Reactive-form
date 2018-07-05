import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { KomponenataComponent } from './komponenata/komponenata.component';
import { PrviPrikazComponent } from './radSaModalima/prvi-prikaz/prvi-prikaz.component';
import { MojPrviDialogComponent } from './radSaModalima/moj-prvi-dialog/moj-prvi-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    KomponenataComponent,
    PrviPrikazComponent,
    MojPrviDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents:[
    MojPrviDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
