import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
