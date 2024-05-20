import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { CommonSideBarComponent } from './common-side-bar/common-side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DailogComponent } from './dailogs/dailog/dailog.component';
import { DailogFooterComponent } from './dailogs/dailog-footer/dailog-footer.component';
import { DailogHeaderComponent } from './dailogs/dailog-header/dailog-header.component';
import { ButtonComponent } from './button/button.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    CommonSideBarComponent,
    HeaderComponent,
    DailogComponent,
    DailogFooterComponent,
    DailogHeaderComponent,
    ButtonComponent,
    SnackbarComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    HeaderComponent,
    DailogComponent,
    DailogFooterComponent,
    DailogHeaderComponent,
    ButtonComponent,
    ConfirmDialogComponent

  ]
})
export class CommonComponentsModule { }
