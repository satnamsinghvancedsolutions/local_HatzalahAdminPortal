import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { CommonSideBarComponent } from './common-side-bar/common-side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CommonSideBarComponent,
    HeaderComponent
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
    HeaderComponent
  ]
})
export class CommonComponentsModule { }
