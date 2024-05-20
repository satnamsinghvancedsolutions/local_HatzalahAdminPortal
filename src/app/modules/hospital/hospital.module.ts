import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './hospital/hospital.component';
import { DataGridModule } from 'src/app/data-grid/data-grid.module';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { AgGridComponentsModule } from 'src/app/ag-grid-components/ag-grid-components.module';

@NgModule({
  declarations: [HospitalComponent, AddHospitalComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    DataGridModule,
    ReactiveFormsModule,
    FormsModule,
    CommonComponentsModule,
    AngularMaterialModule,
    AgGridComponentsModule
  ],
})
export class HospitalModule {}
