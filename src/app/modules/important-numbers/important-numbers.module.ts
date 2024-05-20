import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantNumbersRoutingModule } from './important-numbers-routing.module';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { DataGridModule } from 'src/app/data-grid/data-grid.module';
import { AddImpotantNumberComponent } from './add-impotant-number/add-impotant-number.component';
import { FormsModule } from '@angular/forms';
import { AgGridComponentsModule } from 'src/app/ag-grid-components/ag-grid-components.module';


@NgModule({
  declarations: [
    ImportantNumbersComponent,
    AddImpotantNumberComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    ImportantNumbersRoutingModule,
    DataGridModule,
    FormsModule,
    AngularMaterialModule,
    AgGridComponentsModule
  ]
})
export class ImportantNumbersModule { }
