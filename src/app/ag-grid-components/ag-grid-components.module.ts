import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsCellRendererComponent } from './actions-cell-renderer/actions-cell-renderer.component';

@NgModule({
  declarations: [
    ActionsCellRendererComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ActionsCellRendererComponent
  ]

})
export class AgGridComponentsModule { }
