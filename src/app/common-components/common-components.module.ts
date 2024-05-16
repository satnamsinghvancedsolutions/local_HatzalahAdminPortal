import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { CommonSideBarComponent } from './common-side-bar/common-side-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommonSideBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ]
})
export class CommonComponentsModule { }
