import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportantNumbersRoutingModule } from './important-numbers-routing.module';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { DataGridModule } from 'src/app/data-grid/data-grid.module';


@NgModule({
  declarations: [
    ImportantNumbersComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    ImportantNumbersRoutingModule,
    DataGridModule
  ]
})
export class ImportantNumbersModule { }
