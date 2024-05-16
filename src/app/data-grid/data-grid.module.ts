import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { AgGridComponentsModule } from '../ag-grid-components/ag-grid-components.module';
import { GridWrapperComponent } from './grid-wrapper/grid-wrapper.component';
import { GridWrapperHeaderComponent } from './grid-wrapper-header/grid-wrapper-header.component';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    GridWrapperComponent,
    GridWrapperHeaderComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    AgGridComponentsModule,
    AgGridModule
  ],
  exports: [],
})
export class DataGridModule {}
