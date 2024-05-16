import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';

const routes: Routes = [{ path: '', children: [
  { path: '', component: ImportantNumbersComponent, data: { title: 'Important Numbers' } },
 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportantNumbersRoutingModule { }
